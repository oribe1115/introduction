let time = 0
let keepOn = 0
const startCountUp = () => {
    if(keepOn == 0){
        keepOn = 1
        timeID = setInterval("countUp()", 1000)
    } else{
        keepOn = 0
        clearInterval(timeID)
    }
    
}
const countUp = () => {
    
    const timeElement = document.querySelector('#time')
    time++
    timeElement.innerText = '時間：' + time

}

const stop = () => {
    keepOn = false
}