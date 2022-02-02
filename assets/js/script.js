




let cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', turnCard)); // call turnCard function when card clicked

/*controls to hide/show instruction page*/
let hideOption = window.document.getElementById("inst-btn"); // hide instruction
hideOption.addEventListener("click", slideInstruction);

let menu_btn = document.getElementById('instructions'); // show Instructions
menu_btn.addEventListener("click", slideInstruction);


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
