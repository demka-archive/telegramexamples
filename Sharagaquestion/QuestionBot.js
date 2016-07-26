//QuestionBot
'use strict'
var fs = require('fs');
var bson = require('bson').BSONPure.BSON
var tg = require('telegram-node-bot')('token')
var info = {}
var ranking = JSON.parse((fs.readFileSync('balls.txt', 'utf8')));
var i = 0;
function fuckingzap($,way,item){
fs.writeFileSync('balls.txt', '', 'utf8')
var testing = fs.readFileSync(way, 'utf8').charAt(0)
if (testing === ''){
fs.appendFile(way, item, function (err) {
    if (err) throw err;
});
}
else{
fs.appendFile(way, ';'+item, function (err) {
    if (err) throw err;
});    
    }
};
function sortNumber(a,b) {
   return a - b;
}
function Russian(diffDays, titles) {
    var cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (diffDays%100>4 && diffDays%100<20)? 2 : cases[(diffDays%10<5)?diffDays%10:5] ];  
}
function question($,question,route,round,number,v1,v2,v3,v4,pravda){
var hide = { hide_keyboard: true};
var answers = '1. '+v1+'\n2. '+v2+'\n3. '+v3+'\n4. '+v4
$.runMenu({
        message: 'Раунд №'+round+'\nВопрос №'+number+'\nКоличество баллов: '+info[$.user.id].ball+'\n\n'+question+'\n'+answers,
        layout: [2, 2, 1],
        1: () => {
        if (pravda == 1){
        console.log('Правильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        info[$.user.id].ball = info[$.user.id].ball +1
        ranking[forrate1($)+forrate2($)] = ranking[forrate1($)+forrate2($)]+1
        }
        else{
            console.log('Неправильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        }
        info[$.user.id].question = info[$.user.id].question +1
        $.routeTo(route)
        },
        2: () => {
        if (pravda == 2){
        console.log('Правильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        info[$.user.id].ball = info[$.user.id].ball +1
        ranking[forrate1($)+forrate2($)] = ranking[forrate1($)+forrate2($)]+1
        }
        else{
            console.log('Неправильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        }
        info[$.user.id].question = info[$.user.id].question +1
        $.routeTo(route)
        },
        3: () => {
        if (pravda == 3){
        console.log('Правильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        info[$.user.id].ball = info[$.user.id].ball +1
        ranking[forrate1($)+forrate2($)] = ranking[forrate1($)+forrate2($)]+1
        }
        else{
            console.log('Неправильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        }
        info[$.user.id].question = info[$.user.id].question +1
        $.routeTo(route)
        },
        4: () => {
        if (pravda == 4){
        console.log('Правильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        info[$.user.id].ball = info[$.user.id].ball +1
        ranking[forrate1($)+forrate2($)] = ranking[forrate1($)+forrate2($)]+1
        }
        else{
            console.log('Неправильный ответ на вопрос №'+round+'.'+number+' от '+ LogsTT1($)+LogsTT2($)+LogsTT3($))
        }
        info[$.user.id].question = info[$.user.id].question +1
        $.routeTo(route)
        },
        'Завершить тест': () => {
            $.sendMessage('Всего вы ответили на '+info[$.user.id].question+' '+Russian(info[$.user.id].question, ['вопрос', 'вопроса', 'вопросов'])+' и набрали ' +  info[$.user.id].ball+' '+Russian(info[$.user.id].ball, ['балл', 'балла', 'баллов'])+'\n<strong>¯\\_(ツ)_/¯</strong>',{parse_mode: 'HTML',reply_markup: JSON.stringify(hide)})
        },
    })
}
function rate(a){
if (a < 10){
    return '2 ¯\\_(ツ)_/¯'
}
else if ((a <= 16)){
    return '3 ¯\\_(ツ)_/¯'
}
else if (a <= 22){
return '4 ( ͡° ͜ʖ ͡°)' 
}
else return '5 ( ͡° ͜ʖ ͡°)'
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
    when(['r1_q1','r1_q2','r1_q3','r1_q4','r1_q5','r1_q6','r1_q7','r1_q8','r1_q9','r1_q10'], 'RoundOneController').
    when(['r2_q1','r2_q2','r2_q3','r2_q4','r2_q5','r2_q6','r2_q7','r2_q8','r2_q9','r2_q10'], 'RoundTwoController').
    when(['r3_q1','r3_q2','r3_q3','r3_q4','r3_q5','r3_q6','r3_q7','r3_q8','r3_q9','r3_q10'], 'RoundThreeController').
    when(['/stats'], 'StatController')
tg.controller('StartController', ($) => {
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('/start', () => {
        if (info[$.user.id] === undefined){
            info[$.user.id] = {name : ($.user.first_name +' '+$.user.last_name), ball : 0, question : 0}
        }
        if (ranking[forrate1($)+forrate2($)] === undefined){
        ranking[forrate1($)+forrate2($)] = 0;
        }
            console.log(time_log+ '/start от ' + LogsTT1($)+LogsTT2($)+LogsTT3($));
            $.runMenu({
                message: 'Привет, тебе предлагается ответить на серию вопросов по дисциплине "Информатика"\nНачнем?',
                layout: [1, 1],
                'Начать тестирование': () => {
                $.routeTo('r1_q1')
                },
                'Рейтинг': () => {
                $.routeTo('/stats')
                },
            })  
    })
})
tg.controller('RoundOneController', ($) => {
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('r1_q1', () => {
        ranking[forrate1($)+forrate2($)] = 0;
        info[$.user.id] = {name : ($.user.first_name +' '+$.user.last_name), ball : 0, question : 0}
        if (info[$.user.id].ball !== undefined){
            question($,'Компьютер, подключенный к сети Интернет, обязательно имеет:','r1_q2','1','1','Web-сервер','Web-страницу','MAC-адрес','Доменное имя',3)
        }
        else{
            $.routeTo('/start')
        }
    })
    tg.for('r1_q2', () => {
    question($,'Сколько бит в одном байте?','r1_q3','1','2','4','8','16','32',2)
    })
    tg.for('r1_q3', () => {
     question($,'Для поддержки e-mail в сети internet разработан протокол:','r1_q4','1','3','SMTP','STTP','SCTP','SSTP',1)
    })
    tg.for('r1_q4', () => {
     question($,'Что не характерно для локальной сети?','r1_q5','1','4','Большая скорость передачи информации','Большая пропускная способноть сети','Наличие связующего для всех абонентов высокоскоростного канала для передачи информации','Возможность обмена информации на большие расстояния',4)
    })
    tg.for('r1_q5', () => {
     question($,'Модем является техническим устройством для поддержки:','r1_q6','1','5','Технологий баз данных','Технологий программирования','Телекоммуникационных технологий','Офисных технологий',3)
    })
    tg.for('r1_q6', () => {
     question($,'Какой протокол использует всемирная паутина?','r1_q7','1','6','FTP','HTTP','URL','WWW',2)
    })
    tg.for('r1_q7', () => {
     question($,'Язык HTML - язык…','r1_q8','1','7','разметки страницы','программирования','общения','текстового редактора',1)
    })
    tg.for('r1_q8', () => {
     question($,'Постоянное запоминающее устройство служит для хранения:','r1_q9','1','8','программы пользователя во время работы','особо ценных прикладных программ','постоянно используемых программ','программ начальной загрузки компьютера и тестирования его узлов',4)
    })
    tg.for('r1_q9', () => {
     question($,'В состав процессора входят:','r1_q10','1','9','устройства записи информации, чтения информации','арифметико-логическое устройство, устройство управления','устройства ввода и вывода информации','устройство для хранения информации',2)
    })
    tg.for('r1_q10', () => {
     question($,'Для правильной работы периферийного устройства драйвер этого устройства должен находиться:','r2_q1','1','10','в оперативной памяти','на жестком диске','на инсталляционных дискетах','выведен на печать',2)
    })
})
tg.controller('RoundTwoController', ($) => {
var kb = { hide_keyboard: true};
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('r2_q1', () => {
        if (info[$.user.id].ball <= 5){
        $.runMenu({
            message: $.user.first_name+', у вас слишком мало баллов для участия во втором раунде опроса, хотите заново ответить на первую серию вопросов?',
            layout: [1,1],
            'Пройти еще раз': () => {
                let promise = new Promise((resolve, reject) => {
                $.sendMessage('<strong>Начинаем..</strong>',{parse_mode: 'HTML'})
                resolve('result');
                });
                promise
                .then(
                    result => {
                        setTimeout(function() {
                            $.routeTo('r1_q1')
                        }, 100);
                    },
                error => {}
                );
            },
            'Нет, не хочу': () => {
                $.sendMessage('Хорошо, но если будет скучно, то заходи',{reply_markup: JSON.stringify(kb)})
                $.sendSticker('BQADAgADTAcAAkKvaQABlUUq2EGNjBUC');
            },
        })  
        }
        else{
        let promise = new Promise((resolve, reject) => {
                $.sendMessage('<strong>Переходим на второй раунд..</strong>',{parse_mode: 'HTML'})
                resolve('result');
            });
        promise
            .then(
            result => {
                setTimeout(function() {
            question($,'Наибольший информационный объем будет иметь файл, содержащий:','r2_q2','2','1','Cтраницу текста','Черно-белый рисунок 100*100 ','Аудиоклип длительностью 1 мин','Видеоклип длительностью 1 мин',4)
            }, 100);
            },
            error => {}
            );
        }
    })
    tg.for('r2_q2', () => {
     question($,'Дата рождения интернета?','r2_q3','2','2','6 августа 1991 г.','6 августа 1992 г.','6 августа 1993 г.','6 агуста 1990 г.',1)
    })
    tg.for('r2_q3', () => {
     question($,'Канал связи - это…','r2_q4','2','3','Совокупность технических устройств, обеспечивающих передачу сигнала от источника к получателю','Телефонный кабель','Устройство, предназначенное для преобразования исходного сообщения источника информации к виду удобному для передачи','Устройство для преобразования кодированного сообщения в исходное',1)
    })
    tg.for('r2_q4', () => {
     question($,'Избыточность кода - это …','r2_q5','2','4','Наличие дополнительной информации','Многократное повторение передаваемых данных','Наличие лишней информации','Обфускация кода',2)
    })
    tg.for('r2_q5', () => {
     question($,'Наиболее устойчивые к возможным повреждениям носители информации','r2_q6','2','5','DVD-диски','Оптические диски','Молекулы ДНК','Жесткие диски',3)
    })
    tg.for('r2_q6', () => {
     question($,'По какому принципу проводится систематизация в предметном каталоге?','r2_q7','2','6','Иерархический','Регулятивный','Табличный','Графический',1)
    })
    tg.for('r2_q6', () => {
     question($,'По какому принципу проводится систематизация в предметном каталоге?','r2_q7','2','6','Иерархический','Регулятивный','Табличный','Графический',1)
    })
    tg.for('r2_q7', () => {
     question($,'Руткит - это..','r2_q8','2','7','Вредоносная программа, маскирующаяся под макрокоманду','Вредоносная программа, выполняющая несанкционированные действия по передаче управления компьютером удаленному пользователю','Разновидность межсетвого экрана','Программа для скрытого взятия под контроль взломанной системы',4)
    })
    tg.for('r2_q8', () => {
     question($,'Вредоносная программа, которая подменяет собой загрузку некоторых программ при загрузке системы называется..','r2_q9','2','8','Файловый вирус','Загрузочный вирус','Троян','Макровирус',2)
    })
    tg.for('r2_q9', () => {
     question($,'Какие бывают конфигурации (топологии) ЛС:','r2_q10','2','9','Древовидная, односвязная, полносвязная, параллельная;','Шинная, односвязная, звездообразная, полносвязная;','Кольцевая, шинная, звездообразная, полносвязная и древовидная;','Древовидная, многосвязная, малокольцевая, последовательная.',3)
    })
    tg.for('r2_q10', () => {
     question($,'Что такое рынок информационных услуг?','r3_q1','2','10','Услуги по сопровождению программных продуктов','Система отношений по торговле продуктами интеллектуального труда на коммерческой основе','Услуги по разработке программных продуктов, подлежащих реализации','Система услуг по созданию сайтов',2)
    })
})
tg.controller('RoundThreeController', ($) => {
var kb = { hide_keyboard: true};
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('r3_q1', () => {
        if (info[$.user.id].ball <= 14){
        $.runMenu({
            message: $.user.first_name+', у вас слишком мало баллов для участия в финальном раунде опроса, хотите заново ответить на первую и вторую серию вопросов?',
            layout: [1,1],
            'Пройти еще раз': () => {
                let promise = new Promise((resolve, reject) => {
                $.sendMessage('<strong>Начинаем..</strong>',{parse_mode: 'HTML'})
                resolve('result');
                });
                promise
                .then(
                    result => {
                        setTimeout(function() {
                            $.routeTo('r1_q1')
                        }, 100);
                    },
                error => {}
                );
            },
            'Нет, не хочу': () => {
                $.sendMessage('Хорошо, но если будет скучно, то заходи',{reply_markup: JSON.stringify(kb)})
                $.sendSticker('BQADAgADTAcAAkKvaQABlUUq2EGNjBUC');
            },
        })  
        }
        else{
        let promise = new Promise((resolve, reject) => {
                $.sendMessage('<strong>Переходим на третий (финальный) раунд..</strong>',{parse_mode: 'HTML'})
                resolve('result');
            });
        promise
            .then(
            result => {
                setTimeout(function() {
                    question($,'Укажите какой RAID-массив работает по принципу зеркалирования?','r3_q2','3','1','RAID 0','RAID 1','RAID 3','Нет верного ответа',2)
            }, 100);
            },
            error => {}
            );
        }
    })
    
    tg.for('r3_q2', () => {
     question($,'В момент включения персонального компьютера программа тестирования персонального компьютера записана в..','r3_q3','3','2','Регистрах процессора','Оперативной памяти','В микросхеме BIOS','На внешнем носителе',3)
    })
    
    tg.for('r3_q3', () => {
     question($,'Почему в ЭВМ используется двоичная система счисления?','r3_q4','3','3','Потому что составляющие технические устройства могут надежно сохранять и распознавать только два различных состояния','Потому что за единицу измерения информации принят 1 байт','Потому что ЭВМ умеет считать только до двух','Потому что человеку проще общаться с компьютером на уровне двоичной системы счисления',1)
    })
    
    tg.for('r3_q4', () => {
     question($,'Разветвляющийся алгоритм — это:','r3_q5','3','4','Набор команд, которые выполняются последовательно друг за другом','Многократное исполнение одних и тех же действий','Присутствие в алгоритме хотя бы одного условия','Другое',3)
    })
    
    tg.for('r3_q5', () => {
     question($,'Что такое протокол сети?','r3_q6','3','5','Устройство связи в сети','Файл на сервере','Сетевая программа','Соглашение о способе обмена информацией',4)
    })
    
    tg.for('r3_q6', () => {
     question($,'Что делает UNIX-утилита nohup?','r3_q7','3','6','Запускает какую-либо команду на определенное количество секунд','Запускает какую-либо команду','Запускает какую-либо команду с выводом ошибок в файл foo.out','Запускает какую-либо команду с игнорированием сигналов потери связи',4)
    })
    
    tg.for('r3_q7', () => {
     question($,'Какой пакетный менеджер используется во FreeBSD по умолчанию?','r3_q8','3','7','Pacman','Pkgng','Apt-get','DNF',2)
    })
    
    tg.for('r3_q8', () => {
     question($,'Укажите привилегии пользователя в восьмеричной системе для файла с атрибутами rwxrw-rw-','r3_q9','3','8','766','721','777','752',1)
    })
    
    tg.for('r3_q9', () => {
     question($,'Какой сигнал служит для продолжения работы процесса в UNIX?','r3_q10','3','9','SIGTTIN','SIGCONT','SIGQUIT','SIGKILL',2)
    })
    
    tg.for('r3_q10', () => {
     $.sendMessage('<strong>Итоги:</strong>\nВсего вы ответили на '+info[$.user.id].question+' '+Russian(info[$.user.id].question, ['вопрос', 'вопроса', 'вопросов'])+' и набрали ' +  info[$.user.id].ball+' '+Russian(info[$.user.id].ball, ['балл', 'балла', 'баллов'])+'\n<strong>Ваша оценка: '+rate(info[$.user.id].ball)+'</strong>',{parse_mode: 'HTML',reply_markup: JSON.stringify(kb)})
    })
})
tg.controller('StatController', ($) => {
var hide = { hide_keyboard: true}
var time_log = '['+ new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")+'] '
    tg.for('/stats', () => {
        var ready = ''
        var new_ranking = JSON.stringify(ranking)
        var items = Object.keys(ranking).map(function(key) {
            return [key, ranking[key]];
        })
        items.sort(function(first, second) {
            return second[1] - first[1];
        })
        let promise = new Promise((resolve, reject) => {
            var foxy = 100
                items.forEach(function(item, i, arr) {
                        setTimeout(function() {
                            var rrr = item.toString().split(',')
                            var middle = Russian(rrr[1], ['балл', 'балла', 'баллов'])
                            ready += ((i+1) +'. <strong>'+ rrr[0]+ '</strong> '+ rrr[1]+' '+middle+' \n')
                        },foxy);
                foxy += 100});
                resolve('result');
                  });
                promise
                  .then(
                      result => {
                          setTimeout(function() {
                                fs.writeFile('balls.txt', new_ranking, function(err) {
                                    if(err) {
                                        console.log(err);
                                    }
                                })
                                $.sendMessage(ready,{parse_mode: 'HTML',reply_markup: JSON.stringify(hide)})
                        }, 1000)
                    },
                error => {}
                );
    })
})
    
