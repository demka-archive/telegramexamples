// UBER PROMO BOTS
'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('token')
var shuffle = require('shuffle-array');
var fs = require('fs');
function LogsTT1($){
    if ($._message.from._firstName == undefined){
        return '- '
    }
    else{
        return $._message.from._firstName+' '
    }
};
function LogsTT2($){
    if ($._message.from._lastName == undefined){
        return '- '
    }
    else{
        return $._message.from._lastName+' '
    }
};
function LogsTT3($){
if ($._message.from._username == undefined){
return '(@-) ['+$._message.from._id+']'
}
else {
return '(@'+ $._message.from._username+') ['+$._message.from._id+']'
}
};
function fuckingzap($,way){
var testing = fs.readFileSync(way, 'utf8').charAt(0)
if (testing === ''){
fs.appendFile(way, $._message.from._id, function (err) {
    if (err) throw err;
});
}
else{
fs.appendFile(way, ','+$._message.from._id, function (err) {
    if (err) throw err;
});    
    }
};
function find(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return 1;
  }
  return 0;
};
var logs_chat = 'chat id for logs'
var promo = '<strong>YOUR UBER PROMO</strong>'
var main_message = 'Hey, you can get a free uber ride\nJust use the following code:\n'+promo
class StartController extends TelegramBaseController {
    StartHandler($) {
        var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
        var users = fs.readFileSync('UBER_users.txt', 'utf8').split(',');
        var RandomSticker = shuffle.pick(['BQADAgADCwEAApmPpQeoVjIT49zRLQI','BQADAgADDQEAApmPpQcb5l6j7C-vagI','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADtgADmY-lBwlqL7J-la83Ag','BQADAgADuAADmY-lB98Xhw-VyBIhAg','BQADAgADugADmY-lB_icnJp3gSryAg','BQADBAADxAIAAlI5kwb3--ZKcXwstwI','BQADBAADlQMAAlI5kwYtJ5kGpCh4OQI','BQADBAADlwMAAlI5kwb6YcayGzkN6AI','BQADBAADnAMAAlI5kwbNjr6RE1tQgAI']);
        if (find(users, $._message.from._id) == 0){
            var NewUserInfo = 'New user:\n'+LogsTT1($)+LogsTT2($)+LogsTT3($)
            tg.api.sendMessage(logs_chat, NewUserInfo)
            fuckingzap($,'UBER_users.txt')
        }
        let promise = new Promise((resolve, reject) => {
                $.sendMessage(main_message,{parse_mode: 'HTML'})
                resolve('result');
            });
        promise
            .then(
            result => {
                setTimeout(function() {
            $.sendSticker(RandomSticker);
            }, 100);
            },
            error => {}
            );
    }
    get routes() {
        return {
            '/start': 'StartHandler'
        }
    }
}

tg.router
    .when(['/start'], new StartController())