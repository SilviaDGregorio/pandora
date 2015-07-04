#pragma strict
private var lvl:int;
private var max_lvl:int;
function Start () {
	Read();
}

function Update () {

}
function OnTriggerEnter(other : Collider){
	if( other.tag == "Player"){
		lvl=lvl+1;
		if(lvl>max_lvl){
			lvl=1;
			Application.LoadLevel("menu");
		}
		else{
			Application.LoadLevel("world"+lvl);
		}			
		Write();
	}
	
}
function Read () {
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
function Write () {
    // Create an instance of StreamWriter to write text to a file.
	var    sw = new StreamWriter("Assets/Settings/Lvl.txt");
    // Add some text to the file.
    sw.WriteLine(lvl);
    sw.WriteLine(max_lvl);        
    sw.Close();
}
