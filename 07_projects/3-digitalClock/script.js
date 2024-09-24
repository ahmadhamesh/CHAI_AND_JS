const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


//this will control js events
//this method is continuesly running and update the value
setInterval( function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)