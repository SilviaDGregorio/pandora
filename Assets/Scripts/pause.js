#pragma strict
var TS : float; //time scale
var paused :boolean; //pause or unpause the game

function Start(){
	TS = Time.timeScale;
}
function Update(){
	if(Input.GetKeyUp("p")){
		if(!paused){
			paused=true;
		}
		else{
			paused=false;
		}
	}
	if(paused){
		if(Time.timeScale >0){
			Time.timeScale  =0;
			GetComponent.<AudioSource>().Pause();
		}
	}
	else{
		if(Time.timeScale < TS){
			Time.timeScale  =TS;
			GetComponent.<AudioSource>().Play();
		}
	}
}