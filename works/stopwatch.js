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

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    let outputMinues = String(minutes)
    let outputSeconds = String(seconds)

    if(minutes < 10){
        outputMinues = "0" + outputMinues
    }
    if(seconds < 10){
        outputSeconds = "0" + outputSeconds
    }



    timeElement.innerText = outputMinues + "：" + outputSeconds
}
