#pragma strict

function OnTriggerEnter(other : Collider){
	
	if(other.tag == "Enemy"){
	var enemy_move=other.GetComponent(Enemy_movement);
		enemy_move.direction=enemy_move.direction*-1;
	}
	
}