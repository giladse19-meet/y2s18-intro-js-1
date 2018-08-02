
var turn = 0;
var play = ' '

while(!(game()==true)){
	if (turn = 0) {
		play = prompt('Player 1 enter your play as a number between 1-9')
		turn = 1
	}
	else {
		play = prompt('Player 2 enter your play as a number between 1-9')
		turn = 0
	}
}