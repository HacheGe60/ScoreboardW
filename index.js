
let minutes = 0;
let seconds = 0;
let intervalId;
let period = 'X';
let homeFouls = 0;
let guestFouls = 0;
let scoreH = 0;
let scoreG = 0;

const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const startBtnEl = document.getElementById("startBtn");
const pauseBtnEl = document.getElementById("pauseBtn");
const resetBtnEl = document.getElementById("resetBtn");
const periodEl = document.getElementById("period");
const resetPeriodBtnEl = document.getElementById("resetPeriodBtn");
const bonHomeIconEl = document.getElementById("bonHomeIcon");
const bonGuestIconEl = document.getElementById("bonGuestIcon");
const foulHomeEl = document.getElementById("foulHome");
const foulGuestEl = document.getElementById("foulGuest");
const scoreHomeEl = document.getElementById("scoreHome");
const scoreGuestEl = document.getElementById("scoreGuest");
const btn1HomeEl = document.querySelector("#btn1Home");
const btn2HomeEl = document.querySelector("#btn2Home");
const btn3HomeEl = document.querySelector("#btn3Home");
const btn1GuestEl = document.querySelector("#btn1Guest");
const btn2GuestEl = document.querySelector("#btn2Guest");
const btn3GuestEl = document.querySelector("#btn3Guest");
const resetAllBtnEl = document.getElementById("resetAllBtn");
const possHomeIconEl = document.getElementById("possHomeIcon");
const possGuestIconEl = document.getElementById("possGuestIcon");

periodEl.textContent = period;
function startTimer() {
    startBtnEl.disabled = true;
    pauseBtnEl.disabled = false;
    resetBtnEl.disabled = true;
    resetAllBtnEl.disabled = true;
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        minuteEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondEl.textContent = seconds < 10 ? '0' + seconds : seconds;
        if (minutes >= 12) {
            stopTimer();
        }
    }, 1000);
};

function pauseTimer() {
    pauseBtnEl.disabled = true;
    startBtnEl.disabled = false;
    resetBtnEl.disabled = false;
    clearInterval(intervalId);
    startBtnEl.textContent = 'CONT.';
};

function resetTimer() {
    resetAllBtnEl.disabled = false;
    pauseBtnEl.disabled = true;
    resetBtnEl.disabled = true;
    startBtnEl.disabled = false;
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    minuteEl.textContent = '00';
    secondEl.textContent = '00';
    startBtnEl.disabled = false;
    startBtnEl.textContent = 'START';
};

function stopTimer() {
    clearInterval(timer);
    minutes = 0;
    minuteEl.textContent = '00';
    seconds = 0;
    secondEl.textContent = '00';
};

function nextPeriod() {
    if (period === 'X') {
        period = '1';
    } else {
        period++;
        if (period > 4) {
            period = 'X';
        }
    }
    periodEl.textContent = period;
}

function resetPeriod() {
    if (period !== 4) {
        periodEl.textContent = period;
    } else {
        period = 'X';
        periodEl.textContent = period;
    }
}

function homeFoul() {
    homeFouls++;
    foulHomeEl.textContent = homeFouls;
    if (homeFouls >= 7) {
        bonGuestIconEl.classList.remove("darkRed");
        bonGuestIconEl.classList.add("red");
        bonGuestIconEl.style.border = 'none';
    } else {
        bonGuestIconEl.classList.remove("red");
        bonGuestIconEl.classList.add("darkRed");
        bonGuestIconEl.style.border = 'none';
    }
}

function resetHomeFoul() {
    homeFouls = 0;
    foulHomeEl.textContent = homeFouls;
    bonGuestIconEl.classList.add("darkRed");
    bonGuestIconEl.style.border = 'none';
}

function guestFoul() {
    guestFouls++;
    foulGuestEl.textContent = guestFouls;
    if (guestFouls >= 7) {
        bonHomeIconEl.classList.remove("darkRed");
        bonHomeIconEl.classList.add("red");
        bonHomeIconEl.style.border = 'none';
    } else {
        bonHomeIconEl.classList.remove("red");
        bonHomeIconEl.classList.add("darkRed");
        bonHomeIconEl.style.border = 'none';
    }
}

function resetGuestFoul() {
    guestFouls = 0;
    foulGuestEl.textContent = guestFouls;
    bonHomeIconEl.classList.add("darkRed");
    bonHomeIconEl.style.border = 'none';
}

function homeScore1() {
    scoreH++;
    scoreHomeEl.textContent = scoreH;
}

function homeScore2() {
    scoreH += 2;
    scoreHomeEl.textContent = scoreH;
}

function homeScore3() {
    scoreH += 3;
    scoreHomeEl.textContent = scoreH;
}

function guestScore1() {
    scoreG++;
    scoreGuestEl.textContent = scoreG;
}

function guestScore2() {
    scoreG += 2;
    scoreGuestEl.textContent = scoreG;
}

function guestScore3() {
    scoreG += 3;
    scoreGuestEl.textContent = scoreG;
}

function resetAll() {
    scoreH = 0;
    scoreG = 0;
    scoreHomeEl.textContent = scoreH;
    scoreGuestEl.textContent = scoreG;
    homeFouls = 0;
    guestFouls = 0;
    foulGuestEl.textContent = guestFouls;
    foulHomeEl.textContent = homeFouls;
    bonHomeIconEl.classList.add("darkRed");
    bonGuestIconEl.classList.add("darkRed");
    bonHomeIconEl.style.border = 'none';
    bonGuestIconEl.style.border = 'none';
    period = 'X';
    periodEl.textContent = period;
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    minuteEl.textContent = '00';
    secondEl.textContent = '00';
    startBtnEl.textContent = 'START';
}

function homePoss() {
    possHomeIconEl.classList.remove("darkRed");
    possHomeIconEl.classList.add("red");
    possHomeIconEl.style.border = 'none';
    possGuestIconEl.classList.remove("red");
    possGuestIconEl.classList.add("darkRed");
    possGuestIconEl.style.border = 'none';
}

function guestPoss() {
    possGuestIconEl.classList.remove("darkRed");
    possGuestIconEl.classList.add("red");
    possGuestIconEl.style.border = 'none';
    possHomeIconEl.classList.remove("red");
    possHomeIconEl.classList.add("darkRed");
    possHomeIconEl.style.border = 'none';
}