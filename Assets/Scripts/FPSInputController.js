private var motor : CharacterMotor;
private var keys = new String[5]; //front, back,space ,power
// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
	var controller = GameObject.Find("Controller");
	controller_r_w= controller.GetComponent("Reader_writer_settings")  as Reader_writer_settings;
	controller_r_w.ReadSettings();
	keys=controller_r_w.keys;
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
