#pragma strict
private var fall : boolean;
var Player : GameObject;
var spawnPoint : Transform;
var stomp : boolean;
function Update () {
	if(stomp){
		transform.position.z = 4;
		transform.localScale.y /= 2;
		fall = true;
		gameObject.GetComponent(PlatformMover).step = 0.0;
		stomp = false;
	}
	if(fall){
		transform.position.y -= 0.05;
	}
	if(transform.position.y < -25){
		Destroy(gameObject);
	}
}
function OnTriggerEnter(other : Collider){
	if(!stomp){
		if(other.tag == "Player" && this.GetComponent.<Renderer>().enabled==true){
			Destroy(other.gameObject);
			var P : GameObject = Instantiate(Player, spawnPoint.position, Quaternion.identity);
			var sf = Camera.main.GetComponent(move_camera_with_player);
			sf.target = P.transform;
		}
	}
}