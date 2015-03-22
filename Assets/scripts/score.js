#pragma strict
var bille : GameObject;
bille = GameObject.Find("bille");
var scoreP1 : float;
var scoreP2 : float;
var stringScoreP1 : String;
var stringScoreP2 : String;
scoreP1 = 0;
scoreP2 = 0;
var isWorking = 0;
function Start () {

}

function Update () {
	if (bille.transform.position.x < -9 && !isWorking){
		isWorking = 1;
		addPoint(2);
	} else if (bille.transform.position.x > 9 && !isWorking){
		isWorking = 1;
		addPoint(1);
	} 
}

function addPoint(player){
	if (player == 1){
		scoreP1 ++;
		stringScoreP1 = scoreP1.ToString();
		GameObject.Find("scoreP1").GetComponent(updateScore).changeScore(stringScoreP1);
		yield bille.GetComponent(ballSpeed).restartGame(player);
	} else if (player == 2){
		scoreP2 ++;
		var stringScoreP2 = scoreP2.ToString();
		GameObject.Find("scoreP2").GetComponent(updateScore).changeScore(stringScoreP2);
		yield bille.GetComponent(ballSpeed).restartGame(player);
	} 
	isWorking = 0;
}

