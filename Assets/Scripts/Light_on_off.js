#pragma strict

function Start () {

}

function Update () {
var light_on_off =GameObject.Find("Point light");

	if(Input.GetKeyUp("e")){
		if(light_on_off.light.intensity!=0){
			light_on_off.light.intensity =0;
			size_box_collider(0);
			hide_box(true,1);
		}
		else{
			light_on_off.light.intensity =4;
			size_box_collider(1);
			hide_box(false,0);
		}

		

	}
}
function size_box_collider(size_box:int){
	var cube_when_light_off_array = GameObject.FindGameObjectsWithTag("Cube_hide_when_light_off");

	for(var cube : GameObject in cube_when_light_off_array){
		
		var box_col = cube.collider as BoxCollider;
		box_col.size= new Vector3(size_box,size_box,size_box);
	}

}
function hide_box(hide_or_not:boolean,size_box:int){
	var cube_when_light_on_array = GameObject.FindGameObjectsWithTag("Cube_hide_when_light_on");

	for(var cube : GameObject in cube_when_light_on_array){
		cube.renderer.enabled=hide_or_not;
			
		var box_col = cube.collider as BoxCollider;
		box_col.size= new Vector3(size_box,size_box,size_box);
	}

}