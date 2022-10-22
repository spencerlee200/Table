/* NOTE: 

This is assuming a 52 card standard American deck. Other variants will have to
be programmed in as they become needed
*/

import { shuffle } from '../utils/functions.js';

class Deck {
  init() {
    this.deckRef = firebase.database().ref(`deck`);
    this.deck = [];
    
    this.deckRef.on("value", (snapshot) => {
      this.deck = snapshot.val() || [];
    });
    
    console.log(this.deck)
    if(!this.deck.length) {
      // 52 card deck
      const suits = ['♤','♧','♢','♡'];
      const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

      suits.forEach((suit, i) => {
        ranks.forEach((rank, e) => {
          this.deck.push(rank + suit);
        });
      });
      
      // Use to create sprite index
      this.deckModel = this.deck;

      shuffle(this.deck)
      this.deckRef.set(this.deck);
    }

    let card = this.deal(2);
  }
  deal(count) {
    let hand = [];
    for(var c = 0; c < count; c++){
      hand.push(this.deck.shift())
      this.deckRef.set(this.deck);
    }
    return hand;
  }
}

export { Deck }
