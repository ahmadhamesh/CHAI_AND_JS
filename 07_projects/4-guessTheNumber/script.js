let randomNumber = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const  lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [] //submit values bcoz dont guess the same value again
let numGuess = 1 // and number of guesses

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
}

//validate the input 1 to 100 b/w and value in number or not
function validateGuess(guess){ 
    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number more than 1');
    } else if (guess > 100) {
        alert('please enter a number less than 100')  ;
    } else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`);
            endGame();  
        }else{
            displayGuess(guess)
            checkGuess(guess) 
        }
    }
}

//that shows the value is equal or not the geuss number, 
function checkGuess(guess){ 
    
    if (guess === randomNumber) {
        displayMessage('You guessed it right');
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Number is too low')
    }else if (guess > randomNumber){
        displayMessage('number is too high')
    }
}



//reset values, previous guess arrays value upadate guess ramaining update
function displayGuess(guess){ 
    userInput.value = ''; //reset the value
    guessSlot.innerHTML += `${guess}  `; //pusing all values in array 
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

// higher or lower or you win you loose//dom and dispay msg user input empty, add guess value in html, guess remaining value decrese 
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button>Start new Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
    

}
function newGame(){
    const newGameButton =document.querySelector('newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11- numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}



