#pragma strict
var plateau2 : GameObject;
var plateau1 : GameObject;
plateau1 = GameObject.Find("plateau1");
plateau2 = GameObject.Find("plateau2");
var y : float;
var speed : float;
var defaultSpeed : float;
defaultSpeed = 10;
speed = defaultSpeed;
var directionx : float;
directionx = 1;
var dir : Vector2;
dir = new Vector2(directionx,0);
function Start () {
	rigidbody.velocity = dir * speed;
}

function Update () {
}

function OnCollisionEnter(col : Collision){
	if(col.collider.name == "plateau1")
    {
		directionx = 1;
		speed += 0.2;
		y = hitFactor(transform.position.y, plateau1.transform.position.y, plateau1.collider.bounds.size.y);
		dir = new Vector2(directionx, y).normalized;
    	rigidbody.velocity = dir * speed;
    } else if(col.collider.name == "plateau2"){
    	directionx = -1;
    	speed += 0.2;
    	y = hitFactor(transform.position.y, plateau2.transform.position.y, plateau2.collider.bounds.size.y);
    	dir = new Vector2(directionx, y).normalized;
    	rigidbody.velocity = dir * speed;
    } else if(col.collider.name == "bottomBorder" || col.collider.name == "topBorder"){
    	dir = new Vector2(directionx, -y).normalized;
    	rigidbody.velocity = dir * speed;
    } 
}   

function hitFactor(ballPos : float,racketPos : float,racketHeight : float){
	return (ballPos - racketPos)/racketHeight;
}
function restartGame(player){
	yield WaitForSeconds (1);
	speed = defaultSpeed;
	if (player == 1){
		transform.position = new Vector2(plateau2.transform.position.x - 1, plateau2.transform.position.y);
		directionx = -1;
		rigidbody.velocity = new Vector2(directionx, 0).normalized * speed;
	} else if (player == 2) {
		transform.position = new Vector2(plateau1.transform.position.x + 1, plateau1.transform.position.y);
		directionx = 1;
		rigidbody.velocity = new Vector2(directionx, 0).normalized * speed;
	}
}

