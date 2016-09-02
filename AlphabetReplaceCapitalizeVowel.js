var str = 'vikram'

str = str.split('')
for(var i = 0; i<str.length;i++){
	
	//replace string
	
	switch(str[i]){
		
		case 'a' : str[i] = 'A'
		break
		case 'e' : str[i] = 'E'
		break
		case 'i' : str[i] = 'I'
		break
		case 'o' : str[i] = 'O'
		break
		case 'u' : str[i] = 'U'
		break
		default:
		
		
	}

}

console.log(str)