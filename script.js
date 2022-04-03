"use strict";

let isStart = confirm('Поиграем?');

const getStart = function (value) {
    let number = Math.floor(1 + Math.random() * (100 + 1 - 1));
    let attempt = 10;

    const isNumber = function(num) {
        if (num !== null && num.length > num.trim().length) {
            return false;
        }
        
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    const getGuess = function (num) {    
        let answer = prompt('Угадай число от 1 до 100');

        const getAttempt = function () {
            attempt--; 
            if (attempt === 0) {
                getStart(confirm('Попытки закончились, хотите сыграть еще?'));
            } else {
                getGuess(number);
            } 
        };

        if (answer === null) {
            alert('Игра окончена');            
        } else {
            while (!isNumber(answer)) {
                alert("Введи число!");
                answer = prompt('Угадай число от 1 до 100');
            }
            
            if (answer > num) {
                alert('Загаданное число меньше');
                getAttempt();     
            } else if (answer < num) {
                alert('Загаданное число больше');
                getAttempt();
            } else {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                    getStart(true);
                } else {
                    alert('Игра окончена');
                }
            }
        }        
    };    

    if (value) {
        getGuess(number);
    } else {
        alert('Игра окончена');
    }
};

getStart(isStart);

