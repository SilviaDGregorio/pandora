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
		if(!audio.isPlaying || close_to_enemy==false){
			audio.clip=enemy_song;
			audio.Play();
			close_to_enemy=true;		
		}
		
	}
	else{
		
		if(!audio.isPlaying || close_to_enemy==true){
			audio.clip=normal_song;
			audio.Play();
			close_to_enemy=false;		
		}		
		
	}
}