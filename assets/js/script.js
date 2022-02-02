/*==variables*/

let diffToggle = "easy";
let scrambledArray;




let cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', turnCard)); // call turnCard function when card clicked

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




/**
 * function to start and run game
 */
    function startGame() {
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
        /*call the function to populate panels face-side passing in the icons and the random placing*/
        populateBehindCards(cardIcons, scrambledArray);
    }   
    /*====end of startgame function===*/









/**
 * a function to turn cards in pairs
 * @returns 
 */
 function turnCard(){

    this.classList.add("turn"); // turn card

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
