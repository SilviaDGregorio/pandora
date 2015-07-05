#pragma strict
private var lvl:int;
private var max_lvl:int;
private var controller_r_w:Reader_writer_settings;
function Start () {
	var controller = GameObject.Find("Controller");
	controller_r_w= controller.GetComponent("Reader_writer_settings")  as Reader_writer_settings;
	controller_r_w.ReadLvl();
	lvl=controller_r_w.lvl;
	max_lvl=controller_r_w.max_lvl;
	//Read();
}

function Update () {

}
function OnTriggerEnter(other : Collider){
	if( other.tag == "Player"){
		lvl=lvl+1;
		if(lvl>max_lvl){
			lvl=1;
			controller_r_w.lvl=lvl;
			controller_r_w.WriteLvl();
			Application.LoadLevel("menu");
	
		}
		else{
			controller_r_w.lvl=lvl;
			controller_r_w.WriteLvl();	
			Application.LoadLevel("world"+lvl);
		}
			
	}
	
}
