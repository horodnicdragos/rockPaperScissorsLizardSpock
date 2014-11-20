$( document ).ready( function(){
var playerScore = 0;
var computerScore = 0;
var round = 0;
var playerRoundScore=0;
var computerRoundScore=0;
var flagSet;
var computerChoice;

function gameSet(){
	
}
//events
function actualizare(choice) {
	var who = arbitraj(choice);
	round++;
	document.getElementById("round").innerText = 'Round: ' + round + "/3";
	if (who === 'tie')
		{
			document.getElementById("prompt").innerText = 'Draw this round';
			$('.history').prepend('<li>Player chose ' + choice +', computer chose ' + computerChoice + ' and it was a draw.</li>');
		}
	else if (who === 'win')
	{
		document.getElementById("prompt").innerText = 'You win this round!';
		$('.history').prepend('<li>Player chose ' + choice +', computer chose ' + computerChoice + ' and player won!</li>');
		playerRoundScore++;
	}
	else if (who === 'loose')
	{
		document.getElementById("prompt").innerText = 'You lose this round!';
		$('.history').prepend('<li>Player chose ' + choice +', computer chose ' + computerChoice + ' and player lost!</li>');
		computerRoundScore++;
	}
//	alert(playerRoundScore + " " + computerRoundScore + " " + round + " " + playerScore + " " +computerScore);
	if (round === 3){
		//reset scores
		if (playerRoundScore>computerRoundScore){
			playerScore++;
			document.getElementById("playerScore").innerText = 'Player score:' + playerScore;
		}
		else if(playerRoundScore<computerRoundScore){
			computerScore++;
			document.getElementById("computerScore").innerText = 'Computer score:' + computerScore;
		}
		playerRoundScore = 0;
		computerRoundScore = 0;
		round = 0;
	}
}

function arbitraj(choice) {
	var list = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
	computerChoice = list[Math.floor(Math.random()*list.length)];


		document.getElementById("computerChoice").innerHTML = "<img src='assets/" + computerChoice + ".png' id='paper'></img>";
	
	//Remize
	if (choice===computerChoice)
	{	
		return 'tie';
	}
	//Calculatorul castiga
	if (choice === 'paper' && computerChoice === 'scissors')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'rock' && computerChoice === 'paper')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'lizard' && computerChoice === 'rock')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'spock' && computerChoice === 'lizard')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'scissors' && computerChoice === 'spock')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'paper' && computerChoice === 'lizard')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'rock' && computerChoice === 'spock')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'lizard' && computerChoice === 'scissors')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'spock' && computerChoice === 'paper')
		{
			//computerScore++;
			return 'loose'
		}
	if (choice === 'scissors' && computerChoice === 'rock')
		{
			//computerScore++;
			return 'loose'
		}
	//Player-ul castiga
	if (choice === 'paper' && computerChoice === 'rock')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'rock' && computerChoice === 'lizard')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'lizard' && computerChoice === 'spock')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'spock' && computerChoice === 'scissors')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'scissors' && computerChoice === 'paper')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'paper' && computerChoice === 'spock')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'rock' && computerChoice === 'scissors')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'lizard' && computerChoice === 'paper')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'spock' && computerChoice === 'rock')
	{
	//	playerScore++;
		return 'win';
	}
	if (choice === 'scissors' && computerChoice === 'lizard')
	{
	//	playerScore++;
		return 'win';
	}
}

$('#scissors').click(function(){actualizare('scissors')});
$('#paper').click(function(){actualizare('paper')});
$('#rock').click(function(){actualizare('rock')});
$('#lizard').click(function(){actualizare('lizard')});
$('#spock').click(function(){actualizare('spock')});
$('#test').click(function(){actualizare('spock')});

$('#hideshow').click(function(){        
     $('.history').toggle();
});
});