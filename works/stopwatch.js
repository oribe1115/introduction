let time = 0
let keepOn = 0
const startCountUp = () => {
    const startButtonElement = document.querySelector("#startButton")
    if(keepOn == 0){
        startButtonElement.innerText = "STOP"
        keepOn = 1
        timeID = setInterval("countUp()", 1000)
    } else{
        startButtonElement.innerText = "START"
        keepOn = 0
        clearInterval(timeID)
    }
    
}

const countUp = () => {
    
    time++
    showTime()

}

const reset = () => {
    time = 0
    showTime()
}

const showTime = () => {
    const timeElement = document.querySelector('#time')
    timeElement.innerText = '時間：' + time
}
