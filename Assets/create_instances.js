#pragma strict
public var prefab;
function Start () {
for (var i = 0; i < 10; i++) {
		Instantiate(prefab, new Vector3(i * 2.0F, 0, 0), Quaternion.identity);
		i++;
	}
}

function Update () {

}