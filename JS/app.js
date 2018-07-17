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
	let top    = 0,
		middle = 0,
		bottom = 0;
	for (let i = 0, len = array.length; i < len; i ++) {
		const addTop = () => {
			if (i <= 3) {
				console.log(array[i]);
			};
		};
		addTop();
	};	
};

hourGlassSum(arr);