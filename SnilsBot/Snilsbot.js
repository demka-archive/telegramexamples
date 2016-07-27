// https://telegram.me/SnilsBot
'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('token')
var sum = 0
function getsnils(number){
	function format(number){
		if (number <= 9){
			return '0'+number
		}
		else{
			return number
		}
	}
	if (number < 100){
		return number
	}
	else if ((sum == 100) || (sum == 101)){
		return '00'
	}
	else{
		var ready = (sum % 101)
		if (ready < 100){
			return format(ready)
		}
		else{
			getsnils(ready) //yo, recursion
		}
	}
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class StartController extends TelegramBaseController {

    StartHandler($) {
        $.sendMessage('Hey, I can help you to generate your fake <strong>SNILS</strong> number\n/get to begin',{parse_mode: 'HTML'})
    }
    get routes() {
        return {
            '/start': 'StartHandler'
        }
    }
}
class GetController extends TelegramBaseController {

    GetHandler($){
        sum = 0
        var mas = ['', '', '', '', '', '', '', '', ''];
        mas.forEach(function(item, i, arr) {
            mas[i]=getRandomInRange(0,9)
        });
        var string = mas.join('')
        var reversed = mas.reverse()
        reversed.forEach(function(item, i, arr) {
            sum += reversed[i]*(i+1)
        });
        var result = string.slice(0, 3) + '-' + string.slice(3, 6) + '-' + string.slice(6, 9) +' '+ getsnils(sum)
        $.sendMessage('Your SNILS number is:\n<strong>'+result+'</strong>',{parse_mode: 'HTML'})
    }

    get routes() {
        return {
            '/get': 'GetHandler'
        }
    }
}

tg.router
    .when(['/start'], new StartController())
    .when(['/get'], new GetController())