function findRotationCount(arr) {
	if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
	let left = 0;
	let right = arr.length - 1;

	while(left <= right){
		let mid = Math.floor((left + right) / 2)
		if(arr[mid] < arr[mid - 1]) return mid
		else if(arr[mid] > arr[mid + 1]) return mid + 1
		else if(arr[mid] < arr[mid + 1]) left = mid + 1
	}
}

module.exports = findRotationCount