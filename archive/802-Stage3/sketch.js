/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 2906969
CaseNum: 802-2-19990545-2906969

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in win_hand from the deck and store it in the hand array.

*Write a function called buildWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in win_hand add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 0 and end at 67.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playing_cards = [
  { card_suit: "Spades", no: "A" },
  { card_suit: "Spades", no: "2" },
  { card_suit: "Spades", no: "3" },
  { card_suit: "Spades", no: "4" },
  { card_suit: "Spades", no: "5" },
  { card_suit: "Spades", no: "6" },
  { card_suit: "Spades", no: "7" },
  { card_suit: "Spades", no: "8" },
  { card_suit: "Spades", no: "9" },
  { card_suit: "Spades", no: "10" },
  { card_suit: "Spades", no: "J" },
  { card_suit: "Spades", no: "Q" },
  { card_suit: "Spades", no: "K" },
  { card_suit: "Clubs", no: "A" },
  { card_suit: "Clubs", no: "2" },
  { card_suit: "Clubs", no: "3" },
  { card_suit: "Clubs", no: "4" },
  { card_suit: "Clubs", no: "5" },
  { card_suit: "Clubs", no: "6" },
  { card_suit: "Clubs", no: "7" },
  { card_suit: "Clubs", no: "8" },
  { card_suit: "Clubs", no: "9" },
  { card_suit: "Clubs", no: "10" },
  { card_suit: "Clubs", no: "J" },
  { card_suit: "Clubs", no: "Q" },
  { card_suit: "Clubs", no: "K" },
  { card_suit: "Hearts", no: "A" },
  { card_suit: "Hearts", no: "2" },
  { card_suit: "Hearts", no: "3" },
  { card_suit: "Hearts", no: "4" },
  { card_suit: "Hearts", no: "5" },
  { card_suit: "Hearts", no: "6" },
  { card_suit: "Hearts", no: "7" },
  { card_suit: "Hearts", no: "8" },
  { card_suit: "Hearts", no: "9" },
  { card_suit: "Hearts", no: "10" },
  { card_suit: "Hearts", no: "J" },
  { card_suit: "Hearts", no: "Q" },
  { card_suit: "Hearts", no: "K" },
  { card_suit: "Diamonds", no: "A" },
  { card_suit: "Diamonds", no: "2" },
  { card_suit: "Diamonds", no: "3" },
  { card_suit: "Diamonds", no: "4" },
  { card_suit: "Diamonds", no: "5" },
  { card_suit: "Diamonds", no: "6" },
  { card_suit: "Diamonds", no: "7" },
  { card_suit: "Diamonds", no: "8" },
  { card_suit: "Diamonds", no: "9" },
  { card_suit: "Diamonds", no: "10" },
  { card_suit: "Diamonds", no: "J" },
  { card_suit: "Diamonds", no: "Q" },
  { card_suit: "Diamonds", no: "K" },
];
var deck_img;
var table_img;
var drawCounter = 0;

var win_hand = [
  { type: "Hearts", v: "Q" },
  { type: "Clubs", v: "10" },
  { type: "Spades", v: "10" },
  { type: "Spades", v: "K" },
  { type: "Diamonds", v: "Q" },
];
var hand = [];

function preload() {
  deck_img = loadImage("deck.png");
  table_img = loadImage("table.png");
}
function setup() {
  createCanvas(table_img.width, table_img.height);
  frameRate(30);

  //call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  const cards = shuffleSeed();
  shuffleDeck(cards);
  //call your buildWinningHand function here
  buildWinningHand();
}

//write your buildWinningHand function here
function buildWinningHand() {
  // *We need to be quick so our ruse isn’t spotted.
  // Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
  // *When you find a card in the deck that matches one in win_hand add it to the handArray. Then break and search for the next card.
  for (let i = 0; i < playing_cards.length; i++) {
    for (let j = 0; j < win_hand.length; j++) {
      if (
        playing_cards[i].card_suit === win_hand[j].type &&
        playing_cards[i].no === win_hand[j].v
      ) {
        hand.push(playing_cards[i]);
        break;
      }
    }
  }
}

//write your shuffleSeed() function here.
function shuffleSeed() {
  // it needs to return an array of 52 random integers but set the random value to start at 0 and end at 67.
  // *Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
  // *Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().
  const array = [];
  for (let i = 0; i < 52; i++) {
    array.push(round(random(0, 67)));
  }

  return array;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
  //shuffle the deck by rotating the cards location with the values in
  //shuffleSeed. Repeat this a random number of times between 20 and 50
  var shuffleIterations = parseInt(random(20, 50));
  for (var i = 0; i < shuffleIterations; i++) {
    for (var j = 0; j < playing_cards.length; j++) {
      var tempCard = playing_cards.splice(j, 1);
      var newLoc = (j + shuffleSeed[j]) % 52;
      playing_cards.splice(newLoc, 0, tempCard[0]);
    }
  }
}

function draw() {
  image(table_img, 0, 0);

  if (frameCount % 7 == 0) {
    drawCounter++;
    if (drawCounter == 5) {
      noLoop();
    }
  }
  for (var i = 0; i < drawCounter; i++) {
    if (i < hand.length) {
      drawCard(hand[i], 880 + i * 18, 750);
    }
  }
}

function drawCard(card, x, y) {
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (card.no == values[j] && card.card_suit == suits[i]) {
        //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
        break;
      }
    }
  }
}
