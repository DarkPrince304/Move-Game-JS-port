Crafty.scene("levelSelect", function(){

Crafty.background("url('Images/titlescreen.png')");

level=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
number=0;

for(i=0;i<5;i++){
	
level[i] = Crafty.e("2D, DOM, Tween, Image, Mouse")
.attr({x:70+(i*70), y:420, w:160, h:160})
.image("Images/levelButton.png")
.bind("MouseOver", function()
	{
		this.image("Images/levelButtonHover.png");
	})
.bind("MouseOut", function()
	{
		this.image("Images/levelButton.png");
	});
	
numbers=Crafty.e("2D, DOM, Tween, Text")
.attr({x:85+(i*70),y:435})
.text(i+1)
.textColor("White")
.textFont({ weight:"bold", family: 'Courier', size:"20px" });

}
for(i=0;i<5;i++){
	
level[i+5] = Crafty.e("2D, DOM, Tween, Image, Mouse")
.attr({x:70+(i*70), y:490, w:160, h:160})
.image("Images/levelButton.png")
.bind("MouseOver", function()
	{
		this.image("Images/levelButtonHover.png");
	})
	.bind("MouseOut", function(){
		this.image("Images/levelButton.png");
	});
	
numbers=Crafty.e("2D, DOM, Tween, Text")
.attr({x:85+(i*70),y:505})
.text(i+6)
.textColor("White")
.textFont({ weight:"bold", family: 'Courier', size:"20px" });


}
for(i=0;i<5;i++){
	
level[i+10] = Crafty.e("2D, DOM, Tween, Image, Mouse")
.attr({x:70+(i*70), y:560, w:160, h:160})
.image("Images/levelButton.png")
.bind("MouseOver", function()
	{
		this.image("Images/levelButtonHover.png");
	})
	.bind("MouseOut", function(){
		this.image("Images/levelButton.png");
	});
	
numbers=Crafty.e("2D, DOM, Tween, Text")
.attr({x:85+(i*70),y:575})
.text(i+11)
.textColor("White")
.textFont({ weight:"bold", family: 'Courier', size:"20px" });


}
for(i=0;i<5;i++){
	
level[i+15] = Crafty.e("2D, DOM, Tween, Image, Mouse")
.attr({x:70+(i*70), y:630, w:160, h:160})
.image("Images/levelButton.png")
.bind("MouseOver", function()
	{
		this.image("Images/levelButtonHover.png");
	})
	.bind("MouseOut", function(){
		this.image("Images/levelButton.png");
	});
	
numbers=Crafty.e("2D, DOM, Tween, Text")
.attr({x:85+(i*70),y:645})
.text(i+16)
.textColor("White")
.textFont({ weight:"bold", family: 'Courier', size:"20px" });

}

level[0].bind("Click",function()
{
number=1;
Crafty.scene("Game");
});
level[1].bind("Click",function()
{
number=2;
Crafty.scene("Game");
});
level[2].bind("Click",function()
{
number=3;
Crafty.scene("Game");
});
level[3].bind("Click",function()
{
number=4;
Crafty.scene("Game");
});
level[4].bind("Click",function()
{
number=5;
Crafty.scene("Game");
});
level[5].bind("Click",function()
{
number=6;
Crafty.scene("Game");
});
level[6].bind("Click",function()
{
number=7;
Crafty.scene("Game");
});
level[7].bind("Click",function()
{
number=8;
Crafty.scene("Game");
});
level[8].bind("Click",function()
{
number=9;
Crafty.scene("Game");
});
level[9].bind("Click",function()
{
number=10;
Crafty.scene("Game");
});
level[10].bind("Click",function()
{
number=11;
Crafty.scene("Game");
});
level[11].bind("Click",function()
{
number=12;
Crafty.scene("Game");
});
level[12].bind("Click",function()
{
number=13;
Crafty.scene("Game");
});
level[13].bind("Click",function()
{
number=14;
Crafty.scene("Game");
});
level[14].bind("Click",function()
{
number=15;
Crafty.scene("Game");
});
level[15].bind("Click",function()
{
number=16;
Crafty.scene("Game");
});
level[16].bind("Click",function()
{
number=17;
Crafty.scene("Game");
});
level[17].bind("Click",function()
{
number=18;
Crafty.scene("Game");
});
level[18].bind("Click",function()
{
number=19;
Crafty.scene("Game");
});
level[19].bind("Click",function()
{
number=20;
Crafty.scene("Game");
});

var back = Crafty.e("2D, DOM, Image, Mouse");
back.attr({x:320, y:732}).image("Images/back.png")
.bind("MouseOver", function(){
this.image("Images/backHover.png");
})
.bind("MouseOut", function(){
this.image("Images/back.png");
})
.bind("Click", function(){
Crafty.scene("Title");
});

});