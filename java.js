function myFunc() {
    const userName = document.getElementById("name").value;
    userName ? document.getElementById("return1").innerHTML = "Hello " + userName.toUpperCase() : document.getElementById('return1').innerHTML = 'Hello';
    const question = document.getElementById('name2').value;
    question ? document.getElementById("return2").innerHTML = "The computer will predict your answer"
        :
        document.getElementById("return2").innerHTML = 'This area is required to be filled!';
    let randomNumber = Math.floor(Math.random() * 8);
    question ? randomNumber = Math.floor(Math.random() * 8) : randomNumber = '';
    switch (randomNumber) {
        case (randomNumber = 0):
            document.getElementById('result').innerHTML = 'It is certain';
            break;
        case (randomNumber = 1):
            document.getElementById('result').innerHTML = 'It is decidedly so';
            break;
        case (randomNumber = 2):
            document.getElementById('result').innerHTML = 'Reply hazy try again';
            break;
        case (randomNumber = 3):
            document.getElementById('result').innerHTML = 'Signs point to yes';
            break;
        case (randomNumber = 4):
            document.getElementById('result').innerHTML = 'Do not count on it';
            break;
        case (randomNumber = 5):
            document.getElementById('result').innerHTML = 'My sources say no';
            break;
        case (randomNumber = 6):
            document.getElementById('result').innerHTML = 'Outlook not so good';
            break;
        case (randomNumber = 7):
            document.getElementById('result').innerHTML = 'Cannot predict now';
            break;
        default:
            document.getElementById('result').innerHTML = '';
            break;
    }
}
