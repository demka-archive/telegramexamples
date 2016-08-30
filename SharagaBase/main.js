'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('token')
var xlsx = require('node-xlsx');
var obj = xlsx.parse('KGBASE.xlsx');
var arr = obj[0].data

class StartController extends TelegramBaseController {

    StartHandler($) {
        $.sendMessage('Hello, Demka :3')
    }

    get routes() {
        return {
            '/start': 'StartHandler'
        }
    }
}
class OtherwiseController extends TelegramBaseController {
    handle($) {
        var y = 1
        var data = ''
        var sort_obj = {}
        var check = $._message._text
        arr.forEach(function(item, i, arr) {
            var name = arr[i][1].split(' ')
            sort_obj[arr[i][1]] = arr[i][1]+' '+ arr[i][2]
            for (var z = 0; z < name.length; z++) {
                if (name[z] == check){
                        data += y+' '+sort_obj[name.join(' ')]+'\n\n'
                        y = y + 1
                }
            }
        })
        if (data !== ''){
             $.sendMessage(data)
        } 
        else{
            $.sendMessage('Ничего не найдено :c')
        }
    }
}

tg.router
    .when(['/start'], new StartController())
    .otherwise(new OtherwiseController())