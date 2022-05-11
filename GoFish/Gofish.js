
// const deck = new Deck()
function start(){
console.log('Let\'s begin');
}

function reset(){
    reset()
}

const container = document.querySelector('.container')
const comdeck = document.querySelector('#comdeck')
const computercard = document.getElementById('comcard-slot')
const playerdeck = document.getElementById('pdeck')
const playercardslot = document.getElementById('pcard-slot')
const startbutton = document.querySelector('#start')
const resetbtn = document.querySelector('#reset')
let suits = ['H','C','S','D']
let cardnum = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
const randomcards = Math.floor(Math.random()) * cardnum.length+52
const suitcard = Math.floor(Math.random()) * suits.length +4
let cardsuit = suits.cardnum
const idx = randomcards[suits]
console.log(idx);
// console.log(startbutton);
// console.log(resetbtn);
console.log(randomcards)


// for(let i=2; i<cardnum.length; i++){
//     console.log(randomcards);
// }


startbutton.addEventListener('click',start)
// console.log(startbutton);