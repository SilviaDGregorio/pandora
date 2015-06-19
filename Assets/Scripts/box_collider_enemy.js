﻿#pragma strict
var Player : GameObject;
var spawnPoint : Transform;
function OnTriggerEnter(other : Collider){
var cube = this.gameObject;
	if( other.tag == "Enemy" ){
	var enemy_move=other.GetComponent(Enemy_movement);
		enemy_move.direction=enemy_move.direction*-1;
	}
	
}
function OnTriggerStay(other: Collider) {
	var light_on_off =GameObject.Find("Point light");

	if (this.collider.tag =="Cube_hide_when_light_off"){
		if(light_on_off.light.intensity!=0 && other.tag == "Player" ){
				Destroy(other.gameObject);
				var P : GameObject = Instantiate(Player, spawnPoint.position, Quaternion.identity);
				var sf = Camera.main.GetComponent(move_camera_with_player);
				sf.target = P.transform;
		}
	}
}