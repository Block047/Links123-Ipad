// Home
function openHome() {
  document.querySelector('#home').style.display = "block";
  var display = document.querySelectorAll('#games, #apps, #search, #settings, #changelog');
  display.forEach((none) => { none.style.display = "none"; });
  document.querySelector('#button-h').classList.add('active');
  var button = document.querySelectorAll('#button-g, #button-a, #button-s, #button-st, #button-cl');
  button.forEach((color) => { color.classList.remove('active'); });
}

// Games
function openGames() {
  document.querySelector('#games').style.display = "block";
  var display = document.querySelectorAll('#home, #apps, #settings, #changelog');
  display.forEach((none) => { none.style.display = "none"; });
  document.querySelector('#button-g').classList.add('active');
  var button = document.querySelectorAll('#button-h, #button-a, #button-st, #button-cl');
  button.forEach((color) => { color.classList.remove('active'); });
}

// Apps
function openApps() {
  document.querySelector('#apps').style.display = "block";
  var display = document.querySelectorAll('#home, #games, #settings, #changelog');
  display.forEach((none) => { none.style.display = "none"; });
  document.querySelector('#button-a').classList.add('active');
  var button = document.querySelectorAll('#button-h, #button-g, #button-st, #button-cl');
  button.forEach((color) => { color.classList.remove('active'); });
}

// Search Bar for Games
function search_button_g() {
  let input = document.querySelector('#searchBar-g').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('button');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "inline";
    }
  }
}

// Search Bar for Apps
function search_button_a() {
  let input = document.querySelector('#searchBar-a').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('button2');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "inline";
    }
  }
}

// Settings
function openSettings() {
  document.querySelector('#settings').style.display = "block";
  var display = document.querySelectorAll('#home, #games, #apps, #changelog');
  display.forEach((none) => { none.style.display = "none"; });
  document.querySelector('#button-st').classList.add('active');
  var button = document.querySelectorAll('#button-h, #button-g, #button-a, #button-cl');
  button.forEach((color) => { color.classList.remove('active'); });
}

// Themes
function showThemes() {
  document.querySelector('#themes').style.display = "block";
  var display = document.querySelectorAll('');
  display.forEach((none) => { none.style.display = "none"; });
  document.querySelector('#button-t').classList.add('active');
  var button = document.querySelectorAll('');
  button.forEach((color) => { color.classList.remove('active'); });
}  
      
// The themes
function darkMode() {
  document.body.classList.remove('white-mode');
  document.body.classList.remove('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.remove('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.remove('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.remove('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.remove('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.remove('beta-color'); });
  document.body.classList.remove('V2-style');
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.remove('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.remove('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.remove('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.remove('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.remove('V2-color'); });
  document.body.classList.remove('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.remove('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.remove('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.remove('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.remove('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.remove('sunset-color'); });
  document.body.classList.remove('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.remove('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.remove('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.remove('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.remove('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.remove('blue-sky-color'); });
  localStorage.setItem('theme', 'dark');
}
     
function whiteMode() {
  document.body.classList.add('white-mode');
  document.body.classList.remove('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.remove('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.remove('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.remove('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.remove('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.remove('beta-color'); });
  document.body.classList.remove('V2-style');
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.remove('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.remove('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.remove('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.remove('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.remove('V2-color'); });
  document.body.classList.remove('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.remove('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.remove('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.remove('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.remove('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.remove('sunset-color'); });
  document.body.classList.remove('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.remove('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.remove('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.remove('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.remove('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.remove('blue-sky-color'); });
  localStorage.setItem('theme', 'white');
}
     
function betaStyle() {
  document.body.classList.add('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.add('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.add('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.add('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.add('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.add('beta-color'); });
  document.body.classList.remove('white-mode');
  document.body.classList.remove('V2-style');
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.remove('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.remove('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.remove('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.remove('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.remove('V2-color'); });
  document.body.classList.remove('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.remove('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.remove('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.remove('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.remove('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.remove('sunset-color'); });
  document.body.classList.remove('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.remove('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.remove('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.remove('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.remove('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.remove('blue-sky-color'); });
  localStorage.setItem('theme', 'beta');
}
     
function V2Style() {
  document.body.classList.add('V2-style');    
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.add('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.add('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.add('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.add('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.add('V2-color'); });
  document.body.classList.remove('white-mode');
  document.body.classList.remove('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.remove('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.remove('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.remove('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.remove('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.remove('beta-color'); });
  document.body.classList.remove('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.remove('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.remove('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.remove('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.remove('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.remove('sunset-color'); });
  document.body.classList.remove('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.remove('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.remove('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.remove('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.remove('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.remove('blue-sky-color'); });
  localStorage.setItem('theme', 'v2');
}

function sunSet() {
  document.body.classList.add('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.add('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.add('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.add('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.add('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.add('sunset-color'); });
  document.body.classList.remove('white-mode');
  document.body.classList.remove('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.remove('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.remove('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.remove('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.remove('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.remove('beta-color'); });
  document.body.classList.remove('V2-style');
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.remove('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.remove('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.remove('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.remove('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.remove('V2-color'); });
  document.body.classList.remove('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.remove('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.remove('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.remove('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.remove('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.remove('blue-sky-color'); });
  localStorage.setItem('theme', 'sunset');
}
      
function blueSky() {
  document.body.classList.add('blue-sky');    
  var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  blueSkyButton.forEach((button) => {
  button.classList.add('blue-sky-button'); });
  var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  blueSkyInput.forEach((input) => {
  input.classList.add('blue-sky-input'); });
  var blueSkyButton2 = document.querySelectorAll('.button-f');
  blueSkyButton2.forEach((button) => {
  button.classList.add('blue-sky-button2'); });
  var blueSkyButton3 = document.querySelectorAll('.filters-content button');
  blueSkyButton3.forEach((button) => {
  button.classList.add('blue-sky-button3'); });
  var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  blueSkyColor.forEach((color) => {
  color.classList.add('blue-sky-color'); });
  document.body.classList.remove('white-mode');
  document.body.classList.remove('beta-style');
  var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton.forEach((button) => {
  button.classList.remove('old-button'); });
  var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput.forEach((input) => {
  input.classList.remove('old-input'); });
  var betaButton = document.querySelectorAll('.button-f');
  betaButton.forEach((button) => {
  button.classList.remove('beta-button'); });
  var betaButton2 = document.querySelectorAll('.filters-content button');
  betaButton2.forEach((button) => {
  button.classList.remove('beta-button2'); });
  var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  betaColor.forEach((color) => {
  color.classList.remove('beta-color'); });
  document.body.classList.remove('V2-style');
  var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  oldButton2.forEach((button) => {
  button.classList.remove('old-button2'); });
  var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
  oldInput2.forEach((input2) => {
  input2.classList.remove('old-input2'); });
  var v2Button = document.querySelectorAll('.button-f');
  v2Button.forEach((button) => {
  button.classList.remove('V2-button'); });
  var v2Button2 = document.querySelectorAll('.filters-content button');
  v2Button2.forEach((button) => {
  button.classList.remove('V2-button2'); });
  var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
  v2Color.forEach((color) => {
  color.classList.remove('V2-color'); });
  document.body.classList.remove('sunset');    
  var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
  sunSetButton.forEach((button) => {
  button.classList.remove('sunset-button'); });
  var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
  sunSetInput.forEach((input) => {
  input.classList.remove('sunset-input'); });
  var sunSetButton2 = document.querySelectorAll('.button-f');
  sunSetButton2.forEach((button) => {
  button.classList.remove('sunset-button2'); });
  var sunSetButton3 = document.querySelectorAll('.filters-content button');
  sunSetButton3.forEach((button) => {
  button.classList.remove('sunset-button3'); });
  var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
  sunSetColor.forEach((color) => {
  color.classList.remove('sunset-color'); });
  localStorage.setItem('theme', 'bluesky');
}
     
window.onload = function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'white') {
     document.body.classList.add('white-mode');
  }
  if (theme === 'beta') {
     document.body.classList.add('beta-style');
     var oldButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
     oldButton.forEach((button) => {
     button.classList.add('old-button'); });
     var oldInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
     oldInput.forEach((input) => {
     input.classList.add('old-input'); });
     var betaButton = document.querySelectorAll('.button-f');
     betaButton.forEach((button) => {
     button.classList.add('beta-button'); });
     var betaButton2 = document.querySelectorAll('.filters-content button');
     betaButton2.forEach((button) => {
     button.classList.add('beta-button2'); });
     var betaColor = document.querySelectorAll('#navbar, #sidenav, #black-box, #changes-container');
     betaColor.forEach((color) => {
     color.classList.add('beta-color'); });
  }
  if (theme === 'v2') {
    document.body.classList.add('V2-style');    
    var oldButton2 = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
    oldButton2.forEach((button) => {
    button.classList.add('old-button2'); });
    var oldInput2 = document.querySelectorAll('#searchBar-g, #searchBar-a');
    oldInput2.forEach((input2) => {
    input2.classList.add('old-input2'); });
    var v2Button = document.querySelectorAll('.button-f');
    v2Button.forEach((button) => {
    button.classList.add('V2-button'); });
    var v2Button2 = document.querySelectorAll('.filters-content button');
    v2Button2.forEach((button) => {
    button.classList.add('V2-button2'); });
    var v2Color = document.querySelectorAll('#navbar, #sidenav, #black-box');
    v2Color.forEach((color) => {
    color.classList.add('V2-color'); });
  }
  if (theme === 'sunset') {
    document.body.classList.add('sunset');    
    var sunSetButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
    sunSetButton.forEach((button) => {
    button.classList.add('sunset-button'); });
    var sunSetInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
    sunSetInput.forEach((input) => {
    input.classList.add('sunset-input'); });
    var sunSetButton2 = document.querySelectorAll('.button-f');
    sunSetButton2.forEach((button) => {
    button.classList.add('sunset-button2'); });
    var sunSetButton3 = document.querySelectorAll('.filters-content button');
    sunSetButton3.forEach((button) => {
    button.classList.add('sunset-button3'); });
    var sunSetColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
    sunSetColor.forEach((color) => {
    color.classList.add('sunset-color'); });
  } 
  if (theme === 'bluesky') {
    document.body.classList.add('blue-sky');    
    var blueSkyButton = document.querySelectorAll('.button, .button2, .button-u, .button-s, .button-a, .button-h, .button-x');
    blueSkyButton.forEach((button) => {
    button.classList.add('blue-sky-button'); });
    var blueSkyInput = document.querySelectorAll('#searchBar-g, #searchBar-a');
    blueSkyInput.forEach((input) => {
    input.classList.add('blue-sky-input'); });
    var blueSkyButton2 = document.querySelectorAll('.button-f');
    blueSkyButton2.forEach((button) => {
    button.classList.add('blue-sky-button2'); });
    var blueSkyButton3 = document.querySelectorAll('.filters-content button');
    blueSkyButton3.forEach((button) => {
    button.classList.add('blue-sky-button3'); });
    var blueSkyColor = document.querySelectorAll('#navbar, #sidenav, #black-box');
    blueSkyColor.forEach((color) => {
    color.classList.add('blue-sky-color'); });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  setInterval(ping, 5000);
  var phrases = [
    "Welcome to Links123, the perfect site that collects games and apps from other websites! Links123 has the best games to keep you entertained at school or at home! So relax and enjoy the collection of games and apps the site compiles every once in a while.",
    "Made by ???!",
    "zzz",
    "-0",
    "ERROR CODE: S3KN2IL1",
    "Do you actually read this?",
    "Each update takes me 4 months!",
    "Have you read all the splash texts?",
    "It's just a little message. Nothing to see here… or is there?",
    "What is the least played game?",
    "You will never see me speak English!",
    "Why is it called Links123?",
    "Meme of the day!",
    "Why not?",
    "99% bug free!",
    "Dame mi dinero y mi respeto",
    "East is up",
    "Otro dia",
    "100 hours of Shreksophone",
    "Dame mi dinero",
    "I see you!",
    "Have a great day!",
    "Mind: Okay, we need to come up with an original name for the page. Don't just put 123 in the name we're thinking of for the links page. We can put- Me: Links123, I like that name. Mind: Kill yourself.",
    "It always seems impossible until it's done.",
    "!!!WARNING SOMEONE IS BEHIND YOU!!!",
    "Fun fact: While I was looking for game sites since no one wanted to give me one, in the search bar I put games html and found Amaze-Games and that's where I found HTML.cafe",
    "No DINERO for you!",
    "No dinero. Just monedas made out of chicken",
    "For educational uses!",
    "Eres negro",
    "Dinero de Zimbawe 100 trillion dollars = 40 us cents",
    ":3",
    "If you get this message, you are lucky",
    "Firma este papel y tu culo será para mi",
    "UwU",
    "Loading...",
    "Tu dinero es de telemundo",
    "There is no better day than today!",
    "Welcome back!",
    "Reminder: Do your work!",
    "Rule 34 is now unblocked!",
    "Hi",
    "Orale Huey!",
    "Can't divide by zero!",
    "How to get a negative zero on a calculator?",
    "0 ads!",
    "Carrot!",
    "Not on Files!",
    "No tengo dinero :(((((((",
    "This copy of Links123 is genuine.",
    "Fun fact: They can unlock your iPad even with a password",
    "You found the secret message",
    "I know where you live",
    "Your splash text here!",
    "Thank you for using Links123!",
    "Free time!",
    "supermegaultraestrellasworld2 is a bad password!",
    "Have a nice day!",
    "It looks a lot like Art Class, doesn't it?",
    "Dinero.net",
    "Give me my dinero 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺",
    "Today is the day.",
    "One more day",
    "Defiant Statement: You will not defeat Links123!!",
    "I Love Choco Cake",
    "With Yum Foods and In Cool Kitchen",
    "Maybe we will develop a chip to have on computers and give to people to buy… maybe if we get funded.",
    "We are like Team Xecuter, in a way, but for schools, and we do not go against the law, but we do go against the school, soooooo. ",
    "La batalla ya ha empezado, en mundo muy cuadrado",
    "Talk about low budget games! No fun or hacks? I like piracy better!",
    "Hello, if you are an administrator and you are truly reading this, I can give a wager, and I can be bribed, but not with money",
    "You know what they say… if you don't get it the first time, try and try again!!!",
    "Okay look, we got this because when we finish everything, what are we supposed to do, stare at a wall or a window, hmmm?",
    "Links123 V4???",
    "BMW M3 GTR",
    "Why are you looking at me?",
    "Have fun?",
    "Don't forget to do your work!",
    "Before this page was a google docs",
    "Lego Mario time!",
    "Ate some cereal",
    "Links123 is 2.99 now!",
    "Why so much stew?",
    "Next update tomorrow, the day after tomorrow, in a week, in a month, in a year or never",
    "I will come rescue the day",
    "Who else spends 40 hours a day on games????",
    "LEBROOOOON",
    "How big",
    "Lips123 💋",
    "Tu mama",
    "They say we can't have nice things, but here we are",
    "The more beef the better sound gay, but you all wanna sleep together; ok.",
    "We've got so much school credit",
    "Now porting to iOS for Monroe iPads!",
    "Now Porting as a Windows OS .iso!",
    "Now Porting to Linux!",
    "Ported onto a Nintendo Switch!",
    "What did we do wrong, set the school free?",
    "Running on AA Batteries!",
    "1 10v3 133t 5p34k",
    "Are you human?",
    "Games By Multiple Humans",
    "I would love to thank Lebron James for being Lebron James",
    "Cebollas!",
    "Fun! New Games!",
    "You can get Third Graders to do anything for Pokemon Cards!",
    "Here for you when Kanye goes on a rant",
    "His Name is Ye.",
    "Lexar Chips! Buy Now!!!",
    "It seems you have met a terrible, terrible demise.",
    "This website has an error! Please reload.",
    "WE LOVE YOU Mr. Marmur",
    "Marmur Forever!",
    "Time moves fast... Doesn't it?",
    "There is a lot of variety of splash texts here!",
    "Your third favorite teacher, Mr Marmur.",
    "The first game I put on the first version of Links123 was New Super Mario Bros. - Mario Vs Luigi. Why is it here? It can't be because the chromebook has a managed Wi-Fi network.",
    "If you get caught, don't blame me, it's not my fault that you decided to wear this during class.",
    "Anything new? probably soon",
    "##############",
    "Mama huevo",
    "Woahh is this a splash text?",
    "Stop playing and go do your work!",
    "WHYYYYYYYYYYYY WEREN'T YOU AT MY CLAAAAAAAAAASS?!?!?!?!",
    "¿No tienes nada MEJOR que hacer?",
    "Don't you have anything BETTER to do?",
    "Easter eggs?",
    "Download on the App Store",
    "Get it on Google Play",
    "Get in from Microsoft Store",
    "Available at Amazon Appstore",
    "Who's playing?",
    "How was your Quiz?",
    "How was your Test?",
    "You don't need your Ipad now",
    "How many splash texts have I deleted? A LOT",
    "TURN. AROUND.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Meow",
    "You again?",
    "20 new games!",
    "Fun fact: you're on a webpage right now",
    "Keep going",
    "No running in the halls!",
    "Don't make a permanant decision because of your temporary feelings",
    "No drinking drinks in the halls!",
    "No looking in other people's lockers in the halls!",
    "99 seconds detention for you! Your parents will hear about this one!",
    "Akpo has 10 ducats. He goes to the bank to get some \u201Cbank\u201D and parties for 25.75 hrs.",
    "Splash text!",
    "Like and subscribe",
    "Links123 V3 >>>>>>>>>> Links123 V2.4 >>> Links123 V2 > Links123 Ipad Edition > Links123 V1 (Google Doc)",
    "Ugh... it's you. I'm joking! Welcome back!",
    "My site is amazing!",
    "This website has been blocked by your administrator.",
    "Living in the swamp of love (Swamp of love), I fell down from above (From above), I was blind now I can see (I can see), This is where I wanna be, And it is time for me to be (To be), Living in sweet ecstasy (Ecstasy), And it's time for me to be free!",
    "Error 404 Not Found",
    "En caso que no los vea, buenos días, buenas tardes y buenas noches",
    "In case i don't see you, good afternoon, good evening and good night",
    "Te doy 2 centavos",
    "Pepito69",
    "The amount of dinero fills you with DETERMINATION",
    "Wake up! dinero!",
    "Welcome to Brawl Talk!",
    "Congratulations! You found all 7 notebooks! Now all you need to do is... Find a way out before I catch you! Hahahaaaaaa!",
    "Congratulations! You found all 7 notebooks! Now all you need to do is... GET OUT WHILE YOU STILL CAN!!! Hahahaaaaaa!",
    "Now it's time for everybody's favorite subject...\tMATH!",
    "3.1415926535897932384626433...",
    "Jarvis, link that.",
    "Our days are not over",
    "Think Mark, THINK",
    "Curiosity never truly ends.",
    "I'm closer than you think",
    "Can you keep a secret?",
    "We meet again… or is this the first time?",
    "Click if you dare.",
    "I wonder what you'll find here.",
    "What are you waiting for?",
    "I'm here to distract you",
    "Come back soon!",
    "You're next!",
    "Behind you!",
    "I'm always here if you need me",
    "Mr Marmur went to kmart with 3 friends. Everyone bought pretzels and fishsticks. If fishsticks cost $12 each, and pretzels cost x amount.  If the total the group spent is 200 dollars, how much did pretzels cost?",
    "Akpo has 2 flash drives of the same size that he uses to store roms of earthbound and other video games. Each drive holds the same amount of gigabytes, x. He wants to move everything to 1 memory card that can hold up to 8 GB.",
    "CIA (Carpet Investments Associated)",
    "Four more than half of the students in Mr. Marmur's homeroom are gamers. If 12 students are gamers. What equation can be written to find the number of students in Mr. Marmur's homeroom that are gamers.",
    "OnlyFans is now unblocked!",
    "Pepelover",
    "Blue Pill",
    "Other Blue Pill",
    "Mr. Marmur's period ⅘ contains 23 students. 2 less than a quarter of the students play sports. Write an equation and solve for the number of students who play sports.",
    "CECIL!!! I NEED YOU CECIL",
    "WHERE IS OMNI MAN?? WHERE IS HE",
    "Are you sure?",
    "Oeoahah",
    "Back and even better than ever before!",
    "Computers DOWN!",
    "Probably not coded by ChatGPT",
    "No, I'm not adding Fortnite to this site, stay mad",
    "Chicken Jockey",
    "Flint and Steel",
    "This is NOT a splash message",
    "Have fun!",
    "What if...?",
    "Wii U Edition",
    "Pocket Edition",
    "Playstation 3 Edition",
    "Xbox 360 Edition",
    "Nintendo Switch Edition",
    "Xbox One Edition",
    "Playstation 4 Edition",
    "PlayStation Vita Edition",
    "New Nintendo 3DS Edition",
    "Education Edition",
    "Pi Edition",
    "Java Edition",
    "Bedrock Edition",
    "Fire tv Edition",
    "Apple tv Edition",
    "Optimized for potato PC's",
    "Ask your teacher!",
    "& Knuckles!",
    "An update to this page will be coming soon!",
    "Arregla tu juego!",
    "Arregla tu pagina!",
    "Brawl Stars!",
    "Akpo has 300 gigabytes of storage on his chromebook and gains 3 every month (he wishes it was terabytes). Amgo has 200 gigabytes on his chromebook and gains 1 every month. How many more gigabytes does Akpo have than Amgo. (Very important in order to download and watch the scene of toads tickling an old man in Mario RPG)",
    "Mr. Marmur is boring5x + Mr. Marmur is boring5⅕x - Mr.Marmur is boringzzz + Mr.Marmur is boring2x - Mr.Marmur is boringzz",
    "Awesome!",
    "Singleplayer!",
    "Not on Steam!",
    "Try it!",
    "Sensational!",
    "Nice to meet you!",
    "Very fun!",
    "Omnipotent!",
    "That's super!",
    "Read more books!",
    "Finally complete?",
    "Conventional!",
    "Meeting expectations!",
    "Extra things!",
    "Something funny!",
    "You are welcome here!",
    "Teachers gonna teach",
    "Too cool for school!",
    "Ah, another visitor!",
    "Wonderful!",
    "Majestic!",
    "Incredible!",
    "Unimaginable!",
    "Fantastic!",
    "An Ordinary Day",
    "Do not look directly at the bugs!",
    "¡Sin dolor no hay gloria!",
    "Apples = oranges.",
    "Caw caw! (ancient Crow proverb)",
    "Do or do not. There is no try.",
    "Eat. Sleep. Play. Repeat.",
    "Expect the unexpected.",
    "Fall seven times, stand up eight.",
    "It could be worse!",
    "Remember to Hypercharge your day!",
    "Same time tomorrow?",
    "Sometimes it really is just a skill issue.",
    "Stay hydrated.",
    "There is a learning in every defeat.",
    "Today is time to take on a new challenge...",
    "Touch grass. But come back tomorrow.",
    "Your favorite game will be added to the page... eventually.",
    "Why do programmers hate nature? It has too many bugs!",
    "Looking into this code, there is no secret",
    "Now, do I have to tell ya one more time?",
    "nuh uh",
    "Oh, for the love of god... Heyyy!!! Welcome!",
    "What an interesting surprise!",
    "Nothing?",
    "Unfortunate.",
    "Messing with a yoyo has its up and downs",
    "A great power comes great responsibility",
    "You are the player",
    "Lego Mario is not included",
    "Activate Links123 | Go to settings to activate Links123",
    "So many games to choose from, where will you start? Google Classroom.",
    "Downloading your search history...",
    "Windows 10 Edition",
    "Fancy!",
    "Changing your passwords...",
    "Akpo and a stuffed tails doll work at the Jamesburg Deli part time to make money to spend on FNAF games. Akpo spent $125 on ingredients for muffins and $92 on ingredients for bagels. Write an expression to find the boys profit for bagels and muffins. Bagel costs: $2.80 each. Muffin costs: $1.40 each.",
    "School routine: Games.",
    "Big Sad",
    "¡A jugar!",
    "dinerocloud - dinerocloud + dineropeanutbuttercloud + dinerocloudpizzatower",
    "Mr. Marmur spilled spaghetti out of his pocket and a bunch of algebraic terms. Help Mr. Marmur combine the like-terms and match them.",
    "Amgo bought s yards of FNAF fabric priced at $8 per yard and c yards of green fabric priced at $3 per yard. What expression could you use to determine the total cost of the fabric? If he bought 5 yards of FNAF fabric and 8 yards of green fabric, how much did Amgo spend in total?",
    "Press l3 and r3",
    "Jarvis, remove his balls",
    "Jarvis, spam the N word",
    "Impossible!",
    "Let's be friends!",
    "Will you be my friend?",
    "I wub you!",
    "I need a hug!",
    "See you later.",
    "Yippee!",
    "Surprise!",
    "Ta-da!",
    "Please, leave a review.",
    "Ooh, so, you wanna play?",
    "Magnifique!",
    "Meow! Sorry, got caught up in the moment.",
    "Friends forever!",
    "Time for a nice cup of tea.",
    "Have a cookie!",
    "I am watching you!",
    "This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you. This is normal we already told you.",
    "Everything is OK",
    "All is well.",
    "This is normal!",
    "I see you!",
    "Brawl Stars forever!",
    "I'm gonna chase you, and I'm gonna find you.",
    "You can't get away from me! Ever...",
    "I'm gonna catch you!",
    "This moment is sponsored by Colt Crunch cereal.",
    "Mostly inspired by Art Class",
    "lolololol",
    "Remember to do your homework Guys🤓",
    "I'll pay you 50 cents to change that ridiculous profile picture you have now!",
    "The chicken tenders couldn't revive Mr. Marmur",
    "Not clickbait!",
    "If you're lonely, an ED might appear nearby.",
    "A angry robot will randomly show up and attack you. Watch out!",
    "Poison clouds are here and they arrive sooner than you think.",
    "YES KIN~....Wait no...",
    "V1 > Current version",
    "Want to play? That's okay. Pick your game and start the day!",
    "Melodians 탈덕안돼...아!",
    "Why me?",
    "You are mine now!",
    "WASABI POWAAAAAAAAAAAAAA🔥🔥🔥🔥🔥🔥🔥",
    "What do you got for me today New Jersey?",
    "Mr. Marmur's store buys 400 identical Star Wars action figures for a total cost of $265.75 and sells them for $13 each. What is the percent markup?",
    "Akpo borrows 10 Freddy Fazebear dollars from Ricardo and Ricardo charges him a 3.34% interest rate. What is the interest earned if Akpo borrows from Ricardo for 8 years.",
    "Do Now: Prepare to battle your classmates in Super Review Match 64 (No Nintendo may not sue)",
    "The commission on the sale of property is 4.5% of the value of Ricardo's house. What is the commission on the sale of a property that has a value of $19,500. Ricardo sold his house to Akpo because he needed to get some of that dinero cha-ching!",
    "??? sold his house (again) for the monedas",
    "Mr. Marmur be making things up",
    "Hahahahahaha! Welcome to the circus! Ladies and gentlemen and anyone in between, Welcome to the circus Watch the Brawlers set the scene! Come young, come old Don't be shy, do be bold! There are stories to be told and mysteries to unfold! Bizarre curiosities, and dangerous deeds. The Brawler's circus will fulfill all your needs. You need a ticket, this show ain't for free! But do remember the amazing things you'll see",
    "Melodieeee I have a melody, Always in harmony. Melodieeee I have a destiny, Your secret fantasy. Melodieeee I have a melody, Always in harmony. Melodieeee I have utility, You put a symphony.",
    "We know that all what you wanna be; is part of the skate beats family. Don't you hang out and just be free, be with the skate beats family.",
    "Green queen from a swampy place (swampy place) With engine grease all over her face (over her face) She moves herself and dabs with grace (dab with grace) She will make you disappear without a trace. So when you run around without care. And then you feel a sudden stare. Don't look around! Don't you dare Cause' Alli is close, you better beware (AAAAAALLIIIIIII)",
    "Tap! Tap!",
    "If you're not in a Club, join a Club!",
    "This is not a meteor shower that you want to stop and admire. Watch out for big, falling rocks!",
    "Healing mushrooms appear randomly! They will heal everything close to them for a while.",
    "Poison cloud is strong enough to destroy the landscape.",
    "It's TV Time!!",
    "When the light is running low. And the shadows start to grow. And the places that you know. Seem like fantasy.",
    "Don't forget, I'm with you in the dark.",
    "Driving in my car",
    "Don't check the code! It's a mess.",
    "Job = bad",
    "It's a page!",
    "The best theme? White Mode!",
    "Guaranteed!",
    "Tell your friends!",
    "2% AI 98% Code extracted from other pages",
    "Say that again",
    "It's raining",
    "Neck hurt",
    "The present is the bridge between the past that formed us and the future we wish to build.",
    "67",
    "Nintendo Switch 2 Edition + 20 new games!",
    "La paja nubla la vista",
    "que pedo we",
    "Who are you?",
  ];

  var randomIndex = Math.floor(Math.random() * phrases.length);
  var randomPhrase = phrases[randomIndex];
  var phraseElement = document.querySelector('#randomPhrase');
  phraseElement.textContent = randomPhrase;
  if (randomPhrase.type === "image") {
    phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 100%;">`;
  }

  function changeText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    if (typeof randomPhrase === "string") {
      phraseElement.textContent = randomPhrase;
    } else if (randomPhrase.type === "image") {
      phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 100%;">`;
    }
  }

  phraseElement.addEventListener('click', changeText);
});

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwcKLS57fGeq9pCiQeDhIote-Bo1ekzjOLQL9bTIzPqx35cdxZWEJP3ln6CjjW4x18g/exec";

async function ping() {
  const timeout = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    await fetch(window.location.origin + '/main.js', {
      signal: controller.signal,
      cache: 'no-store'
    });
    clearTimeout(id);
  } catch (err) {
    clearTimeout(id);
    console.error("Tunnel dead, redirecting...");
    window.location.href = GOOGLE_SCRIPT_URL;
  }
}
