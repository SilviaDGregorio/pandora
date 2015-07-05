#pragma strict
private var controller_r_w:Reader_writer_settings;
private var keys = new String[5]; //front, back,space ,power
function Start () {
	size_box_collider(1);
	hide_box(false,0);
	hide_show_red_enemy(false);
	var controller = GameObject.Find("Controller");
	controller_r_w= controller.GetComponent("Reader_writer_settings")  as Reader_writer_settings;
	controller_r_w.ReadSettings();
	keys=controller_r_w.keys;
}

function Update () {
var light_on_off =GameObject.Find("Point light");

	if(Input.GetKeyUp(keys[2].ToLower())){
		if(light_on_off.GetComponent.<Light>().intensity!=0){
			light_on_off.GetComponent.<Light>().intensity =0;
			size_box_collider(0);
			hide_box(true,1);
			hide_show_red_enemy(true);
		}
		else{
			light_on_off.GetComponent.<Light>().intensity =4;
			size_box_collider(1);
			hide_box(false,0);
			hide_show_red_enemy(false);
		}

		

	}
}
function hide_show_red_enemy(hide_or_not:boolean){
	var enemy_red_array = GameObject.FindGameObjectsWithTag("Enemy_red");

	for(var enemy : GameObject in enemy_red_array){
		enemy.GetComponent.<Renderer>().enabled=hide_or_not;
	}

}
function size_box_collider(size_box:int){
	var cube_when_light_off_array = GameObject.FindGameObjectsWithTag("Cube_hide_when_light_off");

	for(var cube : GameObject in cube_when_light_off_array){
		
		var box_col = cube.GetComponent.<Collider>() as BoxCollider;
		box_col.size= new Vector3(size_box,size_box,size_box);
	}

}
function hide_box(hide_or_not:boolean,size_box:int){
	var cube_when_light_on_array = GameObject.FindGameObjectsWithTag("Cube_hide_when_light_on");

	for(var cube : GameObject in cube_when_light_on_array){
		cube.GetComponent.<Renderer>().enabled=hide_or_not;
			
		var box_col = cube.GetComponent.<Collider>() as BoxCollider;
		box_col.size= new Vector3(size_box,size_box,size_box);
	}

}