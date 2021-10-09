function selectionSort(arr) {
	for (let i=0; i < arr.length; i++) {
		let curLow = i;
		for (let j=i+1; j < arr.length; j++) {
			if (arr[j] < arr[curLow]) curLow = j;
		}
		if (curLow !== i) [arr[i], arr[curLow]] = [arr[curLow], arr[i]];
	}
	return arr;
}

module.exports = selectionSort;