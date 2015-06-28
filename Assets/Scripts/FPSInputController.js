private var motor : CharacterMotor;
private var keys = new String[4]; //front, back,space ,power
// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
	Read();
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
// Update is called once per frame
function Update () {
	// Get the input vector from keyboard or analog stick
	var directionVector;
	if(keys[0]=="1"){
	 	directionVector = new Vector3(Input.GetAxis("Horizontal_a_d"), 0, 0);
	}
	else{
	 	directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, 0);
	}

	
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector;
	if(keys[3]=="1"){
		motor.inputJump = Input.GetButton("Jump");
	}
	else if(keys[3]=="2"){
		motor.inputJump = Input.GetButton("Jump_w");
	}
	else if(keys[3]=="3"){
		motor.inputJump = Input.GetButton("Jump_up");
	}
	
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
