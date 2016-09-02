	
function finLongestWord(word){
	if(word != '') {
	var breakSentence  = word.split(' ')
	var HightestCount = 0
	
	var HightestCountIndex = 0 
		for(var key in breakSentence){
			if(breakSentence[key].length > HightestCount){
				HightestCount = breakSentence[key].length
				HightestCountIndex = key
			}
			
		}
	return breakSentence[HightestCountIndex]
	}
	return null
}	

var ReturnValue = finLongestWord('')

console.log(ReturnValue)