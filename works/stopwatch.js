let time = 0
let keepOn = true
const countUp = () => {
    keepOn = true
    while(keepOn){
        time++
        setInterval(1000)
    }
}

const stop = () => {
    keepOn = false
}