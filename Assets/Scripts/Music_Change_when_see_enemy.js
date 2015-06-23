#pragma strict
private var enemy : GameObject;
private var player : GameObject;
private var close_to_enemy : boolean;
close_to_enemy = false;
var normal_song : AudioClip;
var enemy_song : AudioClip;


function Update () {
enemy = GameObject.FindWithTag("Enemy");
player = GameObject.FindWithTag("Player");

	if(enemy.transform.position.x < player.transform.position.x +10 && enemy.transform.position.x > player.transform.position.x - 10){
		if(!GetComponent.<AudioSource>().isPlaying || close_to_enemy==false){
			GetComponent.<AudioSource>().clip=enemy_song;
			GetComponent.<AudioSource>().Play();
			close_to_enemy=true;		
		}
		
	}
	else{
		
		if(!GetComponent.<AudioSource>().isPlaying || close_to_enemy==true){
			GetComponent.<AudioSource>().clip=normal_song;
			GetComponent.<AudioSource>().Play();
			close_to_enemy=false;		
		}		
		
	}
}