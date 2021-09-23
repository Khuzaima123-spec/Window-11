const timePeriodInMsVideo = 5000;

const video = document.getElementsByClassName("video")
setTimeout(function video () {
    for (var i = 0; i < loading_screen.length; i += 1) {
        video[0].play();
    }
  }, timePeriodInMsVideo);

// Disply None After some loading Time
const loading_screen = document.getElementsByClassName("loading__screen");
const timePeriodInMs = 4000;

setTimeout(function display () {
  for (var i = 0; i < loading_screen.length; i += 1) {
    loading_screen[i].style.display = "none";
  }
}, timePeriodInMs);

// Window Button Toggle
const window_btn = document.getElementsByClassName("window_btn")[0];
const startmenu = document.getElementsByClassName("startmenu")[0];

window_btn.addEventListener("click", () => {
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-641px";
  } else {
    startmenu.style.bottom = "50px";
  }
});

// Clock Toggle
const taskbar_right = document.getElementsByClassName("taskbar_right")[0];
const clock = document.getElementsByClassName("clock")[0];

taskbar_right.addEventListener("click", () => {
  if (clock.style.bottom == "50px") {
    clock.style.bottom = "-641px";
  } else {
    clock.style.bottom = "50px";
  }
});
