#pragma strict

function Start () {
	
}

function Update () {

}

function changeScore(newScore){
	GetComponent(UI.Text).text = newScore;
}