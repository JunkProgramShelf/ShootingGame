//Animation frame configlation
const mycanvas = document.getElementById("GameStage");
const ctx= mycanvas.getContext("2d");
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var demo = document.getElementById("Game_Status_Display");

//Key flag
Up_Pressed=false;
Down_Pressed=false;
Left_Pressed=false;
Right_Pressed=false;

//Enemy flag
enemy_flag1 = true;
enemy_flag2 = true;
enemy_flag3 = true;
enemy_flag4 = true;
enemy_flag5 = true;
enemy_flag6 = true;
enemy_flag7 = true;
enemy_flag8 = true;

//Key Configlation
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
  if (e.key === "Up" || e.key === "ArrowUp") {
    Up_Pressed = true;
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    Down_Pressed = true;
  }else if (e.key === "Left" || e.key === "ArrowLeft") {
   	Left_Pressed = true;
  } else if (e.key === "Right" || e.key === "ArrowRight") {
    Right_Pressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === "Up" || e.key === "ArrowUp") {
    Up_Pressed = false;
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    Down_Pressed = false;
  }else if (e.key === "Left" || e.key === "ArrowLeft") {
   	Left_Pressed = false;
  } else if (e.key === "Right" || e.key === "ArrowRight") {
    Right_Pressed = false;
  }
}



/*Player drawning Initial position Definision*/
player_point_x_1 =  mycanvas.width / 2;player_point_y_1 = mycanvas.height -100;
player_point_x_2 = player_point_x_1 + 40;player_point_y_2 = player_point_y_1;
player_point_x_3 = player_point_x_1 + 40;player_point_y_3 = player_point_y_1 + 20;
player_point_x_4 = player_point_x_1 + 60;player_point_y_4 = player_point_y_1 + 20;
player_point_x_5 = player_point_x_1 + 60;player_point_y_5 = player_point_y_1 + 60;
player_point_x_6 = player_point_x_1 - 20;player_point_y_6 = player_point_y_1 + 60;
player_point_x_7 = player_point_x_1 - 20;player_point_y_7 = player_point_y_1 + 20;
player_point_x_8 = player_point_x_1;player_point_y_8 = player_point_y_1 + 20;


/*Player direction definision*/
player_direction_up = true;
player_direction_down = false;
player_direction_left = false;
player_direction_right = false;
/*Player definision*/
player_x_size=50;
player_y_size=50;
player_x=mycanvas.height / 2;
player_y=mycanvas.width /2;
player_heartpoint=10;
b_Radius=20;




/*Player drawing function*/
function drawPlayer(){
	ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
	ctx.beginPath();
	ctx.moveTo(player_point_x_1, player_point_y_1);//1
	ctx.lineTo(player_point_x_2,player_point_y_2);//2
	ctx.lineTo(player_point_x_3,player_point_y_3);//3
	ctx.lineTo(player_point_x_4,player_point_y_4);//4
	ctx.lineTo(player_point_x_5,player_point_y_5);//5
	ctx.lineTo(player_point_x_6,player_point_y_6);//6
	ctx.lineTo(player_point_x_7,player_point_y_7);//7
	ctx.lineTo(player_point_x_8,player_point_y_8);//8
	ctx.fillStyle = "Black";
	ctx.fill();
	ctx.closePath();
}

/*Drawing Enemy*/

ex1=150;
ey1=50;

ex2=350;
ey2=50;

ex3=550;
ey3=50;

ex4=750;
ey4=50;

ex5=150;
ey5=250;

ex6=350;
ey6=250;

ex7=550;
ey7=250;

ex8=750;
ey8=250;


function drawEnemy(){
	
	if(enemy_flag1){
		ctx.beginPath();
		ctx.fillStyle = "Red";
		ctx.fillRect(ex1,ey1,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag2){
		ctx.beginPath();
		ctx.fillStyle = "Blue";
		ctx.fillRect(ex2,ey2,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag3){
		ctx.beginPath();
		ctx.fillStyle = "Green";
		ctx.fillRect(ex3,ey3,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag4){
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.fillRect(ex4,ey4,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag5){
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.fillRect(ex5,ey5,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag6){
		ctx.beginPath();
		ctx.fillStyle = "Green";
		ctx.fillRect(ex6,ey6,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag7){
		ctx.beginPath();
		ctx.fillStyle = "Blue";
		ctx.fillRect(ex7,ey7,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
	if(enemy_flag8){
		ctx.beginPath();
		ctx.fillStyle = "Red";
		ctx.fillRect(ex8,ey8,100,100)
		ctx.fill();
		ctx.closePath();
	}else{
		
	}
}



/*Moving function*/
b_x=0;
b_y=0;
b_i=0;
b_count=0;
b_flag=false;
function Player_Shooting(){
	if(b_flag){
		ctx.beginPath();
		ctx.arc(b_x, b_y, b_Radius, 0, Math.PI * 2);
		ctx.fillStyle = "Black";
		ctx.fill();
		ctx.closePath();
		
	}

}
//Bullet Moving function
function MovingBullet(){
	if(b_y <= 1000 && b_flag){
		b_y -= 10;
		if((b_y == 0 || b_y <= 0) && b_flag){
			//b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			//b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag=false;
		}
	}

}



/*Hit Check function*/
function Check_Hit(){
	if(b_flag){
		if(enemy_flag1 && ( ( ex1 - 3 <= b_x && b_x <= ex1 + 103 ) && (ey1 <= b_y && b_y <= ey1 + 100 ) ) ){//enemy1
			enemy_flag1 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag2 && ( ( ex2 - 3 <= b_x && b_x <= ex2 + 103 ) && (ey2 <= b_y && b_y <= ey2 + 100 ) ) ){//enemy2
			enemy_flag2 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag3 && ( ( ex3 - 3 <= b_x && b_x <= ex3 + 103 ) && (ey3 <= b_y && b_y <= ey3 + 100) ) ){//enemy3
			enemy_flag3 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag4 && ( ( ex4 - 3 <= b_x && b_x <= ex4 + 103 ) && (ey4 <= b_y && b_y <= ey4 + 103 ) ) ){//enemy4
			enemy_flag4 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag5 && ( ( ex5 - 3 <= b_x && b_x <= ex5 + 103 ) && ( ey5 <= b_y && b_y <= ey5 + 103 ) ) ){//enemy5
			enemy_flag5 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag6 && ( ( ex6 - 3 <= b_x && b_x <= ex6 + 103 ) && ( ey6 <= b_y && b_y <= ey6 + 103 ) ) ){//enemy6
			enemy_flag6 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag7 && ( ( ex7 - 3 <= b_x && b_x <= ex7 + 103 ) && ( ey7 <= b_y && b_y <= ey7 + 103 ) ) ){//enemy7
			enemy_flag7 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
		if(enemy_flag8 && ( ( ex8 - 3 <= b_x && b_x <= ex8 + 103 ) && ( ey8 <= b_y && b_y <= ey8 + 103 ) ) ){//enemy8
			enemy_flag8 = false;
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag = false;
		}
	}
}

/*Controler function*/
function Player_Key_Controler(){
	if(Left_Pressed){
		if(player_point_x_6 <= 0 || player_point_x_7 <= 0){
			
		}else{
			player_point_x_1 -=10 ;
			player_point_x_2 -=10 ;
			player_point_x_3 -=10 ;
			player_point_x_4 -=10 ;
			player_point_x_5 -=10 ;
			player_point_x_6 -=10 ;
			player_point_x_7 -=10 ;
			player_point_x_8 -=10 ;
		}
	}else if(Right_Pressed){
		if(player_point_x_4 >= mycanvas.width || player_point_x_5 >= mycanvas.width){
			
		}else{
			player_point_x_1 +=10 ;
			player_point_x_2 +=10 ;
			player_point_x_3 +=10 ;
			player_point_x_4 +=10 ;
			player_point_x_5 +=10 ;
			player_point_x_6 +=10 ;
			player_point_x_7 +=10 ;
			player_point_x_8 +=10 ;
		}
	}else if(Up_Pressed){
		if(b_flag){
			
		}else{
			b_x=( player_point_x_1 + player_point_x_2 ) / 2;
			b_y=( player_point_y_1 + player_point_y_2 ) / 2;
			b_flag=true;
		}
	}

}

//Enemy Control Function
dx=5;
function Enemy_Control(){
	if(dx < 0){
		if(ex1 <= 20){
			dx=5;
			ex1+=dx;
			ex2+=dx;
			ex3+=dx;
			ex4+=dx;
			ex5+=dx;
			ex6+=dx;
			ex7+=dx;
			ex8+=dx;
		}else{
			ex1+=dx;
			ex2+=dx;
			ex3+=dx;
			ex4+=dx;
			ex5+=dx;
			ex6+=dx;
			ex7+=dx;
			ex8+=dx;
		}
	}else if(dx >= 0){
		if(ex4 + 100 >= mycanvas.width -20){
			dx=-5;
			ex1+=dx;
			ex2+=dx;
			ex3+=dx;
			ex4+=dx;
			ex5+=dx;
			ex6+=dx;
			ex7+=dx;
			ex8+=dx;
		}else{
			ex1+=dx;
			ex2+=dx;
			ex3+=dx;
			ex4+=dx;
			ex5+=dx;
			ex6+=dx;
			ex7+=dx;
			ex8+=dx;
		}
	}else{
		
	}
}

//debug functuion
function DebugFunc(m){
	if(Down_Pressed){
		cancelAnimationFrame(m);
	}
}
//GameSet process
function GameSet(func){
	if(!( enemy_flag1 || enemy_flag2 || enemy_flag3 || enemy_flag4 || enemy_flag5 || enemy_flag6 || enemy_flag7 || enemy_flag8)){
		alert("Game Clear");
		cancelAnimationFrame(func);
	}
}

//GameOver process
function Check_Gameover(func){
	//alert();
	cancelAnimationFrame(func);

}


var count=0;
/*Game function*/
function mainGame(){
	ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
	drawPlayer();
	drawEnemy();
	Enemy_Control();
	Player_Shooting();
	Player_Key_Controler();
	MovingBullet();
	Check_Hit();
	myreq = requestAnimationFrame(mainGame);
	GameSet(myreq);
	//DebugFunc(myreq);
}