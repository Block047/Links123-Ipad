// Stub Steam functions
window.steam_initialised = () => false;
window.steam_is_overlay_enabled = () => false;
window.steam_is_overlay_activated = () => false;
window.steam_get_app_id = () => 0;
window.steam_get_persona_name = () => "Player";
window.steam_set_achievement = () => false;
window.steam_get_achievement = () => false;
window.steam_clear_achievement = () => false;
window.steam_set_stat_int = () => false;
window.steam_set_stat_float = () => false;
window.steam_get_stat_int = () => 0;
window.steam_get_stat_float = () => 0.0;
window.steam_stats_ready = () => false;

// Intercept GameMaker's unhandledrejection handler before it can kill the game
window.addEventListener("unhandledrejection", (event) => {
    if (event.reason && event.reason.message && event.reason.message.includes("steam")) {
        console.warn("Suppressed Steam rejection:", event.reason.message);
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}, true); // true = capture phase, runs before GameMaker's listener