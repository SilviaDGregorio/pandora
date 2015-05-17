#pragma strict
var cube : GameObject;
function Start () {
for (var i = 0; i < 10; i++) {
		var someObject : GameObject = Instantiate(cube,  new Vector3(i * 2.0F, 0, 0), Quaternion.identity);

		i++;
	}
}

function Update () {

}