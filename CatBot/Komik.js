//Специально для котика 
'use strict'
var AllCats = 0
var tg = require('telegram-node-bot')('token')
var fs = require('fs');
var kotiks = JSON.parse((fs.readFileSync('cat.txt', 'utf8')));
var shuffle = require('shuffle-array');
function Russian(diffDays, titles) {
    var cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (diffDays%100>4 && diffDays%100<20)? 2 : cases[(diffDays%10<5)?diffDays%10:5] ];  
}
function LogsTT1($){
    if ($.user.first_name == undefined){
        return '- '
    }
    else{
        return $.user.first_name+' '
    }
};       
function LogsTT2($){
    if ($.user.last_name == undefined){
        return '- '
    }
    else{
        return $.user.last_name+' '
    }
};
function LogsTT3($){
if ($.user.username == undefined){
return '(@-) ['+$.user.id+']'
}
else {
return '(@'+ $.user.username+') ['+$.user.id+']'
}
};
function forrate1($){
    if ($.user.first_name == undefined){
        return ''
    }
    else{
        return $.user.first_name
    }
};     
function forrate2($){
    if ($.user.last_name == undefined){
        return ''
    }
    else{
        return ' '+$.user.last_name
    }    
};
tg.router.
    when(['/start'], 'StartController').
    when(['/mur','Мур','МУР','мур'], 'CountController').
    when(['/rating'], 'StatController')
tg.controller('StartController', ($) => {
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('/start', () => {
    var Anya_Kotik = shuffle.pick(['BQADAgADCwEAApmPpQeoVjIT49zRLQI','BQADAgADDQEAApmPpQcb5l6j7C-vagI','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADlQADmY-lB8uH_ynS24rzAg','BQADAgADtgADmY-lBwlqL7J-la83Ag','BQADAgADuAADmY-lB98Xhw-VyBIhAg','BQADAgADugADmY-lB_icnJp3gSryAg','BQADBAADxAIAAlI5kwb3--ZKcXwstwI','BQADBAADlQMAAlI5kwYtJ5kGpCh4OQI','BQADBAADlwMAAlI5kwb6YcayGzkN6AI','BQADBAADnAMAAlI5kwbNjr6RE1tQgAI']);
        if (kotiks[forrate1($)+forrate2($)] === undefined){
            kotiks[forrate1($)+forrate2($)] = 0
        }
        let promise = new Promise((resolve, reject) => {
                $.sendSticker(Anya_Kotik)
                resolve('result');
            });
        promise
            .then(
            result => {
                setTimeout(function() {
            console.log(time_log+ '/start от ' + LogsTT1($)+LogsTT2($)+LogsTT3($));
            $.sendMessage('Привет, я буду считать количество мурчаний 🐱\nДля начала отправь \'Мур\'')
            }, 100);
            },
            error => {}
            );
    })
})
tg.controller('CountController', ($) => {
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('Мур', () => {
        if (kotiks[forrate1($)+forrate2($)] !== undefined){
            kotiks[forrate1($)+forrate2($)] = kotiks[forrate1($)+forrate2($)]+1
            $.sendMessage('Вы уже муркнули '+kotiks[forrate1($)+forrate2($)]+' '+Russian(kotiks[forrate1($)+forrate2($)], ['раз', 'раза', 'раз'])+'\nЭто большой успех!')
            if (kotiks[forrate1($)+forrate2($)] == '666'){
                setTimeout(function() {
                $.sendMessage('А ты знаешь, зачем я был создан?')   
                }, 1000)
                setTimeout(function() {
                $.sendMessage('Нет?..')    
                }, 3000)
                setTimeout(function() {
                $.sendMessage('Во славу сатане конечно ( ͡° ͜ʖ ͡°)')
                $.sendPhoto(fs.createReadStream('666.jpg'))
                }, 7000)
                
            }
        }
        else{
            $.routeTo('/start')
        }
    })
    tg.for('/mur', () => {
        $.routeTo('Мур')
    })
    tg.for('МУР', () => {
        $.routeTo('Мур')
    })
    tg.for('мур', () => {
        $.routeTo('Мур')
    })
})
tg.controller('StatController', ($) => {
//че тут ващ происходит? 0_0
var hide = { hide_keyboard: true};
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('/rating', () => {
    AllCats = 0
        for (var i in kotiks) {
        AllCats += kotiks[i]
        }
        console.log(time_log+ 'Статистика от ' + LogsTT1($)+LogsTT2($)+LogsTT3($));
        var ready = ''
        var new_kotiks = JSON.stringify(kotiks)
        var items = Object.keys(kotiks).map(function(key) {
            return [key, kotiks[key]];
        })
        items.sort(function(first, second) {
            return second[1] - first[1];
        })
        let promise = new Promise((resolve, reject) => {
            var foxy = 100
                items.forEach(function(item, i, arr) {
                        setTimeout(function() {
                            var rer = item.toString().split(',')
                            var middle = Russian(rer[1], ['раз', 'раза', 'раз'])
                            ready += ((i+1) +'. <strong>'+ rer[0]+ '</strong> '+ rer[1]+' '+middle+' \n')
                        },foxy);
                foxy += 100});
                resolve('result');
                  });
                promise
                  .then(
                      result => {
                          setTimeout(function() {
                                fs.writeFile('cat.txt', new_kotiks, function(err) {
                                    if(err) {
                                        console.log(err);
                                    }
                                })
                                $.sendMessage('Всего котики мяукнули '+ AllCats+' '+Russian(AllCats, ['раз', 'раза', 'раз'])+'\n\nТоп-10 котиков:\n'+ready,{parse_mode: 'HTML',reply_markup: JSON.stringify(hide)})
                        }, 1000)
                    },
                error => {}
                );
    })
})