chessGenerator = (gridSize) => {
	let stringP = ""
	let counter =  1
	for (let i = 0; i< (gridSize*gridSize); i++){
		stringP = stringP + "#"
		if( counter === gridSize){
			stringP = stringP + "\n"
			counter = 1
		}else{
			counter ++;
		}
	}
	console.log(stringP);
}

chessGenerator(8);
