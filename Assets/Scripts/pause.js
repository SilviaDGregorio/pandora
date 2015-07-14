#pragma strict
var TS : float; //time scale
var paused :boolean; //pause or unpause the game
private var canvas_exit :GameObject;
function Start(){
	canvas_exit= GameObject.Find("Exit") as GameObject;
	canvas_exit.SetActive(false);
	TS = Time.timeScale;
	
}
function Update(){
	if(Input.GetKeyUp(KeyCode.Escape)){
		if(!paused){
			canvas_exit.SetActive(true);
			paused=true;
		}
		else{
			canvas_exit.SetActive(false);
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

function unpaused(){
	paused=false;
	canvas_exit.SetActive(false);
	if(Time.timeScale < TS){
			Time.timeScale  =TS;
			GetComponent.<AudioSource>().Play();
	}
}
function go_menu(){
	paused=false;
	canvas_exit.SetActive(false);
	if(Time.timeScale < TS){
			Time.timeScale  =TS;
			GetComponent.<AudioSource>().Play();
	}
	Application.LoadLevel("menu");
}