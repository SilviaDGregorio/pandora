#pragma strict 
import System;  // Used for getting the date
import System.IO;
private var keys = new String[4]; //front, back,space ,power
private var changekey:int;
private var changekeybool:boolean;
public var buttonfront:UI.Button;
public var buttonback:UI.Button;
public var buttonpower:UI.Button;
public var buttonspace:UI.Button;
function Start () {
	Read ();
	buttonfront.GetComponentInChildren(UI.Text).text = keys[1];
	buttonback.GetComponentInChildren(UI.Text).text = keys[0];
	buttonpower.GetComponentInChildren(UI.Text).text = keys[2];
 	buttonspace.GetComponentInChildren(UI.Text).text = keys[3];
  
}

function Update () {

}
function changeFront(){
	changekey=1;
	changekeybool=true;
}
function changeBack(){
	changekey=0;
	changekeybool=true;
}
function changeSpace(){
	changekey=3;
	changekeybool=true;
}
function changePower(){
	changekey=2;
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
            print(line);
            keys[i]=line;
            print( keys[i]);
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
    buttonfront.GetComponentInChildren(UI.Text).text = keys[1];
	buttonback.GetComponentInChildren(UI.Text).text = keys[0];
	buttonpower.GetComponentInChildren(UI.Text).text = keys[2];
 	buttonspace.GetComponentInChildren(UI.Text).text = keys[3];
  
    sw.Close();
}

// Detects keys pressed and prints their keycode
function OnGUI() {
	var e : Event = Event.current;
	if (e.isKey && changekeybool) {
		Debug.Log("Detected key code: " + e.keyCode);
		keys[changekey]=""+e.keyCode;
		Debug.Log("Detected key code: " + keys[changekey]);
		changekeybool=false;
		Write();
	}
	
	
}