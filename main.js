var canvas=new fabric.Canvas("myCanvas");

// Create canvas variable
ball_x=1030;
ball_y=10;

hole_x=15;
hole_y=430;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load()
{
	
fabric.Image.fromURL("golf-h.png" , function(Img) 
{

hole_obj=Img;
hole_obj.scaleToWidth(70);
hole_obj.scaleToHeight(70);

hole_obj.set({
top:hole_y,
right:hole_x
});
canvas.add(hole_obj);
});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
		
fabric.Image.fromURL("ball.png" , function(img) 
{

	ball_obj=img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);

ball_obj.set({
top:ball_y,
left:ball_x
});
canvas.add(ball_obj);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML="You have won and you have hit the Goal!!!!!!!";
document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{

		if(keyPressed == '72')
		{
		load();
			console.log("now whole is visible");
		}

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
			ball_y = ball_y - block_image_height ;
			console.log("when up arrow key is pressed, X=" + ball_x + " ,Y=" + ball_y);
			console.log("block_img_height=" + block_image_height);
			canvas.remove(ball_obj);
			new_image();
			}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <=600){
			ball_y = ball_y + block_image_height ;
			console.log("when down arrow key is pressed, X=" + ball_x + " ,Y=" + ball_y);
			console.log("block_img_height=" + block_image_height);
			canvas.remove(ball_obj);
			new_image();
			}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_height ;
			console.log("when left arrow key is pressed, X=" + ball_x + " ,Y=" + ball_y);
			console.log("block_img_height=" + block_image_height);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height ;
			console.log("when left arrow key is pressed, X=" + ball_x + " ,Y=" + ball_y);
			console.log("block_img_height=" + block_image_height);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

