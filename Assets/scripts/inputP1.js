#pragma strict

var defaultSpeed = new float();
defaultSpeed = 0.1;
var maxHeight=4;
var minHeight=-4;
var keyUp = "up";
var keyDown = "down";
function Start () {

}

function Update () {
	onKeyDown();
}	

function onKeyDown(){
	if (Input.GetKey(keyUp)){
		if (transform.position.y < 4){
			transform.position += new Vector2(0f, defaultSpeed);
		}
	} else if (Input.GetKey(keyDown)){
		if (transform.position.y > -4){
			transform.position -= new Vector2(0f, defaultSpeed);
		}
	}
}