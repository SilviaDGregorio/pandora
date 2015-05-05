#pragma strict
var X : float;
function Start () {//Gathering normal object scale x 
X = transform.localScale.x;
}
function Update () {
if(Input.GetKey("a")){
 //Gamer pushes a key
 //Set texture to normal
  transform.localScale.x = X;
  }else if(Input.GetKey("d")){
   //Push d
   //Flip the texture
   transform.localScale.x = -X;
   }
}
