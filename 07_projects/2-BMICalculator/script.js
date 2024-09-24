const form = document.querySelector('form')
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault() //to stop the form submit bcoz we dont have server

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')
   const range = document.querySelector('#range')

   const bmi = (weight / ((height * height)/10000)).toFixed(2) // to show the value in 2 decimal value

   if (height === '' || height < 0 || isNaN(height)) {  // height != NaN this is a old technique new one is used and recommended
    results.innerHTML = `Please give a valid height ${height}`
   }else if (weight === '' || weight < 0 || isNaN(weight)) {  // height != NaN this is a old technique new one is used and recommended
    results.innerHTML = `Please give a valid weight ${weight}`
   }else{
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi <= 18.6){
        range.innerHTML = `You are Under Weight`
       }else if(bmi >= 18.6 && bmi<= 24.9){ 
        range.innerHTML = `You are Normal Range`
       }else {
        range.innerHTML = `You are Over Weight`

        
       }
   }
   

   
})