function addNumbers(numberA, numberB) {
	return numberA + numberB
}

var twoPlusTwo = addNumbers(2,2)

console.assert(twoPlusTwo === 4)

//////////////////////////////////

function digitize(num){
	var numStr = num + '',
		numArr = numStr.split('')

	var newArr = numArr.map(function(num){
		return parseInt(num)
	})
	return newArr
}

console.assert(digitize(123)[0]===1)
console.assert(digitize(8675309)[6]===9)

//////////////////////////////////

function compton(callback){
	console.log('we running this')
	callback()
}

/////////////////////////////////

function letterCount(str){
	if (!str) return {}	
	str = str.toLowerCase()
	str = str.split('')
	var obj = {}
	str.forEach(function(el){
		if (el === " ") return
		else if (!obj[el]) {
			obj[el] = 1
		}
		else obj[el] += 1
	})
	return obj
}

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)

/////////////////////////////////

function names(str){
	str = str.split(', ')
	var obj = {}
	for (var i = 0; i < str.length; i++) {
		var spl = str[i].split(' ')
		obj[spl[0]] = spl[1]
	}
	return obj
}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")

//////////////////////////////////

function isPalindrome(str) {
	var rts = ''
	for (var i = str.length-1; i >= 0; i--) {
		rts += str[i]
	}
	return rts === str
}

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )

//////////////////////////////////

function Robot(){
	this.isHuman = function(){return false}
}

Robot.new = function(){
	return new Robot
}

///////////////////////////////////





