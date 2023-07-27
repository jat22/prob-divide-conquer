function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let midIdx;

	while(leftIdx !== rightIdx) {
		midIdx = Math.floor((leftIdx + rightIdx) / 2)

		if(arr[midIdx] === 1){
			leftIdx = midIdx + 1
		} else if(arr[midIdx] === 0){
			rightIdx = midIdx - 1
		}
	}

	if(arr[midIdx] === 0){
		if(leftIdx === 0) return arr.length - (midIdx -1)
		return  arr.length - midIdx
	} else if(arr[midIdx] === 1){
		if(rightIdx === arr.length - 1)return 0
		return (arr.length - (midIdx + 1))
	}
}

module.exports = countZeroes
