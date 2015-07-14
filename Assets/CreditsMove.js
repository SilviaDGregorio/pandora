#pragma strict
var velocity:float;
var offset:float;
function Start () {

}

function Update () {
this.transform.position.y= this.transform.position.y + (Time.deltaTime * this.velocity);
}