#pragma strict
private var target : GameObject;
var offset :float;
private var position_Y_new :float;
private var position_Y_old:float;

function Start () {
	position_Y_new= target.transform.position.y;
	position_Y_old=0.0;
	
}

function Update () {
	
		target = GameObject.FindWithTag("Player");
		position_Y_new=target.transform.position.y;
		if (Mathf.Abs(position_Y_new-position_Y_old)>=3){
			Debug.Log(position_Y_new);
			Debug.Log(position_Y_old);
			Debug.Log(Mathf.Abs(position_Y_new-position_Y_old)>=3);			
			Debug.Log("background last "+transform.position.y);
			transform.position.y = transform.position.y+((position_Y_new-position_Y_old)/offset);
			position_Y_old=position_Y_new;
			Debug.Log("background new "+transform.position.y);
		}	
}