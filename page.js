let userChoices = [document.getElementById('rock'), document.getElementById('paper'), document.getElementById('scissors')]
let userSelected = -1;
let compChoices = [document.getElementById('comp-rock'), document.getElementById('comp-paper'), document.getElementById('comp-scissors')]
let compSelected = -1;

function select(picked) {
    for(let i = 0; i < userChoices.length; i++) {
        if(picked === userChoices[i]) {
            userChoices[i].classList.add('select');
            userSelected = i;
        } else {
            userChoices[i].classList.remove('select');
        }
    }
}

function compPick() {
    document.getElementById('question').classList.add('hide');
    compChoices[0].classList.remove('hide');
    let rand = Math.ceil(Math.random() * 2000 + 3000);
    console.log(rand);
    let i = 0;
    var tid = setInterval(function() {
        compChoices[i % 3].classList.add('hide');
        compChoices[(i + 1) % 3].classList.remove('hide');
        i++;
    }, 125);
    setTimeout(function() {
        clearInterval(tid);
        compSelected = i % 3;
        determineWinLoss();
    }, rand);
}

function determineWinLoss() {
    switch(true) {
        default:
            console.log('NOT SELECTED');
            break;
        case (userSelected === compSelected):  // Both picked the same
            console.log('Tie!');
            break;
        case (userSelected === 0 && compSelected === 1):  // User picked rock, computer picked paper
            console.log('Loss!');
            break;
        case (userSelected === 0 && compSelected === 2):  // User picked rock, computer picked scissors
            console.log('Win!');
            break;
        case (userSelected === 1 && compSelected === 0):  // User picked paper, computer picked rock
            console.log('Win!');
            break;
        case (userSelected === 1 && compSelected === 2):  // User picked paper, computer picked scissors
            console.log('Loss!');
            break;
        case (userSelected === 2 && compSelected === 0):  // User picked scissors, computer picked rock
            console.log('Loss!');
            break;
        case (userSelected === 2 && compSelected === 1):  // User picked scissors, computer picked paper
            console.log('win!');
            break;
    }
}