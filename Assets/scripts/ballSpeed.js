#pragma strict
var plateau1 = GameObject.Find("plateau1");
var plateau2 = GameObject.Find("plateau2");
var defaultSpeed = new float();
defaultSpeed = 0.1;
var moveSpeed = new float();
moveSpeed = defaultSpeed;
Debug.Log(defaultSpeed);
function Start () {
	
}

function Update () {
	transform.position += new Vector2(moveSpeed, 0);
}

function OnCollisionEnter(col : Collision){
	if(col.collider.name == "plateau1")
    {
		moveSpeed = defaultSpeed;
    } else if(col.collider.name == "plateau2"){
    	moveSpeed = -defaultSpeed;
    }
}   
