'use strict'

var sum = 0
var mas = ['', '', '', '', '', '', '', '', ''];
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
			getsnils(ready)
		}
	}
}
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
mas.forEach(function(item, i, arr) {
	mas[i]=getRandomInRange(0,9)
})
var string = mas.join('')
var reversed = mas.reverse()
reversed.forEach(function(item, i, arr) {
	sum += reversed[i]*(i+1)
})
var result = string.slice(0, 3) + '-' + string.slice(3, 6) + '-' + string.slice(6, 9) +' '+ getsnils(sum)
console.log('Ваш номер СНИЛС:\n'+result)