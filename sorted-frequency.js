function sortedFrequency(arr, val){
	let firstIdx = findFirstIdx(arr, val);
	console.log(firstIdx)
	if(firstIdx === -1) return firstIdx
	let lastIdx = findLastIdx(arr, val);
	console.log(lastIdx)
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

// function sortedFrequency(arr, val) {
// 	let leftIdx = 0;
// 	let midIdx;
// 	let rightIdx = arr.length - 1

// 	let leftBound;
// 	let rightBound;

// 	if(arr[midIdx] === val){
// 		rightIdx = midIdx - 1
// 		let leftMidIdx = Math.floor((leftIdx + rightIdx) / 2)

// 		while(	arr[leftMidIdx] >= val 
// 				&& arr[leftMidIdx - 1] < val){
// 			if(arr[leftMidIdx] > val) {
// 				rightIdx = leftMidIdx - 1
// 			} else if (arr[leftMidIdx] < val) {
// 				leftIdx = leftMidIdx + 1
// 			} else {
// 				leftBound = leftMidIdx
// 			}
// 		}

// 		leftIdx = midIdx + 1;
// 		let rigthMidIdx = Math.floor((leftIdx + rightIdx) / 2)

// 		while( 	arr[rigthMidIdx] <= val
// 				&& arr[rigthMidIdx + 1] > val){
// 			if(arr[rigthMidIdx] > val) {
// 				rightIdx = rigthMidIdx -1
// 			} else if(arr[rigthMidIdx] < val){
// 				leftIdx = rigthMidIdx + 1
// 			} else {
// 				rightBound = rigthMidIdx
// 			}

// 		}
	
// 	} else if(arr[midIdx] > val){
// 		rightIdx = midIdx - 1
// 		let leftMidIdx = Math.floor((leftIdx + rightIdx) / 2)

// 		while(	arr[leftMidIdx] >= val 
// 				&& arr[leftMidIdx - 1] < val){
// 			if(arr[leftMidIdx] > val) {
// 				rightIdx = leftMidIdx - 1
// 			} else if (arr[leftMidIdx] < val) {
// 				leftIdx = leftMidIdx + 1
// 			} else {
// 				leftBound = leftMidIdx
// 			}
// 		}

// 	} else if(arr[midIdx < val]){
// 		leftIdx = midIdx + 1;
// 		let rigthMidIdx = Math.floor((leftIdx + rightIdx) / 2)

// 		while( 	arr[rigthMidIdx] <= val
// 				&& arr[rigthMidIdx + 1] > val){
// 			if(arr[rigthMidIdx] > val) {
// 				rightIdx = rigthMidIdx -1
// 			} else if(arr[rigthMidIdx] < val){
// 				leftIdx = rigthMidIdx + 1
// 			} else {
// 				rightBound = rigthMidIdx
// 			}

// 		}
// 	}

// 	while(leftIdx < rightIdx){
// 		midIdx = Math.floor((leftIdx + rightIdx) / 2);

		
// 	}
	  
// }

// function binarySearch(arr, val) {

// 	let leftIdx = 0;
// 	let rightIdx = arr.length - 1;
// 	let count = 0
// 	while (leftIdx <= rightIdx) {
// 	  // find the middle value
// 	  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
// 	  let middleVal = arr[middleIdx];
// 		console.log(`Iteration ${count}`)
// 		console.log(`midVal = ${middleVal}`)
// 	  if (middleVal < val) {
// 		// middleVal is too small, look at the right half
// 		leftIdx = middleIdx + 1;
// 		console.log(`leftIdx = ${leftIdx}`)
// 	  } else if (middleVal > val) {
// 		// middleVal is too large, look at the left half
// 		rightIdx = middleIdx - 1;
// 		console.log(`rightIdx = ${rightIdx}`)
// 	  } else {
// 		// we found our value!
// 		return middleIdx;
// 	  }
// 	  count++
// 	}
	
	// left and right pointers crossed, val isn't in arr
// 	return -1;
//   }

module.exports = sortedFrequency

// 
// leftIdx stays
// rightIdx midIdx - 1
// newMidIdx = leftIdx + rightIdx / 2
// 2 < 3
// leftIdx
