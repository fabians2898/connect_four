var position = [1,1];
var x = position[0]
var y = position[1]
var game = {
	0:[0,0,0,0,0,0,0],
	1:[0,1,1,1,1,0,0],
	2:[0,0,0,1,0,0,0],
	3:[0,0,1,1,0,0,0],
	4:[0,1,0,1,0,0,0],
	5:[0,0,0,0,0,0,0],
};
//horizontal verification
var count = 0;
var win = false;
for (var i =0; i < 7; i++)
{
	if (game[x][i] == 1){
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
	console.log("maybe the next time")
}

// vertical verification
var count = 0;
var win = false;
for (var i = 0; i<6;i++)
{
	if (game[i][y] == 1){
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
	console.log("maybe the next time")
}	

//diagonal verification
count = 0;
win = false;

var tempx = x;
var tempy = y;
var temp_list = [];  

while(tempx < 6 && tempx >=0 && tempy <= 6 && tempy >= 0)
{	
	temp_list.push(game[tempx][tempy]);
	tempx--;
	tempy++;
}

tempx = x+1;
tempy = y-1;

while(tempx <= 5 && tempx >=0 && tempy <= 6 && tempy >= 0)
{	
	temp_list.unshift(game[tempx][tempy]);
	tempx++;
	tempy--;
}

console.log(temp_list)

for(var i =0; i<temp_list.length; i++)
{
	if (temp_list[i] == 1){
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
	console.log("maybe the next time")
}