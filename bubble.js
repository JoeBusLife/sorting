function bubbleSort(arr) {
	let swaped;
	for (let i = 0; i < arr.length; i++){
		for (let j = 1; j < arr.length - i; j++){
			if (arr[j-1] > arr[j]){
				[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
				swaped = true;
			}
		}
		if (swaped) swaped = false;
		else break;
	}
	return arr;
}

module.exports = bubbleSort;