var ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
var suits = ["&spades;","&hearts;","&clubs;","&diams;"];
var red = false;
var deck = Deck(suits,ranks);

deck.forEach(function (e) {document.body.innerHTML += (e + '&nbsp;');});

/*
function Card(rank,suit){
	this.rank = rank; 
	this.suit = suit;
}
*/

function Deck(suits, ranks){ //makes a deck of cards from predefined ranks and suits
	var deck = [];
	
	suits.forEach(function (suit) {
		var suit = suit;
		ranks.forEach(function (rank) {
			if(red){
				deck.push('<font color="red">' + rank + suit + '</font>');  // need to make this css
			} else {
				deck.push(rank + suit);
			}
		});
		red = !red;
	})
	
	/*
	for (var i = 0; i < suits.length; i++){
		for (var j = 0; j < ranks.length; j++){
			rank = ranks[j];
			suit = suits[i];
			deck.push(rank + "" + suit);
			}
		}
	*/
	deck = shuffle(deck);
	return deck;
};

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};