// using querySelector all to select all the buttons
const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")

buttons.forEach( function (btn){
    console.log(btn)
    btn.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            // body.style.backgroundColor = 'grey'
            body.style.backgroundColor = e.target.id //its select only id thats also a color name its aready same color used 
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        } 
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        } 
        if(e.target.id === 'purple') {
            body.style.backgroundColor = 'purple'
        }
    })
})


