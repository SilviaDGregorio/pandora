#pragma strict
var X : float;
var material_player : Material;
var material_player_top : Material;
var gravity_player : boolean;
var player : GameObject;
var gravity_active : boolean;
private var keys = new String[5]; //front, back,space ,power
private var move_back="a";
private var move_front="d";
private	var normal_rownumber=1;
private	var stop_rownumber=0;
private var controller_r_w:Reader_writer_settings;
function Start () {//Gathering normal object scale x 
	gravity_player=false;
	X = transform.localScale.x;
	var controller = GameObject.Find("Controller");
	controller_r_w= controller.GetComponent("Reader_writer_settings")  as Reader_writer_settings;
	controller_r_w.ReadSettings();
	keys=controller_r_w.keys;
	if(keys[0]=="1"){
	 	move_back="a";
	 	move_front="d";
	}
	else{
	 	move_back="left";
	 	move_front="right";
	}
}


function Update () {
	var AT = gameObject.GetComponent(TextureAnimation);
	var motor = player.GetComponent(CharacterMotor);
    var graphics = this.gameObject as GameObject;
    var mesh=graphics.GetComponent.<Renderer>();
    if(Input.GetKeyDown(keys[4].ToLower()) && gravity_active){
    	if(gravity_player){
    		gravity_player=false;
    	}
    	else{
    		gravity_player=true;
    	}
    	if(gravity_player){
    		motor.gravity=-50;
    		mesh.material=material_player_top;
    		stop_rownumber=1;
    		normal_rownumber=0;

    	}
    	else{
    		motor.gravity=50;
    		mesh.material=material_player;
    		stop_rownumber=0;
    		normal_rownumber=1;
    	
    	}
 
    }
	if(Input.GetKey(move_back)){
		//Gamer pushes a key
		//Set texture to normal
		transform.localScale.x = X;
		AT.rowNumber = normal_rownumber;
	
	}else if(Input.GetKey(move_front)){
		//Push d
		//Flip the texture
		transform.localScale.x = -X;
		AT.rowNumber = normal_rownumber;
	
	}
	else{
		AT.rowNumber = stop_rownumber;
	}
	
}
