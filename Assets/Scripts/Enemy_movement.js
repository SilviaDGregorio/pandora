#pragma strict
private var Xpos : float;
private var Ypos : float;
private var max : boolean;
private var  timeSinceLastCall:float;
var Vert : boolean;
var maxAmount : int;
var step : float;
var direction:int;
function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	timeSinceLastCall=0.0;
}

function FixedUpdate () {


  timeSinceLastCall += Time.deltaTime*10;
    
	//SET THE MAX
	if(Vert){ //Vertical
		if (timeSinceLastCall >= 8){
			if(transform.position.x <= Xpos - maxAmount){
				max = true;
			} else if(transform.position.x >= Xpos){
				max = false;
			}
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
		if (timeSinceLastCall >= 8)
	     {
	      	if(!max){
				transform.position.y += 2;
				transform.position.x-=2;
			} else {
				transform.position.y -= 2;
				transform.position.x+=2;
			}
	       timeSinceLastCall = 0;   // reset timer back to 0
	     }		
	} else { //Horizontal movement
		
			transform.position.x += step*direction;
		
	}
}
