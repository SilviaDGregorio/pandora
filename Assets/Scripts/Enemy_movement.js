#pragma strict
private var Xpos : float;
private var Ypos : float;
private var max : boolean;
var Vert : boolean;
var maxAmount : int;
var step : float;
var direction:int;
function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
}

function FixedUpdate () {
	//SET THE MAX
	if(Vert){ //Vertical
		if(transform.position.y >= Ypos + maxAmount){
			max = true;
		} else if(transform.position.y <= Ypos){
			max = false;
		}
	}
	else{
		if(transform.position.x >= Xpos + maxAmount){
			max = true;
		} else if(transform.position.x <= Xpos){
			max = false;
		}
	}
	//MOVING THE PLATFORM
	if(Vert){ // Vertical movement
		if(!max){
			transform.position.y += 1;
			transform.position.x+=1;
		} else {
			transform.position.y -= 1;
			transform.position.x-=1;
		}
	} else { //Horizontal movement
		
			transform.position.x += step*direction;
		
	}
}
