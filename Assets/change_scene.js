#pragma strict
var lvl_file : TextAsset; 
var settings_file : TextAsset; 
private var keys = new String[4]; //front, back,space ,power
private var lvl:int;
private var max_lvl:int;
function Start () {
	isCreatedSettingsFile();
	isCreatedLvlFile();
}

function Update () {

}
function Menu(){
	Application.LoadLevel("menu");
	
}
function StartGame(){
	Read();
	lvl=1;
	Write();
	Application.LoadLevel("world1");
	
}
function Settings(){
	Application.LoadLevel("settings");
	
}
function Continue(){

   	Read();
	if(lvl>max_lvl){
		lvl=1;
		Write();		
	}
	Application.LoadLevel("world"+lvl);

}
function Write () {
    // Create an instance of StreamWriter to write text to a file.
	var    sw = new StreamWriter("Assets/Settings/Lvl.txt");
    // Add some text to the file.
    sw.WriteLine(lvl);
    sw.WriteLine(max_lvl);        
    sw.Close();
}
function Read(){
 try {
        // Create an instance of StreamReader to read from a file.
       var sr = new StreamReader("Assets/Settings/Lvl.txt");
        // Read and display lines from the file until the end of the file is reached.
       lvl = parseInt(sr.ReadLine());
	   max_lvl=	 parseInt(sr.ReadLine());
       sr.Close();
    }
    catch (e) {
         // Let the user know what went wrong.
        print("The file could not be read:");
        print(e.Message);

    }
}
function isCreatedLvlFile(){
	try {
        // Create an instance of StreamReader to read from a file.
       var sr = new StreamReader("Assets/Settings/Lvl.txt");
       sr.Close();
    }
    catch (e) {
        // Let the user know what went wrong.
        var texto = lvl_file.text.Split("-"[0]);
		lvl=parseInt(texto[0]);
		max_lvl=parseInt(texto[1]);
		Write();
    }
}
function isCreatedSettingsFile(){
	try {
        // Create an instance of StreamReader to read from a file.
       var sr = new StreamReader("Assets/Settings/Settings.txt");
       sr.Close();
    }
    catch (e) {
        // Let the user know what went wrong.
        keys = settings_file.text.Split("-"[0]);        
        WriteSettings();
		
    }
}
function WriteSettings() {
    // Create an instance of StreamWriter to write text to a file.
	var    sw = new StreamWriter("Assets/Settings/Settings.txt");
    // Add some text to the file.
     for(var key : String in keys)
    {
        sw.WriteLine(key);
    }
     
    sw.Close();
}

