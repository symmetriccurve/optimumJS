// String Reverse


var givenString = '1234567890'


var slicedArray = givenString.split('')
var temp =''
for(var i=slicedArray.length-1; i>=0; i--){  
	temp = temp + slicedArray[i]
}

console.log(temp)


//learned How to use Split Function.