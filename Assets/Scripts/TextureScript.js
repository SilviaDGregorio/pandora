#pragma strict
var X : float;
private var keys = new String[4]; //front, back,space ,power
private var move_back="a";
private var move_front="d";

function Start () {//Gathering normal object scale x 
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

	if(Input.GetKey(move_back)){
		//Gamer pushes a key
		//Set texture to normal
		transform.localScale.x = X;
		AT.rowNumber = 1;
	}else if(Input.GetKey(move_front)){
		//Push d
		//Flip the texture
		transform.localScale.x = -X;
		AT.rowNumber = 1;
	}
	else{
		AT.rowNumber = 0;
	}

}
