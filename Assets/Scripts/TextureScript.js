#pragma strict
var X : float;
var material_player : Material;
var material_player_top : Material;
var gravity_player : boolean;
private var keys = new String[4]; //front, back,space ,power
private var move_back="a";
private var move_front="d";
private	var normal_rownumber=1;
private	var stop_rownumber=0;
private var direction : float;
function Start () {//Gathering normal object scale x 
	direction=X;
	gravity_player=false;
	X = transform.localScale.x;
	Read ();
	if(keys[0]=="1"){
	 	move_back="a";
	 	move_front="d";
	}
	else{
	 	move_back="left";
	 	move_front="right";
	}
}

function Read () {
    try {
        // Create an instance of StreamReader to read from a file.
       var sr = new StreamReader("Assets/Settings/Settings.txt");
        // Read and display lines from the file until the end of the file is reached.
       var line = sr.ReadLine();
       var i =0;
        while (line != null && i<4) {
       
            keys[i]=line;
          
            line = sr.ReadLine();

            i++;
            
        }
        sr.Close();
    }
    catch (e) {
        // Let the user know what went wrong.
        print("The file could not be read:");
        print(e.Message);
    }
}
function Update () {
	var AT = gameObject.GetComponent(TextureAnimation);
    var graphics = this.gameObject as GameObject;
    var mesh=graphics.GetComponent.<Renderer>();
    if(Input.GetKeyDown("r")){
    	if(gravity_player){
    		gravity_player=false;
    	}
    	else{
    		gravity_player=true;
    	}
    	if(gravity_player){
    		mesh.material=material_player_top;
    		direction=-X;
    		stop_rownumber=1;
    		normal_rownumber=0;

    	}
    	else{
    		mesh.material=material_player;
    		direction=X;
    		stop_rownumber=0;
    		normal_rownumber=1;
    	
    	}
 
    }
	if(Input.GetKey(move_back)){
		//Gamer pushes a key
		//Set texture to normal
		transform.localScale.x = direction;
		AT.rowNumber = normal_rownumber;
	
	}else if(Input.GetKey(move_front)){
		//Push d
		//Flip the texture
		transform.localScale.x = -direction;
		AT.rowNumber = normal_rownumber;
	
	}
	else{
		AT.rowNumber = stop_rownumber;
	}
	
}
