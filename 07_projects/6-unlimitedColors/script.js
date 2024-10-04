//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        if (intervalId) {
            color += hex[Math.floor(Math.random() * 16)]
        } 
    }
    return color
};

// console.log(randomColor())
let intervalId;
const startChangingColor = function(){
    intervalId = setInterval(changeBgColor, 1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null; 
}

document.querySelector('#start').addEventListener('click',startChangingColor )

document.querySelector('#stop').addEventListener('click',stopChangingColor )
