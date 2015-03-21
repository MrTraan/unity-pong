#pragma strict
var plateau1 = GameObject.Find("plateau1");
var plateau2 = GameObject.Find("plateau2");
var directionx = new float();
directionx = 1;

function Start () {
	
}

function Update () {
	rigidbody.velocity = new Vector2(directionx, 0);
}

function OnCollisionEnter(col : Collision){
	if(col.collider.name == "plateau1")
    {
		directionx = 1;
    } else if(col.collider.name == "plateau2"){
    	directionx = -1;
    }
}   
