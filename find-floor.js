function findFloor(arr, num) {
	if(arr[arr.length - 1] <= num) return arr[arr.length - 1] 

	let left = 0
	let right = arr.length - 1

	while(left <= right){
		let mid = Math.floor((left + right) / 2);

		if(arr[mid] <= num && arr[mid + 1] > num){
			return arr[mid]
		} else if(arr[mid] < num){
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

module.exports = findFloor