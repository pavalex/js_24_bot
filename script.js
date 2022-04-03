"use strict";

let isStart = confirm('Поиграем?');

const getStart = function (value) {
    const number = 55;

    const isNumber = function(num) {
        if (num !== null && num.length > num.trim().length) {
            return false;
        }
        
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    const getGuess = function (num) {    
        let answer = prompt('Угадай число от 1 до 100');

        if (answer === null) {
            alert('Игра окончена');            
        } else {
            while (!isNumber(answer)) {
                alert("Введи число!");
                answer = prompt('Угадай число от 1 до 100');
            }
            
            if (answer > num) {
                alert('Загаданное число меньше');
                getGuess(number);
            } else if (answer < num) {
                alert('Загаданное число больше');
                getGuess(number);
            } else {
                alert('Поздравляю, Вы угадали!!!');
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