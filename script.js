function checkAnswers()
	{
	var answer1 = document.getElementById('puzzle1').value;
	var goodAnswer = 0;
		if(answer1.toLowerCase() == 'лук')
			goodAnswer++;
	var answer2 = document.getElementById('puzzle2').value;
		if(answer2.toLowerCase() == 'пердёж')
			goodAnswer++;
		if(goodAnswer == 0)
			alert('Правильных ответов нет. Моя бабушка и то это знает! ');
		else
			alert('Количество правильных ответов: ' + goodAnswer);
	}

function startUgadayka()
{
    var answer = parseInt((Math.random() * 10)+1);
    alert("Игра угадайка. Я загадал число от 1 до 10. Попробуй угадать с трёх раз!");

    var countMoves = 2;

    for(var count = 0; count <= 2; count++)
    {
        var userAnswer = parseInt(prompt("Ввести число от 1 до 10:"));
        if(userAnswer >= 1 && userAnswer <= 10)
        {
            if(answer == userAnswer)
            {
                alert("Вы угадали. Поздравляю!!!");
                break;
            }
            else if (answer != userAnswer && countMoves > 0)
            {
                alert("Вы не угадали. У вас осталось " + countMoves + " попытки(а)");
                countMoves--;
            }
            else
            {
                alert("К сожалению ваши попытки закончились. Вы проиграли.");
                alert("Конец игры.");
            }
        }
    }
}

function startMulty()
{
    var answer = parseInt((Math.random() * 100) + 1) ;

    for(var count = 0; count < 101; count++)
    {
        var userAnswerOne = prompt("Ходит игрок 1. Ввести число от 1 до 100.");
        if(userAnswerOne >= 1 && userAnswerOne <= 100)
        {
            if(answer == userAnswerOne)
            {
                alert("Вы угадали первым. Поздравдяю с победой!!!");
                break;
            }
            else if(answer > userAnswerOne)
            {
                alert("Не угадал. Твоё число слишком маленькое!");
            }
            else
            {
                alert("Не угадал. Твоё число слишком большое!");
            }
        }
        else if(userAnswerOne == "q" || userAnswerOne == "Q" || userAnswerOne == "Й" || userAnswerOne == "й")
        {
            alert("Выход из игры");
            break;
        }
        else
        {
            alert("Ну я же просил, число от 1 до 100");
        }

        var userAnswerOne = prompt("Ходит игрок 2. Ввести число от 1 до 100.");
        if(userAnswerOne >= 1 && userAnswerOne <= 100)
        {
            if(answer == userAnswerOne)
            {
                alert("Вы угадали первым. Поздравдяю с победой!!!");
                break;
            }
            else if(answer > userAnswerOne)
            {
                alert("Не угадал. Твоё число слишком маленькое!");
            }
            else
            {
                alert("Не угадал. Твоё число слишком большое!");
            }
        }
        else if(userAnswerOne == "q" || userAnswerOne == "Q" || userAnswerOne == "Й" || userAnswerOne == "й")
        {
            alert("Выход из игры");
            break;
        }
        else
        {
            alert("Ну я же просил, число от 1 до 100");
        }
    }

}