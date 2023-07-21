// start coding
let hours = document.getElementsByClassName("hours");
let minutes = document.getElementsByClassName("minutes");
let sec = document.getElementsByClassName("secs");
let amPm = document.getElementsByClassName("amPm");

let start = document.getElementsByClassName("timeOnly");

// logic for current time

setTimeout(() => {
  timeStart();
}, 100);

function timeStart() {
  function startClock() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let AMPM = "AM";

    if (hrs > 12) {
      hrs -= 12;
      AMPM = "PM";
    }
    hours[0].innerHTML = `${hrs}`;
    minutes[0].innerHTML = `${mins}`;
    sec[0].innerHTML = `${secs}`;
    amPm[0].innerHTML = `${AMPM}`;
  }
  setInterval(() => {
    startClock();
    currentTimeHeadingUpadte();
  }, 1000);
}
// logic for set alarm

let setAlarmButton = document.getElementById("setTheAlarm");

let wakeupTime = document.getElementsByClassName("wakeupTime");
let wakeUpValues = document.getElementById("wakeUpValues");
let forwakeUpValue = document.getElementsByClassName("forwakeUpValue");

let lunchTime = document.getElementsByClassName("lunchTime");
let lunchValues = document.getElementById("lunchValues");
let forlunchValue = document.getElementsByClassName("forlunchValue");

let napTime = document.getElementsByClassName("napTime");
let napTimeValues = document.getElementById("napTimeValues");
let napTimeValue = document.getElementsByClassName("napTimeValue");

let nightTime = document.getElementsByClassName("nightTime");
let nightTimeValues = document.getElementById("nightTimeValues");
let nightTimeValue = document.getElementsByClassName("nightTimeValue");

//  for currentTimeHeadingUpadte
let beackfastTitle = document.getElementsByClassName("beackfastTitle");
function currentTimeHeadingUpadte() {
  let time = new Date();
  let hrs = time.getHours();
  if (hrs > 0 && hrs <= 10) {
    beackfastTitle[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hrs > 10 && hrs <= 14) {
    beackfastTitle[0].innerHTML = " LET'S HAVE SOME LUNCH !!";
  } else if (hrs > 14 && hrs <= 20) {
    beackfastTitle[0].innerHTML =
      " STOP YAWNING , GET SOME TEA..   ITS JUST EVENING!";
  } else {
    beackfastTitle[0].innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
  }
}
// for card
function cardUpdate() {
  updateImageAndText();
  if (wakeUpValues.value == 24) {
    wakeupTime[0].innerHTML = `${forwakeUpValue[0].innerHTML}`;
  } else {
    wakeupTime[0].innerHTML = `${forwakeUpValue[wakeUpValues.value].innerHTML}`;
  }
  if (lunchValues.value == 24) {
    lunchTime[0].innerHTML = `${forlunchValue[0].innerHTML}`;
  } else {
    lunchTime[0].innerHTML = `${forlunchValue[lunchValues.value].innerHTML}`;
  }
  if (napTimeValues.value == 24) {
    napTime[0].innerHTML = `${napTimeValue[0].innerHTML}`;
  } else {
    napTime[0].innerHTML = `${napTimeValue[napTimeValues.value].innerHTML}`;
  }
  if (nightTimeValues.value == 24) {
    nightTime[0].innerHTML = `${nightTimeValue[0].innerHTML}`;
  } else {
    nightTime[0].innerHTML = `${
      nightTimeValue[nightTimeValues.value].innerHTML
    }`;
  }

  //   console.log(wakeUpValues.value);
  //   console.log(forwakeUpValue[wakeUpValues.value].innerHTML);
}
// Image Text Upadate
let img = document.getElementById("image");
let alarmTitle = document.getElementById("alarmTitle");
function updateImageAndText() {
  let time = new Date();
  let hrs = time.getHours();
  //   i Have one douts
  //   if (wakeUpValues.value == hrs && hrs>0 && hrs<=10) {
  if (wakeUpValues.value == hrs) {
    alarmTitle.innerHTML = " GOOD MORNING!! WAKE UP !!";
    img.setAttribute("src", "./Images/Group 5183-1.svg");
  } else if (lunchValues.value == hrs) {
    alarmTitle.innerHTML = " GOOD AFTERNOON!! TAKE SOME SLEEP";
    img.setAttribute("src", "./Images/Group 5183.svg");
  } else if (napTimeValues.value == hrs) {
    alarmTitle.innerHTML = " GOOD EVENING !!";
    img.setAttribute("src", "./Images/lunch_image.png");
  } else if (nightTimeValues.value == hrs) {
    alarmTitle.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
    img.setAttribute("src", "./Images/goodnight_image.svg");
  }
}
function setAlarm() {
  cardUpdate();
  updateImageAndText();
}
