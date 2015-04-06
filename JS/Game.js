
Crafty.scene("Game", function(){

Crafty.background("url('Images/titlescreen.png')");

		var a=1;
		
		if(number==1)
		Level = [ [2,0,1], [2,0,1], [2,0,1] ];
		else if(number==2)
		Level = [ [1,4,1], [0,3,0], [2,0,2] ];
		else if(number==3)
		Level = [ [3,1,3], [4,1,3], [2,2,0] ];
		else if(number==4)
		Level = [ [2,1,1], [2,3,3], [2,1,3] ];
		else if(number==5)
		Level = [ [4,2,0], [4,0,3], [1,3,0] ];
		else if(number==6)
		Level = [ [1,3,1], [1,2,0], [2,2,3] ];
		else if(number==7)
		Level = [ [2,0,3], [2,2,3], [1,1,1] ];
		else if(number==8)
		Level = [ [0,0,1], [0,2,4], [3,3,4] ];
		else if(number==9)
		Level = [ [4,1,3], [4,3,2], [0,0,0] ];
		else if(number==10)
		Level = [ [1,4,1], [3,2,3], [0,2,0] ];
		else if(number==11)
		Level = [ [0,0,1], [2,3,1], [3,2,4] ];
		else if(number==12)
		Level = [ [0,2,1], [2,3,1], [3,3,4] ];
		else if(number==13)
		Level = [ [3,1,1], [2,2,3], [2,0,1] ];
		else if(number==14)
		Level = [ [1,0,0], [4,0,3], [4,2,3] ];
		else if(number==15)
		Level = [ [3,2,0], [3,3,0], [4,4,1] ];
		else if(number==16)
		Level = [ [1,4,1], [0,2,0], [2,3,3] ];
		else if(number==17)
		Level = [ [2,0,1], [2,3,1], [3,2,1] ];
		else if(number==18)
		Level = [ [3,0,1], [0,2,4], [3,2,1] ];
		else if(number==19)
		Level = [ [1,3,2], [1,2,2], [1,3,0] ];
		else if(number==20)
		Level = [ [3,0,1], [2,2,1], [2,3,1] ];

/*var yo = Crafty.e("2D, DOM, Text")

yo.text(Level)
.attr({x:30, y:300});*/
var moves=0;
var game = Crafty.e("2D, DOM, Text");

var back = Crafty.e("2D, DOM, Image, Mouse");
var replay = Crafty.e("2D, DOM, Image, Mouse");

game.bind("KeyDown", function(e){
	if(e.key==87)
	{
	moveUp();
	moves++;
	}
	else if(e.key == 83){
	moveDown();
	moves++;
	}
	else if(e.key == 65){
	moveLeft();
	moves++;
	}
	else if(e.key == 68){
	moveRight();
	moves++;
	}
	game.text("Moves: "+moves);
});

checkGame = function(){
var point=0;
for(x=0;x<3;x++)
	{
	for(y=0;y<3;y++)
		{
		if(Level[x][y]==4)
point++;
		}
	}
if(point==3)
alert("You win!");
}

moveUp = function(){

for(i=1,p=0;i<=2;i++,p++)
	{
	for(j=2;j>=0;j--)
		{
		if(Level[j][i]==1)
			{
			if(Level[j][i-1]==0)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=0;
				Level[j][i-1]=1;
				temp=ballLocation[j][i];
				ballLocation[j][i-1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			else if(Level[j][i-1]==2)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=0;
				Level[j][i-1]=4;
				temp=ballLocation[j][i];
				ballLocation[j][i-1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			}
		else if(Level[j][i]==4)
			{
			if(Level[j][i-1]==0)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=2;
				Level[j][i-1]=1;
				temp=ballLocation[j][i];
				ballLocation[j][i-1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			else if(Level[j][i-1]==2)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=2;
				Level[j][i-1]=4;
				temp=ballLocation[j][i];
				ballLocation[j][i-1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			}
		}
	}
	//var yo = Crafty.e("2D, DOM, Text")
	//alert("Hello\n"+Level+"\n"+ballLocation);
}
		
moveDown = function(){

		//var yo = Crafty.e("2D, DOM, Text")
		//alert("Before\n"+Level+"\n"+ballLocation);
for(i=1,p=2;i>=0;i--,p--)
	{
	for(j=2;j>=0;j--)
		{
		if(Level[j][i]==1)
			{
			if(Level[j][i+1]==0)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=0;
				Level[j][i+1]=1;
				temp=ballLocation[j][i];
				ballLocation[j][i+1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			else if(Level[j][i+1]==2)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=0;
				Level[j][i+1]=4;
				temp=ballLocation[j][i];
				ballLocation[j][i+1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			}
		else if(Level[j][i]==4)
			{
			if(Level[j][i+1]==0)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=2;
				Level[j][i+1]=1;
				temp=ballLocation[j][i];
				ballLocation[j][i+1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			else if(Level[j][i+1]==2)
				{
				ball[ballLocation[j][i]-1].tween({x:(160*j)+2, y:252+(p)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[j][i]=2;
				Level[j][i+1]=4;
				temp=ballLocation[j][i];
				ballLocation[j][i+1]=temp;
				ballLocation[j][i]=0;
				checkGame();
				}
			}
		}
	}
	//var yo = Crafty.e("2D, DOM, Text")
	//alert("Hello\n"+Level+"\n"+ballLocation);
}

moveLeft = function(){

for(i=1,p=0;i<=2;i++,p++)
	{
	for(j=2;j>=0;j--)
		{
		if(Level[i][j]==1)
			{
			if(Level[i-1][j]==0)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=0;
				Level[i-1][j]=1;
				temp=ballLocation[i][j];
				ballLocation[i-1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			else if(Level[i-1][j]==2)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=0;
				Level[i-1][j]=4;
				temp=ballLocation[i][j];
				ballLocation[i-1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			}
		else if(Level[i][j]==4)
			{
			if(Level[i-1][j]==0)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=2;
				Level[i-1][j]=1;
				temp=ballLocation[i][j];
				ballLocation[i-1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			else if(Level[i-1][j]==2)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=2;
				Level[i-1][j]=4;
				temp=ballLocation[i][j];
				ballLocation[i-1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			}
		}
	}
	//var yo = Crafty.e("2D, DOM, Text")
	//alert("Hello\n"+Level+"\n"+ballLocation);
}

moveRight = function(){

for(i=1,p=2;i>=0;i--,p--)
	{
	for(j=2;j>=0;j--)
		{
		if(Level[i][j]==1)
			{
			if(Level[i+1][j]==0)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=0;
				Level[i+1][j]=1;
				temp=ballLocation[i][j];
				ballLocation[i+1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			else if(Level[i+1][j]==2)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=0;
				Level[i+1][j]=4;
				temp=ballLocation[i][j];
				ballLocation[i+1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			}
		else if(Level[i][j]==4)
			{
			if(Level[i+1][j]==0)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=2;
				Level[i+1][j]=1;
				temp=ballLocation[i][j];
				ballLocation[i+1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			else if(Level[i+1][j]==2)
				{
				ball[ballLocation[i][j]-1].tween({x:(160*p)+2, y:252+(j)*160},100).bind("TweenEnd",function(){}).unbind("TweenEnd");
				Level[i][j]=2;
				Level[i+1][j]=4;
				temp=ballLocation[i][j];
				ballLocation[i+1][j]=temp;
				ballLocation[i][j]=0;
				checkGame();
				}
			}
		}
	}
	//var yo = Crafty.e("2D, DOM, Text")
	//alert("Hello\n"+Level+"\n"+ballLocation);
}

ballLocation=[ [0,0,0], [0,0,0], [0,0,0] ];
ball=[0,0,0]
for(i=0;i<3;i++)
	{
	for(j=0;j<3;j++)
		{
		if(Level[i][j]==0)
		unit=Crafty.e("2D, DOM, Image")
		.attr({x:(i)*160, y:252+(j)*160})
		.image("Images/empty.png");
		else if(Level[i][j]==2)
		zone=Crafty.e("2D, DOM, Image")
		.attr({x:(i)*160, y:252+(j)*160})
		.image("Images/zone.png");
		else if(Level[i][j]==3)
		block=Crafty.e("2D, DOM, Image, Collision")
		.attr({x:(i)*160, y:252+(j)*160})
		.image("Images/block.png"); 
		else if(Level[i][j]==1)
		unit=Crafty.e("2D, DOM, Image")
		.attr({x:(i)*160, y:252+(j)*160})
		.image("Images/empty.png");
		else if(Level[i][j]==4)
		zone=Crafty.e("2D, DOM, Image")
		.attr({x:(i)*160, y:252+(j)*160})
		.image("Images/zone.png");
		}
	}

for(i=0;i<3;i++)
	{
	for(j=0;j<3;j++)
		{
			if(Level[i][j]==1)
			{
			ballLocation[i][j]=a;
			a++;
			ball[a-2]=Crafty.e("2D, DOM, Image, Tween, Mouse, Collision")
			.attr({x:(i)*160+2, y:252+(j)*160})
			.image("Images/ball.png");		
			}
			if(Level[i][j]==4)
			{
			ballLocation[i][j]=a;
			a++;
			ball[a-2]=Crafty.e("2D, DOM, Image, Tween, Mouse, Collision")
			.attr({x:(i)*160+2, y:252+(j)*160})
			.image("Images/ball.png");		
			}
		}
	}
	

replay.attr({x:160, y:732}).image("Images/replay.png")
.bind("MouseOver", function(){
this.image("Images/replayHover.png");
})
.bind("MouseOut", function(){
this.image("Images/replay.png");
})
.bind("Click", function(){
Crafty.scene("Game");
});
back.attr({x:320, y:732}).image("Images/back.png")
.bind("MouseOver", function(){
this.image("Images/backHover.png");
})
.bind("MouseOut", function(){
this.image("Images/back.png");
})
.bind("Click", function(){
Crafty.scene("levelSelect");
});


game.attr({x:10,y:750})
.text("Moves: "+moves)
.textColor("White")
.textFont({ weight:"bold", family: 'Courier', size:"20px" });

});