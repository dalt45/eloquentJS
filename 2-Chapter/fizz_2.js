countTo100 = () => {
	let i;
	for ( i = 0; i <= 100; i++ ) {
		let stringP = "";
		if ( i % 3 === 0 ) {
			stringP = stringP + "Fizz";
			if ( i % 5 === 0 ) {
				stringP = stringP + "Buzz"
			}
		} else if( i % 5 === 0){
			stringP = stringP + "Buzz"
		}
		else {
			stringP = `${ i }`
		}
		console.log ( stringP );
	}
}

countTo100();
