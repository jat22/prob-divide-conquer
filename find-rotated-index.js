function findRotatedIndex(arr, num) {
	const pivot = findPivot(arr);
	console.log(pivot)
	if(num >= arr[0] && pivot > 0 && arr[pivot - 1] >= num){
		return binarySearch(arr, num, 0, (pivot-1))
	} else {
		return binarySearch(arr, num, pivot, (arr.length - 1))
	}
}

function binarySearch(arr, num, start, end){
	if (arr.length === 0) return -1;
	if (num < arr[start] || num > arr[end]) return -1;

	while(start <= end){
		let mid = Math.floor((start + end) / 2);

		if(arr[mid] > num){
			end = mid - 1
		} else if(arr[mid] < num){
			start = mid + 1
		} else if(arr[mid] === num){
			return mid
		}
	}
	return -1
}

function findPivot(arr){
	if(arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	let left = 0;
	let right = arr.length - 1
	while(left <= right){
		let mid = Math.floor((left + right) / 2);
		if(arr[mid] > arr[mid + 1]) return mid + 1;
		else if(arr[left] <= arr[mid]){
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
}

module.exports = findRotatedIndex

