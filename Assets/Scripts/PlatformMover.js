#pragma strict
 private var Xpos :float;
 private var Ypos:float;
 private var max_width_plane : boolean;
 var VerticalMovement : boolean;
 var maxAmount : int;
 var step : float;
function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
}

function Update () {
//Te dice si ha llegado al maximo del plano
if(VerticalMovement){
 	if(transform.position.y >= Ypos + maxAmount){
 		max_width_plane=true;
 	}
 	else if(transform.position.y <= Ypos){
 		max_width_plane=false;
 	}
 }
 else{
	if(transform.position.x >= Xpos + maxAmount){
 		max_width_plane=true;
 	}
 	else if(transform.position.x <= Xpos){
 		max_width_plane=false;
 	}
 }
 
 
//Mueve el mapa
 if(VerticalMovement){ //movimiento vertical
 	if(!max_width_plane){
 		transform.position.y+=step;
 	}
 	else{
 		transform.position.y-=step;
 	}
 }
 else{//movimiento horizontal
	 if(!max_width_plane){
	 		transform.position.x+=step;
	 	}
	 	else{
	 		transform.position.x-=step;
	 	}
 }
 
}