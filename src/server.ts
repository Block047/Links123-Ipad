import { spawn, ChildProcess } from "child_process";
import "dotenv/config";

// ─── Config ────────────────────────────────────────────────────────────────────

const PORT = process.env.PORT ?? 3000;
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL ?? "";
const TUNNEL_RESTART_INTERVAL = 55 * 60 * 1000; // 55 minutes

let tunnelProcess: ChildProcess | null = null;
let restartTimer: NodeJS.Timeout | null = null;

// ─── Update Google Script ───────────────────────────────────────────────────────

async function updateGoogleScript(url: string): Promise<void> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn("[tunnel] GOOGLE_SCRIPT_URL not set, skipping update");
    return;
  }

  try {
    const res = await fetch(`${GOOGLE_SCRIPT_URL}?url=${encodeURIComponent(url)}`);
    if (res.ok) {
      console.log(`[tunnel] Google Script updated with: ${url}`);
    } else {
      console.error("[tunnel] Failed to update Google Script:", res.status);
    }
  } catch (err) {
    console.error("[tunnel] Error updating Google Script:", err);
  }
}

// ─── Start Tunnel ───────────────────────────────────────────────────────────────

function startTunnel(): void {
  console.log("[tunnel] Starting pinggy tunnel...");

  tunnelProcess = spawn("ssh", [
    "-p", "443",
    "-o", "StrictHostKeyChecking=no",
    "-o", "ServerAliveInterval=30",
    "-R", `0:localhost:${PORT}`,
    "a.pinggy.io"
  ], {
    stdio: ["ignore", "pipe", "pipe"]
  });

  const handleOutput = (data: Buffer) => {
    const output = data.toString();
    process.stdout.write(`[pinggy] ${output}`);

    const match = output.match(/https:\/\/[a-zA-Z0-9\-]+\.a\.pinggy\.io/);
    if (match) {
      const url = match[0];
      console.log(`[tunnel] Detected URL: ${url}`);
      updateGoogleScript(url);
    }
  };

  tunnelProcess.stdout?.on("data", handleOutput);
  tunnelProcess.stderr?.on("data", handleOutput);

  tunnelProcess.on("exit", (code) => {
    console.log(`[tunnel] Tunnel exited with code ${code}`);
  });
}

// ─── Kill Tunnel ────────────────────────────────────────────────────────────────

function killTunnel(): void {
  if (tunnelProcess) {
    console.log("[tunnel] Killing existing tunnel...");
    tunnelProcess.kill();
    tunnelProcess = null;
  }
}

// ─── Restart Loop ───────────────────────────────────────────────────────────────

function scheduleRestart(): void {
  if (restartTimer) clearInterval(restartTimer);

  restartTimer = setInterval(() => {
    console.log("[tunnel] 55 minutes up, restarting tunnel...");
    killTunnel();
    setTimeout(startTunnel, 2000); // small delay before restarting
  }, TUNNEL_RESTART_INTERVAL);
}

// ─── Cleanup on Exit ────────────────────────────────────────────────────────────

process.on("SIGINT", () => {
  console.log("[tunnel] Shutting down...");
  killTunnel();
  if (restartTimer) clearInterval(restartTimer);
  process.exit(0);
});

process.on("SIGTERM", () => {
  killTunnel();
  if (restartTimer) clearInterval(restartTimer);
  process.exit(0);
});

// ─── Init ───────────────────────────────────────────────────────────────────────

export function initTunnel(): void {
  startTunnel();
  scheduleRestart();
}