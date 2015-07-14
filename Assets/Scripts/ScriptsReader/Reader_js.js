#pragma strict

var csv : TextAsset; 
var cube : GameObject;
var cube_red :GameObject;
var normal_enemy :GameObject;
var vertical_enemy:GameObject;
var red_enemy:GameObject;
var cube_hide_light_on :GameObject;
var wood_material:Material;
var wood_material_light_on:Material;
var wood_material_light_off:Material;
var rock_material:Material;
var rock_material_light_on:Material;
var rock_material_light_off:Material;
var enemy180:Material;
var enemy:Material;
function Start ()
{
	var map=CSVReader.SplitCsvGrid(csv.text);
	var tamX=CSVReader.getWidth(csv.text);
	var tamY =CSVReader.getHeight(csv.text);
	var controller = GameObject.Find("Controller");
	var controller_r_w= controller.GetComponent("Reader_writer_settings")  as Reader_writer_settings;
	controller_r_w.ReadLvl();
	var lvl=controller_r_w.lvl;
	var xPosition=0;
	var yPosition=0;
	 var mesh=cube.GetComponent.<Renderer>();
	if (lvl==1){
	   
		mesh.material=wood_material;
		cube_red.GetComponent.<Renderer>().material=wood_material_light_on;
		cube_hide_light_on.GetComponent.<Renderer>().material=wood_material_light_off;
	}
	else if (lvl==2){
		mesh.material=rock_material;
		cube_red.GetComponent.<Renderer>().material=rock_material_light_on;
		cube_hide_light_on.GetComponent.<Renderer>().material=rock_material_light_off;
	}

		for(var position in map){
			
			//Debug.Log("Posicion x:"+xPosition+"posicion y:"+yPosition+"es un :"+position);
			switch(position){		
			
				case "1":
				//Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);	
					Instantiate(cube_red as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0), Quaternion.identity);
					break;
				case "2":
					//Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);	
					Instantiate(cube as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0), Quaternion.identity);
					break;
				case "3":
				//	Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);		
					Instantiate(cube as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0), Quaternion.identity);
					break;
				case "4":
					//Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);	
					Instantiate(cube_hide_light_on as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0), Quaternion.identity);
					break;
				case "5":
				//	Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);
					normal_enemy.GetComponent.<Renderer>().material=enemy;
					Instantiate(normal_enemy as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0.4947718), Quaternion.Euler(Vector3(0,180,0)));
					break;
				case "6":
				//	Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);
					Instantiate(red_enemy as GameObject,  Vector3(xPosition*2,(yPosition*2)-8.15,0.4947718), Quaternion.Euler(Vector3(0,180,0)));
					break;
				case "7":
				//	Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);
					Instantiate(vertical_enemy as GameObject,  Vector3(xPosition*2,(yPosition*2)-8.3,0.4947718), Quaternion.Euler(Vector3(0,180,0)));
					break;
				case "8":
				//	Debug.Log("pongo un"+position+"en x:"+xPosition+" y:"+yPosition);
					normal_enemy.GetComponent.<Renderer>().material=enemy180;
					Instantiate(normal_enemy as GameObject,  Vector3(xPosition*2,(yPosition*2)-8,0.4947718), Quaternion.Euler(Vector3(0,180,0)));
					break;

			}
			
		yPosition++;
		//Debug.Log("Posicion x despues:"+xPosition+"posicion y:"+yPosition+"es un :");
		if(yPosition==tamX){
			xPosition++;
			yPosition=0;
		}
		
	
	}

}