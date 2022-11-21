//The important variabels from HTML

let playercount = 0 ;
let computercount = 0;

let playerh1 = document.querySelector('#player');
let computerh1 = document.querySelector('#computer')
let playerpoint = document.querySelector('#playerpoint')
let computerpoint = document.querySelector('#computerpoint')



const rock = document.querySelector('#button-rock');
const paper = document.querySelector('#button-paper');
const scissor = document.querySelector(' #button-scissor');


//The insert name function

const buttonname = document.querySelector('#sendinname');
buttonname.addEventListener('click', changePlayernamelement);

let username ='';

function changePlayernamelement(event) {
    event.preventDefault();
    const inputname = document.querySelector('#inputtext');
    playerh1.innerText = inputname.value;

    username = inputname.value;

    inputname.value = '';

}



//The game 


const startgame = document.querySelector('#game-btn');
console.log(startgame);

startgame.addEventListener('click', gamefunction);



function gamefunction(event) {
    let userchoice;

    //User choices
    if (event.target == rock) {
        userchoice = 'rock';
    }
    else if (event.target == paper) {
        userchoice = 'paper';
    }
    else if (event.target == scissor) {
        userchoice = 'scissor';
    }
    playerh1.innerText = `${username} = ${userchoice}`;
    console.log(userchoice);


    //Computers choices   0 = rock 1 = paper  2 = scissor.


    let choosenByComputer = Math.round(Math.random() * 2);
    console.log(choosenByComputer);

    if(choosenByComputer == 0) {
        computerh1.innerText = `Computer = Rock`;
    }
    else if(choosenByComputer == 1) {
        computerh1.innerText = `Computer = Paper`;
    }
    else if(choosenByComputer == 2) {
        computerh1.innerText = `Computer = Scissor`;
    }

 // iF ROCK WAS CHOSEN
    if (  userchoice == 'rock' && choosenByComputer == 0 ) {
        alert('Its a draw,try again!')
    }
   else if ( userchoice == 'paper' && choosenByComputer == 0 ) {
        playercount++
        playerpoint.innerText = playercount;
    }

    else if (   userchoice == 'scissor' && choosenByComputer == 0 ) {
        computercount++
        computerpoint.innerText =computercount;

    }

// iF PAPER WAS CHOSEN
    if ( userchoice == 'paper' && choosenByComputer == 1  ) {
        alert('Its a draw,try again!')
    }
    else if (userchoice == 'scissor' && choosenByComputer == 1 ) {
        playercount++
        playerpoint.innerText = playercount;
    }

   else if ( userchoice == 'rock' && choosenByComputer == 1 ) {
    computercount++
    computerpoint.innerText =computercount;

    }

//IF SCISSOR WAS CHOSEN
    if ( userchoice == 'scissor' && choosenByComputer == 2 ) {
        alert('Its a draw,try again!')
    }
   else if ( userchoice == 'rock' &&  choosenByComputer == 2  ) {
    playercount++
    playerpoint.innerText = playercount;
    }

    else if ( userchoice == 'paper' && choosenByComputer == 2) {
        computercount++
        computerpoint.innerText =computercount;
    }

//THE SCORE HAS BEEN REACHED, AND RESTARTING THE GAME
    if(playercount == 3) {
        playercount = 0 ;
        computercount = 0;
        playerpoint.innerText = 0;
        computerpoint.innerText = 0;
        alert('You won!')
    } 
    else if (computercount == 3) {
        playercount = 0 ;
        computercount = 0;
        playerpoint.innerText = 0;
        computerpoint.innerText = 0;
        alert('Computer won! Try again')
        
    }
}

