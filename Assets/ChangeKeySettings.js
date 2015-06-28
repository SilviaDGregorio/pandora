#pragma strict 
import System;  // Used for getting the date
import System.IO;
private var keys = new String[4]; //front, back,space ,power
private var changekey:int;
private var changekeybool:boolean;
public var buttonpower:UI.Button;
function Start () {
	Read ();

	var button = GameObject.Find("Button_front_"+keys[1]);
	changeColor(button.GetComponent.<UI.Button>());
	button = GameObject.Find("Button_back_"+keys[0]);
	changeColor(button.GetComponent.<UI.Button>());
	button = GameObject.Find("Button_jump_"+keys[3]);
	changeColor(button.GetComponent.<UI.Button>());
	buttonpower.GetComponentInChildren(UI.Text).text = keys[2];

  
}

function Update () {

}
function changeColor(button:UI.Button){
	button.colors.normalColor= Color(0.17254901960784313725490196078431,0.71764705882352941176470588235294,0.98431372549019607843137254901961);
	button.colors.pressedColor= Color(0.17254901960784313725490196078431,0.71764705882352941176470588235294,0.98431372549019607843137254901961);
	button.colors.highlightedColor= Color(0.17254901960784313725490196078431,0.71764705882352941176470588235294,0.98431372549019607843137254901961);

}
function changePreferences( button:UI.Button){

	
	var number=button.name.Split("_"[0])[2];
	if(button.tag=="Button_front" || button.tag=="Button_back"){
		var buttons_array = GameObject.FindGameObjectsWithTag("Button_front");
		
		for(var _button : GameObject in buttons_array){
			_button.GetComponent.<UI.Button>().colors.normalColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.pressedColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.highlightedColor=Color.white;
			

		}
		changeColor(button);
		button = GameObject.Find("Button_back_"+number).GetComponent.<UI.Button>();
		buttons_array = GameObject.FindGameObjectsWithTag("Button_back");
		
		for(var _button : GameObject in buttons_array){
			_button.GetComponent.<UI.Button>().colors.normalColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.pressedColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.highlightedColor=Color.white;
			

		}
		changeColor(button);
		keys[1]=number;
		keys[0]=number;
	}
	else if(button.tag=="Button_jump"){
		buttons_array = GameObject.FindGameObjectsWithTag(button.tag);
		
		for(var _button : GameObject in buttons_array){
			_button.GetComponent.<UI.Button>().colors.normalColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.pressedColor=Color.white;
			_button.GetComponent.<UI.Button>().colors.highlightedColor=Color.white;
			

		}
		changeColor(button);
		keys[3]=number;
	}
}

function changePower(){
	changekeybool=true;
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
function Write () {
    // Create an instance of StreamWriter to write text to a file.
	var    sw = new StreamWriter("Assets/Settings/Settings.txt");
    // Add some text to the file.
     for(var key : String in keys)
    {
        sw.WriteLine(key);
    }
     
    sw.Close();
}

// Detects keys pressed and prints their keycode
function OnGUI() {
	var e : Event = Event.current;
	if (e.isKey && changekeybool) {
		Debug.Log("Detected key code: " + e.keyCode);
		keys[2]=""+e.keyCode;
		buttonpower.GetComponentInChildren(UI.Text).text = keys[2];
		Debug.Log("Detected key code: " + keys[changekey]);
		changekeybool=false;
	}
	
	
}