function select(picked) {
    if(picked === 'r') {
        document.getElementById('rock').classList.add('select');
        document.getElementById('paper').classList.remove('select');
        document.getElementById('scissors').classList.remove('select');
    } else if(picked === 'p') {
        document.getElementById('rock').classList.remove('select');
        document.getElementById('paper').classList.add('select');
        document.getElementById('scissors').classList.remove('select');
    } else if(picked === 's') {
        document.getElementById('rock').classList.remove('select');
        document.getElementById('paper').classList.remove('select');
        document.getElementById('scissors').classList.add('select');
    }
}