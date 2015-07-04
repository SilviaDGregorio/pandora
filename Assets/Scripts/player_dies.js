#pragma strict
private var fall : boolean;
var Player : GameObject;
var graphics :GameObject;
function OnTriggerEnter(other : Collider){
	var spawnPoint = GameObject.Find("SpawnPoint");
	if(other.tag == "Player" && this.GetComponent.<Renderer>().enabled==true){
		
		var first_player : GameObject;
	// This will return the game object named Hand in the scene.
		first_player = GameObject.Find("First Player Controller/Graphics") as GameObject;
		if(first_player!=null){
			var texturescript= first_player.GetComponent("TextureScript")  as TextureScript;
			graphics.GetComponent(TextureScript).gravity_active = texturescript.gravity_active;
		}

		Destroy(other.gameObject);
		var P : GameObject = Instantiate(Player, spawnPoint.transform.position, Quaternion.identity);
		var sf = Camera.main.GetComponent(move_camera_with_player);
		sf.target = P.transform;
	}

}