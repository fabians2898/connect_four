var game = {
	0:[0,0,0,0,0,0,0],
	1:[0,0,0,0,0,0,0],
	2:[1,1,1,1,0,0,1],
};
//horizontal verification
var count = 0;
var win = false;
for (var i =0; i < 7; i++)
{
	if (game[1][i] == 1){
		count++;
		if(count == 4){
			win = true;
		}
	}
	else{
		count = 0;
	}
}

if(win){
	console.log("you win the game");
}
else{
	console.log("next player")
}