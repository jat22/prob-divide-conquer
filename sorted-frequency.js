function sortedFrequency(arr, val){
	let firstIdx = findFirstIdx(arr, val);
	if(firstIdx === -1) return firstIdx

	let lastIdx = findLastIdx(arr, val);
	return (lastIdx - firstIdx) + 1
}

function findFirstIdx(arr, val){
	let left = 0;
	let right = arr.length - 1;

	while(left <= right){
		let mid = Math.floor((left + right) / 2);
		if(arr[mid] === val && arr[mid -1 ] < val || mid === 0) return mid
		else if(arr[mid] === val || arr[mid] > val) right = mid - 1
		else if(arr[mid] < val) left = mid + 1
	}
	return -1
}
function findLastIdx(arr, val){
	if(arr[arr.length - 1] === val) return arr.length - 1

	let left = 0;
	let right = arr.length - 1;

	while(left <= right){
		let mid = Math.floor((left + right) / 2);
		if(arr[mid] === val && arr[mid + 1 ] > val) return mid
		else if(arr[mid] > val) right = mid - 1
		else left = mid + 1
	}
	return -1
 }

module.exports = sortedFrequency