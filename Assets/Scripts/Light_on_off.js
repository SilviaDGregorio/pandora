#pragma strict

function Start () {

}

function Update () {
var light_on_off =GameObject.Find("Point light");
	if(Input.GetKeyUp("e")){
		if(light_on_off.light.intensity!=0){
			light_on_off.light.intensity =0;
		}
		else{
			light_on_off.light.intensity =4;
		}
		var cube_when_light_on_array = GameObject.FindGameObjectsWithTag("Cube_hide_when_light_on");
	
		for(var cube : GameObject in cube_when_light_on_array){
			
			var box_col = cube.collider as BoxCollider;
			box_col.size= new Vector3(0,0,0);
		}
		

	}
}