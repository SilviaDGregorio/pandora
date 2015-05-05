#pragma strict

				
function Start () {

}

function Update () {
//Store Texture animate script
	var AT = gameObject.GetComponent(TextureAnimation);
//Player moves left
	if(Input.GetKey("a")){
		AT.rowNumber = 1;
	}
	else if(Input.GetKey("d")){
		//Player moves right
		AT.rowNumber = 1;
	}
	else{
		AT.rowNumber = 0;
	}
}