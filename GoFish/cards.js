const suitcards = ['♠','♥','♣','♦'];
const carddeck = [['2','3','4','5','6','7','8','9','T','J','Q','K','A']]

class Deck{
    constructor(cards){
      this.cards = carddeck 
    }
}
class Card{
  constructor(suit, carddeck){
     this.suit = suitcards
this.value = carddeck    
  }
 
}
   console.log(Deck.Card)

function freshDeck(){
    return suitcards.flatMap(suit => {
        return cardnum.map(value => {
           return new card(suit,value)  
        })
    })
}