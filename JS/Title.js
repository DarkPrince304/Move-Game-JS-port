window.onload = ( function(){
	
	Crafty.scene("Title", function(){
	Crafty.init(480,800);
	Crafty.background("url('Images/titlescreen.png')");
	
	var play = Crafty.e("2D, DOM, Tween, Image, Mouse")
	.image("Images/but1.png")
	.attr({x:0, y:250})
	.bind("MouseOver", function()
	{
		this.image("Images/hover1.png");
	})
	.bind("MouseOut", function(){
		this.image("Images/but1.png");
	})
	.bind("Click", function(){
		Crafty.scene("levelSelect");
	});
	
var ported = Crafty.e("2D, DOM, Image")
.attr({x:130, y:755}).image("Images/ported.png");
	
});
var assetsObj = { "images": ["Images/replayHover.png", "Images/replay.png", "Images/backHover.png", "Images/back.png", "Images/ported.png", "Images/ball.png", "Images/but1.png", "Images/block.png", "Images/but2.png", "Images/empty.png", "Images/hover1.png", "Images/levelButton.png", "Images/levelButtonHover.png", "Images/scen.png", "Images/titlescreen.png", "Images/zone.png"] }
	
	Crafty.load(assetsObj, function() {
	Crafty.scene("Title");
	});

});