#pragma strict

var defaultSpeed = new float();
defaultSpeed = 0.1;
var maxHeight=4;
var minHeight=-4;
function Start () {

}

function Update () {
	onKeyDown();
}	

function onKeyDown(){
	if (Input.GetKey("z")){
		if (transform.position.y < 4){
			transform.position += new Vector2(0f, defaultSpeed);
		}
	} else if (Input.GetKey("s")){
		if (transform.position.y > -4){
			transform.position -= new Vector2(0f, defaultSpeed);
		}
	}
}