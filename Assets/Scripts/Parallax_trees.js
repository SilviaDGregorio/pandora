#pragma strict
private var position_x_bg_tree :float;
public var direction_with_player : boolean;
function Start () {
	position_x_bg_tree = Camera.main.transform.position.x;
}

function Update () {
	if(direction_with_player){
		transform.position.x=(Camera.main.transform.position.x -position_x_bg_tree)/20;

	}
	else{
		transform.position.x=(position_x_bg_tree - Camera.main.transform.position.x)/15;

	}
}