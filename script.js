function calculate() {
    let name = document.getElementById('name').value;
    let victories = parseInt(document.getElementById('victory').value);
    let defeats = parseInt(document.getElementById('defeat').value);

    let winningBalance = victories - defeats;
    let level = '';

    if (victories < 10) {
        level = 'Ferro';
    } else if (victories >= 11 && victories <= 20) {
        level = 'Bronze';
    } else if (victories >= 21 && victories <= 50) {
        level = 'Prata';
    } else if (victories >= 51 && victories <= 80) {
        level = 'Ouro';
    } else if (victories >= 81 && victories <= 90) {
        level = 'Diamante';
    } else if (victories >= 91 && victories <= 100) {
        level = 'Lendário';
    } else {
        level = 'Imortal';
    }

    let message = `O Herói ${name} tem um saldo de ${winningBalance} está no nível de ${level}`;

    document.querySelector('.rankText').innerText = message;
    document.getElementById('name').value = ""
    document.getElementById('victory').value = ""
    document.getElementById('defeat').value = ""
}
