﻿var target : Transform;
var distance = 3.0;
var height = 3.0;
var damping = 5.0;
var smoothRotation = true;
var rotationDamping = 10.0;
var fixed_y_movement :boolean;
function Update () {
	
		var wantedPosition = target.TransformPoint(0, height, -distance);
		transform.position = Vector3.Lerp (transform.position, wantedPosition, Time.deltaTime * damping);
		if(transform.name=="Main Camera" && fixed_y_movement){
			transform.position.y=1;
		}
	
		if (smoothRotation) {
			var wantedRotation = Quaternion.LookRotation(target.position - transform.position, target.up);
			transform.rotation = Quaternion.Slerp (transform.rotation, wantedRotation, Time.deltaTime * rotationDamping);
		}

		else transform.LookAt (target, target.up);
		//Hace que nuestra camara no nos gire y veamos el suelo cuando saltamos
		transform.localRotation=Quaternion.Euler(0,0,0);
	

}