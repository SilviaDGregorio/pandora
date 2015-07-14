#pragma strict
private var fall : boolean;
var Player : GameObject;
var graphics :GameObject;
function OnTriggerEnter(other : Collider){
	var spawnPoint = GameObject.Find("SpawnPoint");
	if(other.tag == "Player" && this.GetComponent.<Renderer>().enabled==true){
		
		var first_player : GameObject;
		var first_player_graphics : GameObject;
	// This will return the game object named Hand in the scene.
		first_player_graphics = GameObject.Find("First Player Controller/Graphics") as GameObject;
		first_player = GameObject.Find("First Player Controller") as GameObject;
		if(first_player!=null){
			var texturescript= first_player_graphics.GetComponent("TextureScript")  as TextureScript;
			var fsp = first_player.GetComponent("FPSInputController")  as FPSInputController;
			graphics.GetComponent(TextureScript).gravity_active = texturescript.gravity_active;
			Player.GetComponent(FPSInputController).booleanJump=fsp.booleanJump;
		}

		Destroy(other.gameObject);
		var P : GameObject = Instantiate(Player, spawnPoint.transform.position, Quaternion.identity);
		var sf = Camera.main.GetComponent(move_camera_with_player);
		sf.target = P.transform;
	}

}