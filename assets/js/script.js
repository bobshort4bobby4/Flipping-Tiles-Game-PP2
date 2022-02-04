/*==variables*/

let diffToggle = "easy";
let scrambledArray;
let firstItemClicked = true;
let card1;
let card2;
let numberOfMatches = 0;



// music variables
let musicToggle = false;
let gameMusic = new Audio("./assets/media/sounds/gametune.mp3");
gameMusic.loop = true;


// timer variables
let clock;
let currentSeconds  = 0;
let currentMinutes = 0;
let bestSeconds;
let bestMinutes;

// sound effects variables
let babyLaugh = new Audio("./assets/media/sounds/baby-laugh.mp3");
let siren = new Audio("./assets/media/sounds/polis-siren.wav");
let victorySound = new Audio("./assets/media/sounds/victory.wav");
let matchsound = new Audio("./assets/media/sounds/shimmer.flac");
let unmatchedSound = new Audio("./assets/media/sounds/lose-sound.wav");
let soundfxToggle = false;

let cards = document.querySelectorAll('.card');
cards.forEach(card => card.style.pointerEvents="none");  // disables turning of cards before start
cards.forEach(card => card.addEventListener('click', turnCard)); // call turnCard function when card clicked

/*eventlistener for soundfx option*/
let soundfxOption = window.document.getElementById("soundfx-option");
soundfxOption.addEventListener("click", toggleSoundfx);

/*eventlistener for music option*/
let musicOption = window.document.getElementById("music-option");
musicOption.addEventListener("click", toggleMusic);

/*event listener for start button*/
let startButton = document.getElementById("start");
startButton.classList.add("startthrop"); //begin the start button animation  
startButton.addEventListener("click", startGame);

/*eventlistener for difficulty option*/
let diffOption = window.document.getElementById("easy-hard");
diffOption.addEventListener("click", toggleDifficulty);

/*controls to hide/show instruction page*/
let hideOption = window.document.getElementById("inst-btn"); // hide instruction
hideOption.addEventListener("click", slideInstruction);
let menu_btn = document.getElementById('instructions'); // show Instructions
menu_btn.addEventListener("click", slideInstruction);

/*eventlistenr for modal close ---*/
let closex = window.document.querySelector(".close");
let mod = document.querySelector(".modal-wrapper");
closex.addEventListener("click", hideModal); // eventlistener for modal close on x
mod.addEventListener("click",hideModal); //event listener for modal close on entire screen


/**
 * function to start and run game
 */
function startGame() {
    if(musicToggle) { //plays music if on
        gameMusic.load();
        gameMusic.play();
        gameMusic.volume = 0.2;
    }

    window.clearInterval(clock); //reset timer 
    startButton.style.animationPlayState = "paused"; // stops the start button animation while playing 

    if(diffToggle === "easy") { //set up for easy option
        cards = document.querySelectorAll('.card');
        let numberOfCardDivs = cards.length;
        if(numberOfCardDivs === 18) { //if previous game was hard remove extra cards
            for(let i = 0; i < 6; i++){
                let parent = document.getElementById("box-container");
                let child = parent.lastElementChild;
                parent.removeChild(child);
            }
        cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove("resize-cards")); // make cards bigger because there are less of them
        }

        let panelarray = [0,1,2,3,4,5,6,7,8,9,10,11];
        scrambledArray = scramble(panelarray);  // get random positions for cards
        cardIcons = [
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>'
        ];
    }

    if(diffToggle === "hard"){ //set up for hard option
        panelarray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        scrambledArray = scramble(panelarray); // get rando positions for cards
        cardIcons = [
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="anchor" class="fas fa-anchor icon"></i>',
            '<i data-type="anchor" class="fas fa-anchor icon "></i>',
            '<i data-type="arch" class="fas fa-archway icon "></i>',
            '<i data-type="arch" class="fas fa-archway icon"></i>',
            '<i data-type="baby" class="fas fa-baby icon"></i>',
            '<i data-type="baby" class="fas fa-baby icon"></i>'
        ];
        cards = document.querySelectorAll('.card');
        let numberOfCardDivs = cards.length;
        if(numberOfCardDivs === 12) { //add extra cards if needed
            let targetBox= document.getElementById("box-container");
            let div1 = document.querySelector(".card"); 
            for(let i = 0; i < 6; i++){
                targetBox.appendChild(div1.cloneNode(true) );
            }
        }
            /*===get array of cards-------------*/
        cards = document.querySelectorAll('.card'); 
        cards.forEach(card => card.classList.add("resize-cards")); // change size of cards to reflect greater number 
        /* put a listener on new cards this could be done with event delegation==================================================remove before sub*/
        cards.forEach(card => card.addEventListener('click', turnCard));
    }
      //--make cards clickable
      cards.forEach(card=>card.style.pointerEvents = "auto");
    currentSeconds = 0;
    currentMinutes = 0;
    clock = window.setInterval(timer,1000); // start clock

    /*call the function to populate panels face-side passing in the icons and the random placing*/
    populateBehindCards(cardIcons, scrambledArray);
}   
/*====end of startgame function===*/


/**
 * a function to turn cards in pairs
 * @returns 
 */
 function turnCard(){
    if(firstItemClicked) {

        if(soundfxToggle) { // play sound effect on certain icons
            let ico1 = this.getElementsByClassName("icon");
            console.log("in first turn ico1 is" , ico1);
            if(ico1[0].getAttribute("data-type") === "baby") {
                babyLaugh.play();
            } else if(ico1[0].getAttribute("data-type") === "ambulance") {
                siren.volume = 0.2;//reduce volume on siren sound
                siren.play();
            } //end of sound code block
        }

        this.classList.add("turn"); // turn card (1st card)
        card1 = this;
        firstItemClicked = false;    
        return;
    }

    if(soundfxToggle) {  //code for specific icon sounds
        let ico1 = this.getElementsByClassName("icon");
        console.log("in second turn ico1 is" , ico1);
        if(ico1[0].getAttribute("data-type") === "baby") {
        babyLaugh.play();
        } else if(ico1[0].getAttribute("data-type") === "ambulance") {
            siren.volume = 0.2;//reduce volume on siren sound
            siren.play();
        } //end of sound code block
    }
    firstItemClicked = true;  // resets this  value so next time this function is called preceeding if block is run
    this.classList.add("turn"); // turn card (second card)
    card2 = this;
    compare(card1,card2);//call compare function
}
 

 /***
 * a function to handle the instruction page
 */
  function slideInstruction(){
    let page = window.document.getElementById("instruction-page");
     page.classList.toggle("show-instructions");
    
}

/**
     * A function that puts a random icon behind each panel
     * takes in list of icons and a ramdonly sorted list and places an icon behind the cards 
     * using the random list to determine  position
     * @param {*} cardIcons 
     * @param {*} scrambledArray 
     */
 function populateBehindCards(cardIcons, scrambledArray) {
    let behinds = window.document.getElementsByClassName("face-side"); 
    
    for (let i =0 ; i < scrambledArray.length; i++){
        behinds[i].innerHTML = cardIcons[scrambledArray[i]];
    }
 }

 /**
 * function used to scramble an array. Code taken from  Fisher–Yates shuffle Algorithm page on Wikipedia
 * takes in an array and returns a scrambled version of the original array
 * @param {*} array 
 * @returns 
 */
  function scramble(array){
    let i = array.length;

    while (i--) {

        let j = Math.floor(Math.random() * (i+1));

        // swap  elements 
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
return array;
}

/**
 * A function to change difficulty level
 */
 function toggleDifficulty() {
    if(diffToggle === "easy"){
        diffToggle  = "hard";
        diffOption.innerText = "Hard";
    }else{
        diffToggle = "easy";
        diffOption.innerText = "Easy";
    }
}

/**
 * a function to compare the two cards takes in two cards and calls victory functon if all matched
 */
 function compare(card1, card2){
    let ico1 = card1.getElementsByClassName("icon");
    let ico2 = card2.getElementsByClassName("icon");
    if(ico1[0].getAttribute("data-type") === ico2[0].getAttribute("data-type")) { // compares the two flipped cards
        if(soundfxToggle){matchsound.play();}
        card1.style.pointerEvents = "none"; // stops this card being turned again in this game cycle
        card2.style.pointerEvents = "none"; // stops this card being turned again in this game cycle
        card1 = null;
        card2 = null;
        firstItemClicked = true;
        numberOfMatches++ ; 
        if(numberOfMatches === 6 && diffToggle === "easy") { // checks if victory conditions are met
            gameMusic.pause();
            victory(); 
           
        }
        if(numberOfMatches === 9 && diffToggle === "hard"){  // checks if victory conditions are met
            gameMusic.pause();
            victory(); 
            
        }
      
        return;
        } else {
        // do the un-matched stuff
            
            if(soundfxToggle){unmatchedSound.play();}   
            setTimeout(() => { //display unmatched cards for 1 second before re-turning
            card1.classList.remove("turn");
            card2.classList.remove("turn");
            card1 = null; // re-set cards
            card2 = null;
            
        return;
          }, 1000);
        firstItemClicked = true;
        return;
    }
}


/**
 * A function to declare victory
 */
 function victory() {
    stopClock();
    showModal();
    setTimeout(()=> {
    cards.forEach(card => card.style.pointerEvents="none");  // disables turning of cards
    
    },1000);
    numberOfMatches = 0;
    
}

/**
 * A function toupdate and display victory screen
 */
 function showModal() {
    if(soundfxToggle){victorySound.play();}
    document.getElementById("modal-difficilty").innerText = diffToggle.toUpperCase(); // updates the modal with difficulty level
    cards.forEach(card => card.classList.remove("turn"));  // ensures all cards are face down before a new game is started
    document.getElementById("modal-time-minutes").innerText = currentMinutes; // updates the modal with current and best times
    document.getElementById("modal-time-seconds").innerText = currentSeconds;
    mod = document.querySelector(".modal-wrapper");
    mod.style.display = "block"; // shows modal
}

/**
 * a function to hide victory screen
 */
 function hideModal() {
    mod.style.display = "none";
    startButton.style.animationPlayState = "running"; // starts the start button animation while not playing 
}

/**
 * A function to toggle music
 */
 function toggleMusic() {
    if(musicToggle === true){
        musicToggle  = false;
        musicOption.innerHTML = '<i class="fas fa-volume-mute"></i>'; // sets the icon on the options page
       gameMusic.pause();
    }else{
        musicToggle = true;
        gameMusic.load();
        gameMusic.play();
        gameMusic.volume = 0.2;
        musicOption.innerHTML = '<i class="fas fa-volume-up"></i>'; // sets the icon on the options page
    }
}

/**
 * A function to toggle the soundfx variable
 */
 function toggleSoundfx() {
    if(soundfxToggle === true) {
        soundfxToggle = false;
        soundfxOption.innerHTML = '<i class="fas fa-volume-mute"></i>'; // sets the icon on the options page
    } else {
        soundfxToggle = true;
        soundfxOption.innerHTML = '<i class="fas fa-volume-up"></i>'; // sets the icon on the options page
    }
}


/**
 *  A function to update the timer.
 */
 function timer() {
    currentSeconds++;

    if( currentSeconds/ 60 === 1){//if seconds over 60 update minute
        currentMinutes++;
        currentSeconds = 0;
    }

    if(currentSeconds < 10){//if seconds less than ten add a preceeding 0
        currentSeconds = "0" + currentSeconds.toString();
    }
    document.getElementById("currTimeSec").innerText = currentSeconds;
    document.getElementById("currTimeMin").innerText = currentMinutes;
}

/**
 * A function to stop clock
 */
 function stopClock() {
    window.clearInterval(clock);
    updateBestScore(currentSeconds, currentMinutes);
 }

 /**
 * a function to update the best score
 */
function updateBestScore(currentSeconds,currentMinutes) {
    bestSeconds = document.getElementById("bestTimeSec");
    bestMinutes = document.getElementById("bestTimeMin");
    let bestSec = (Number(bestSeconds.textContent)) + (Number(bestMinutes.textContent) * 60);//convert times to seonds for comparasion
    let scoreSec = currentSeconds + (currentMinutes * 60);
    if(bestSec === 0 || scoreSec < bestSec) {//change  Best Score if current one better or if first play-through
        bestMinutes.textContent = currentMinutes;
        bestSeconds.textContent = currentSeconds;
    }     
}
