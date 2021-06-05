// challenge 1
function ageindays() {
    var birthyear = prompt("how many years old you are ?");
    var ageinday = birthyear * 365;

    document.getElementById('age').innerHTML = "Your age in days is =  " + ageinday;
}

function reset() {
    document.getElementById('age').innerHTML = "Calculate your age in days by click me"

}

function gen() {
    var image = document.createElement('img');
    var div = document.getElementById('f-gen');
    image.src = "./cat.jpg";
    div.appendChild(image);
}






// rock paper scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;


    botChoice = numberToChoice(randToRpsInt());
    console.log('computerChoice', botChoice);



    result = decideWinner(humanChoice, botChoice);
    console.log(result);

    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost !!', 'color': 'red' };

    } else if (yourScore === 0.5) {
        return { 'message': 'This is  tied !!', 'color': 'yellow' };

    } else {
        return { 'message': "You won !!", 'color': 'green' };
    }
}



function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {

    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imageDatabase[humanImageChoice] + "' height=150 width = 150 style='box-shadow:0px 10px 50px rgba(37,50,223,1)'>";

    botDiv.innerHTML = "<img src=' " + imageDatabase[botImageChoice] + "' height=150 width = 150 style='box-shadow:0px 10px 50px rgba(243,38,223,1)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px;'> " + finalMessage['message'] + "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}







/************************ */
// change the color of all the buttons


var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons)

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonRed();
    } else if (buttonThing.value === 'green') {
        buttonGreen();
    } else if (buttonThing.value === 'random') {
        buttonRandom();
    } else if (buttonThing.value === 'reset') {
        buttonReset();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger');
    }
}



function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i = 0; i < all_buttons.length; i++) {

        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);

    }
}