console.log("2D Array Hour Glass");

const arr = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
];

const hourGlassSum = (array) => {
	let sum = 0;
		
	for (let i = 0; i <= 3; i ++) {
		for (let j = 0; j <= 3; j ++) {
			let top = array[i][j] + array[i][j+1] + array[i][j+2],
				middle = array[i+1][j+1];
			console.log(top, middle); 
		};
		
	};	
};

hourGlassSum(arr);