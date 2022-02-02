




let cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', turnCard)); // call turnCard function when card clicked


/**
 * a function to turn cards in pairs
 * @returns 
 */
 function turnCard(){

    this.classList.add("turn"); // turn card

 }