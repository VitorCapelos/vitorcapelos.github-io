var sec = 0
var min = 25
var pomo = 1
var cont = 0

function Start() {
    cont += 1
    if (cont == 1) {
        init.innerText = "Parar"
        Pomodoro()
    }
}

function Pomodoro(){
    if (cont > 1) {
        init.innerText = "Iniciar"
        return cont = 0
    }
    if ((sec - 1) >= 0) {
        sec -= 1
        minutes.innerText = min
        seconds.innerText = sec
        if (sec <=9 && min >= 10) {
            seconds.innerText = '0' + sec
        }
        else if (min <=9 && sec <= 9) {
            minutes.innerText = '0' + min
            seconds.innerText = '0' + sec
        }
        else if (min <= 9 && sec >=10) {
            minutes.innerText = '0' + min
        }
        setTimeout('Pomodoro()', 1000)
    } else if (min >= 1 && sec === 0) {
        min -= 1
        sec = 59
        minutes.innerText = min
        seconds.innerText = sec
        if (min <=9 && sec <= 9) {
            minutes.innerText = '0' + min
            seconds.innerText = '0' + sec
        } else if (min <= 9 && sec >=10) {
            minutes.innerText = '0' + min
        }
        setTimeout('Pomodoro()', 1000)
    } 
    else {
        alert('Pomodoro finalizado')
    }
}

function Reset() {
    if (cont == 1 ) {
        Start()
    }
    minutes.innerText = "25"
    min = 25
    seconds.innerText = "00"
    sec = 00
}

document.getElementById('init').addEventListener('click', Start)
document.getElementById('reset').addEventListener('click', Reset)

