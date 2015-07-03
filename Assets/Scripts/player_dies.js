#pragma strict
private var fall : boolean;
var Player : GameObject;


function OnTriggerEnter(other : Collider){
	var spawnPoint = GameObject.Find("SpawnPoint");
	if(other.tag == "Player" && this.GetComponent.<Renderer>().enabled==true){
		Destroy(other.gameObject);
		var P : GameObject = Instantiate(Player, spawnPoint.transform.position, Quaternion.identity);
		var sf = Camera.main.GetComponent(move_camera_with_player);
		sf.target = P.transform;
	}

}