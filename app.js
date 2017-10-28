var playerChoice = 0
var computerChoice = 0 
var outCome = 0
var rock
var scissors
var paper

function preload(){
	rock = loadImage("images/rock.jpg")
	scissors = loadImage("images/scissors.jpg")
	paper = loadImage("images/paper.jpg")
}
function setup(){
	
	createCanvas(800,800)
	computerChoice = Math.floor((Math.random() * 3) + 1)

}

function draw(){
	background(255,255,255)
	textSize(15)
	image(rock, 150, 100)
	rect(100,200,150,50)
	text("rock",150,230)

	image(paper, 400, 100)
	rect(350,200,150,50)
	text("paper",400,230)

	image(scissors, 650, 100)
	rect(600,200,150,50)
	text("scissors",650,230)

	rect(350,400,150,50)
	text("reset",400,430)

	if(outCome == 1){
		textSize(50)
		text("You lose!",300,300)
	}
	if(outCome == 2){
		textSize(50)
		text("Draw!",300,300)
	}
	if(outCome == 3 ){
		textSize(50)
		text("You win!",300,300)
	}

}

function mousePressed(){
	if(playerChoice == 2 && computerChoice == 3 || playerChoice == 1 && computerChoice == 2 || playerChoice == 3 && computerChoice == 1){
		console.log("lost")
		outCome = 1
	} 
	if(playerChoice == computerChoice){
		console.log("draw")
		outCome = 2
		
	} 
	if(playerChoice == 3 && computerChoice == 2 || playerChoice == 2 && computerChoice == 1 || playerChoice == 1 && computerChoice == 3){
		console.log("won")
		outCome = 3
	}

	if(mouseX>=100 && mouseX<=250 && mouseY>=200 && mouseY<=250){
		playerChoice = 1
	}
	if(mouseX>=350 && mouseX<=500 && mouseY>=200 && mouseY<=250){
		playerChoice = 2
	}
	if(mouseX>=600 && mouseX<=750 && mouseY>=200 && mouseY<=250){
		playerChoice = 3
	}
	if(mouseX>=350 && mouseX<=500 && mouseY>=400 && mouseY<=450){
		outCome = 0
	}

}