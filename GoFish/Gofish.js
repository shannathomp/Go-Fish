
const clickMe = document.getElementById('cl1')
const container = document.querySelector('.container')
const comdeck = document.querySelector('#comdeck')
const computercard = document.getElementById('comcard-slot')
const playerdeck = document.getElementById('pdeck')
const playercardslot = document.getElementById('pcard-slot')
const startbutton = document.querySelector('#start')
const resetbtn = document.querySelector('#reset')
const player = document.querySelector('#player-sum')
const computer = document.getElementById('dealer-sum')
const cardImg = ('./images/*.png')
var deck;
var hidden;
var dealerSum = 0;
var playerSum = 0;
// const deck = new Deck;



// let resultsContainer = document.getElementById('results');
// let cardsRemaining = document.getElementById('cardsRemaining');
// let player1cards, player2cards, pairsPlayer, pairsComp, player, cardToMatchValue;
// let statusBlock = document.querySelector('.statusBlock')




window.onload = function(){
    getDeck()
    shuffleDeck()
    startGame()
}

function getDeck()
{
    //card arrays
   const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]; 
deck =[];
	
// let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			// let deck = {Value: values[x], Suit: suits[i]};
			deck.push(values[x] + '_of_' + suits[i]);
		}
	}
   
	// console.log(deck);
}

function shuffleDeck(){
    for(let i = 0; i< deck.length; i++){
        let x = Math.floor(Math.random() * deck.length);
    let shuff = deck[i];
    deck[i] = deck[x];
    deck[x] = shuff;
    }
    console.log(deck);     
}

function startGame(){
hidden = deck.pop();
dealerSum += getValue(hidden);  
while (computer <20){
    let cardImg = document.createElement('img')
    let card = deck.pop();
    cardImg.src = "./images/" + 'card' + ".png";
    dealerSum += getValue(card);
    document.getElementById('dealer-sum').append(cardImg);{
       startbutton.addEventListener('click', startGame) 
    }
    

}
startGame
console.log(computer);

for(let i =0; i <=7; i++){
    let cardImg = document.createElement('img')
    let card = deck.pop();
    cardImg.src = `./images/${card}.png`;
    playerSum  += getValue(card);
    document.getElementById('player-sum').append(cardImg);
}
}

// console.log(hidden);
// console.log(computer);


function getValue(card){
    let data = card.split('-')
    let value =data[0];

    // if(isNaN(value)){
    //     if (value == 'A'){
    //         return 11;
    //     }
    //     return 10;
    // }
    // return parseInt(value);
}

function clickMe2(){
console.log('clicked');
}

class Deck{
    constructor(){
      this.deck = [] 
    }
}
class Card{
  constructor(suit, value){
     this.suit = suit
this.value = value    
  }

  createDeck(suits, values){
      for(let suit of suits){
          for(let value of values)
{
    this.deck.push(new Card(suit, value))
}      }
      return this.deck
      }
  }
  let decks =  new Deck();
  decks.createDeck(suits, values);
  console.log(decks);
 
// }
//    console.log(Deck.Card)

   


// function start(){
// console.log('Let\'s begin');
// }

// function reset(){
//     reset()
// }

// let suits = ['H','C','S','D']
// let cardnum = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
// const randomcards = Math.floor(Math.random()) * cardnum.length+52
// const suitcard = Math.floor(Math.random()) * suits.length +4
// let cardsuit = suits.cardnum
// const idx = randomcards[suits]
// console.log(idx);
// // console.log(startbutton);
// // console.log(resetbtn);
// console.log(randomcards)


// // for(let i=2; i<cardnum.length; i++){
// //     console.log(randomcards);
// // }




// // console.log(startbutton);