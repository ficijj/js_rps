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
    let resultsText = document.getElementById('results-text');
    let wins = sessionStorage.getItem("winCount");
    let ties = sessionStorage.getItem("tieCount");
    let losses = sessionStorage.getItem("lossCount");
    if (wins == null) {
      wins = 0;
    } else {
      wins = wins;
    };
    if (ties == null) {
      ties = 0;
    } else {
      ties = ties;
    };
    if (losses == null) {
      losses = 0;
    } else {
      losses = losses;
    };
    
    switch(true) {
        default:
            console.log('NOT SELECTED');
            break;
        case (userSelected === compSelected):  // Both picked the same
            console.log('Tie!');
            ++ties;
            resultsText.innerText = 'Tie!';
            break;
        case (userSelected === 0 && compSelected === 1):  // User picked rock, computer picked paper
            console.log('Loss!');
            ++losses;
            resultsText.innerText = 'Paper beats rock. You lose.';
            break;
        case (userSelected === 0 && compSelected === 2):  // User picked rock, computer picked scissors
            console.log('Win!');
            ++wins;
            resultsText.innerText = 'Rock beats scissors. You win!';
            break;
        case (userSelected === 1 && compSelected === 0):  // User picked paper, computer picked rock
            console.log('Win!');
            ++wins;
            resultsText.innerText = 'Paper beats rock. You win!';
            break;
        case (userSelected === 1 && compSelected === 2):  // User picked paper, computer picked scissors
            console.log('Loss!');
            ++losses;
            resultsText.innerText = 'Scissors beats paper. You lose.';
            break;
        case (userSelected === 2 && compSelected === 0):  // User picked scissors, computer picked rock
            console.log('Loss!');
            ++losses;
            resultsText.innerText = 'Rock beats scissors. You lose.';
            break;
        case (userSelected === 2 && compSelected === 1):  // User picked scissors, computer picked paper
            console.log('Win!');
            ++wins;
            resultsText.innerText = 'Scissors beats paper. You win!';
            break;
    }

    sessionStorage.setItem("winCount", wins);
    sessionStorage.setItem("tieCount", ties);
    sessionStorage.setItem("lossCount", losses);
    document.getElementById('win-num').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('tie-num').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('loss-num').innerHTML = sessionStorage.getItem("lossCount");
}

function reset() {
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("tieCount", 0);
    sessionStorage.setItem("lossCount", 0);
    document.getElementById('win-num').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('tie-num').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('loss-num').innerHTML = sessionStorage.getItem("lossCount");
}

function toggleTheme() {
    document.getElementById('dark-mode').classList.toggle('hide');
    document.getElementById('light-mode').classList.toggle('hide');

    document.getElementById('body').classList.toggle('body-dark');
    document.getElementById('body').classList.toggle('body-light');

    document.getElementById('play-button').classList.toggle('button-dark');
    document.getElementById('reset').classList.toggle('button-dark');
    document.getElementById('play-button').classList.toggle('button-light');
    document.getElementById('reset').classList.toggle('button-light');

    document.getElementById('user-choice').classList.toggle('box-dark');
    document.getElementById('computer-choice').classList.toggle('box-dark');
    document.getElementById('results').classList.toggle('box-dark');
    document.getElementById('user-choice').classList.toggle('box-light');
    document.getElementById('computer-choice').classList.toggle('box-light');
    document.getElementById('results').classList.toggle('box-light');
}