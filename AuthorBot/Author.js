'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('T_token')
var shuffle = require('shuffle-array');
var fs = require('fs');

//Params
var logs_chat = 'chat_id'
var promo_message = 'Привет, требуется сдать все отчеты за неделю до сессии, а времени совсем нет?\nНужен курсач/реферат за короткий срок?\nБиржа Author24 даёт тебе эту возможность!'
var promo_url = 'https://author24.ru/unreg-order/?ref=3762e3527fd44a17'

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

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    StartHandler($) {
        
        var fulluser = LogsTT1($)+LogsTT2($)+LogsTT3($)
        var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
        var users = fs.readFileSync('promo_users.txt', 'utf8').split(',');
        var RandomSticker = shuffle.pick(['BQADAgADCwEAApmPpQeoVjIT49zRLQI','BQADAgADDQEAApmPpQcb5l6j7C-vagI','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADtgADmY-lBwlqL7J-la83Ag','BQADAgADuAADmY-lB98Xhw-VyBIhAg','BQADAgADugADmY-lB_icnJp3gSryAg','BQADBAADxAIAAlI5kwb3--ZKcXwstwI','BQADBAADlQMAAlI5kwYtJ5kGpCh4OQI','BQADBAADlwMAAlI5kwb6YcayGzkN6AI','BQADBAADnAMAAlI5kwbNjr6RE1tQgAI']);
        
        if (find(users, $._message.from._id) == 0){
            var NewUserInfo = 'New user:\n'+fulluser
            tg.api.sendMessage(logs_chat, NewUserInfo)
            fuckingzap($,'Promo_users.txt')
        }
        let promise = new Promise((resolve, reject) => {
            $.runInlineMenu({
                layout: 1,
                method: 'sendMessage',
                params: [promo_message],
                menu: [
                    {
                        text: 'Author24.ru',
                        url: promo_url
                    }
                ]
            })
            $.sendMessage('При регистрации по моей рефералке - плюсик в карму и человеческое спасибо ❤️')
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
            'StartController': 'StartHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('/start', 'StartController'),
        new PingController()
    )