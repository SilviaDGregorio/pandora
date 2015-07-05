#pragma strict
public var keys = new String[5]; //front, back,space ,power
public var lvl:int;
public var max_lvl:int;
function Start () {
	ReadSettings();
	ReadLvl();
}

function Update () {

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

function ReadSettings(){
     try {
        // Create an instance of StreamReader to read from a file.
       var sr = new StreamReader("Assets/Settings/Settings.txt");
       keys = new String[5];
        // Read and display lines from the file until the end of the file is reached.
       var line = sr.ReadLine();
       var i =0;
        while (line != null && i<5) {
       
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
function WriteLvl () {
    // Create an instance of StreamWriter to write text to a file.
	var    sw = new StreamWriter("Assets/Settings/Lvl.txt");
    // Add some text to the file.
    sw.WriteLine(lvl);
    sw.WriteLine(max_lvl);        
    sw.Close();
}
function ReadLvl(){
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