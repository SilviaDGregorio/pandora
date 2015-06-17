#pragma strict
private var position_camera_first :float;
public var direction_with_player : boolean;
//Cuanto se va a desplazar respecto a lo que se desplace la camara
public var offset :int;
public var MainCamera : GameObject;
function Start () {
	position_camera_first = MainCamera.transform.position.x;

}

function Update () {
	if(direction_with_player){
		transform.position.x=( MainCamera.transform.position.x -position_camera_first)/offset;

	}
	else{
		transform.position.x=(position_camera_first - MainCamera.transform.position.x)/offset;

	}
}