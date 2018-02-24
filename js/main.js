console.log("Hello! Do not disturb... Enrique is coding.");

// // HOW MANY 1s ARE IN A SORTED BINARY ARRAY.
//
// function BinarySearch(arr, value) {
//   var low = 0,
//       high = arr.length - 1,
//       index = -1;
//
//   while (low <= high) {
//     var mid = Math.floor((low + high)/2);
//
//     if (arr[mid] == value) {
//       index = mid;
//       high = mid - 1;
//     } else if (value < arr[mid]) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return arr.length - index;
// }
//
// function countOnes(arr) {
//   var value = 1;
//   return BinarySearch(arr, value);
// }
//
// var numbers = [0, 0, 0, 1, 1, 1, 1, 1, 1];
// console.log(countOnes(numbers));

// HOW MANY OCURRENCES OF THE SAME NUMBER EXIST IN A SORTED ARRAY.

// function BinarySearch(arr, len, value, searchFirst) {
//   var low = 0,
//       high = len-1,
//       index = -1;
//
//   while (low <= high) {
//     var mid = Math.floor((low+high)/2);
//
//     if (arr[mid] == value) {
//       index = mid;
//       if (searchFirst) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     } else if (arr[mid] > value) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return index;
// }
//
// function countOnes(arr) {
//   var len = arr.length,
//       value = 1;
//
//   var firstIdx = BinarySearch(arr, len, value, true);
//
//   if (firstIdx == -1) {
//     console.log('Count of ' + value + ' is 0');
//   } else {
//     var lastIdx = BinarySearch(arr, len, value, false);
//     console.log('Count of ' + value + ' is ' + (lastIdx - firstIdx + 1));
//   }
// }
//
// var numbers = [0, 0, 0, 1, 1, 1, 1, 1, 1];
// var numbers2 = [1, 1, 3, 3, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 11];
// countOnes(numbers2);
// countOnes(numbers);


// var array3 = [1, 2, 3, 4, 4, 6, 7, 12, 45, 67];
//
// function binary_search(arr, value) {
//   var high = arr.length - 1;
//   var low = 0;
//   var mid = 0;
//
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//
//     if (arr[mid] == value) {
//       return mid;
//     } else if (value < arr[mid]) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//
//   return -1;
// }
//
// console.log(binary_search(array3, 12));

/*
// TWO SUM problem in O(N) time & O(1) space.
// Using hashTable/hashMap

var twoSum = function(nums, target) {
  var exist = {};

  for (var i = 0; i < nums.length; i++) {
    var match = target - nums[i];
    if (typeof exist[match] === 'number') {
      return [exist[match], i];
    }
    exist[nums[i]] = i;
  }
}

nums = [2, 3, 4, 5, 6, 7];

console.log(twoSum(nums, 11));
*/



// // BINARY NUMBERS WITH ALTERNATING BITS
//
// var hasAlternatingBits = function(n) {
//   var toBin = (n >>> 0).toString(2);
//   for (var i = 0; i < toBin.length - 1; i++) {
//     if (toBin[i] == toBin[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
//
// console.log(hasAlternatingBits(7));

// // JEWELS AND STONES
//
// var numJewelsInStones = function(J, S) {
//     let jewels = new Set(J);
//
//     return S.split('').reduce((res, s) => {return res + jewels.has(s)}, 0);
// };
//
// console.log(numJewelsInStones("aA", "aAAabbbb")); // returns 3

// // WORD PATTERN
//
// var wordPattern = function(pattern, str) {
//   var mapPat = {};
//   var mapStr = {};
//   str = str.split(" ");
//
//   if(str.length === pattern.length){
//       for (var i = 0; i < str.length; i++){
//           if (typeof mapPat[pattern[i]] === 'string' && mapPat[pattern[i]] !== str[i]){
//               return false;
//           } else if (typeof mapPat[pattern[i]] === 'undefined' && mapStr[str[i]]){
//               return false;
//           }
//           mapPat[pattern[i]] = str[i];
//           mapStr[str[i]] = pattern[i];
//       }
//       return true;
//   }
//   return false;
//
// }
//
// console.log(wordPattern("abc", "dog cat fish"));

// // INTERSECTION OF TWO ARRAYS
//
// var intersect = function(nums1, nums2) {
//     // track how often each number occurs in first list
//     var store = nums1.reduce((map, n) => {
//         map[n] = (map[n] + 1) || 1;
//
//         return map;
//     }, {});
//
//     // filter out numbers from second list based on
//     // how often they occurred in the first list
//
//     return nums2.filter(function(n) {
//         if (store[n]) {
//             store[n]--;
//             return true;
//         } else {
//             return false;
//         }
//     });
//
// };
//
// console.log(intersect([1, 2, 3, 1, 2, 3, 3, 3], [1, 1, 2, 2, 5]));

// function bitArraySort(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//
//     while(left < right) {
//       while(arr[left] === 0) { left++; }
//       while(arr[right] === 1) { right--; }
//
//       if(left < right) {
//          // swap the left and right values
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//       }
//     }
//
//     return arr;
// }
//
// arr = [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1];
//
// console.log(bitArraySort(arr));

// var longestDecrease = function(nums) {
//   var max = 0, count = 1;
//
//   for (var i = 0; i < nums.length - 1; i++) {
//
//     if (nums[i] > nums[i+1]) {
//       max = Math.max(max, count++);
//     } else {
//       count = 1;
//     }
//
//   }
//   return max + 1;
//
// }
//
// var nums = [1, 4, 3, 1, -2, 0, 5, 6, 2, 1, 0, -4, -10];
//
// console.log(longestDecrease(nums));

/*
var longestIncrease = function(nums) {
  var max = 0, count = 1;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
      max = Math.max(max, count++);
    } else {
      count = 1;
    }
  }
  return max + 1;
}

var arr = [1, 2, 3, 4, 0, 1, 3, 1, 4];

console.log(longestIncrease(arr));
*/

// GET THE LOWEST AND HIGHST NUMBER OF A STRING OF NUMBERS

// var numbers = "4 5 123 93123 -324 16 37";
//
// function highAndLow(numbers) {
//   var nums = numbers.split(' ').map(Number);
//   return Math.max(...nums) + " " + Math.min.apply(null, nums);
//
// }
//
// console.log(highAndLow(numbers));

// var uniqueInOrder = function(iterable) {
//   var idx = 0, results = [];
//   while (idx < iterable.length) {
//     if (iterable[idx] !== iterable[idx+1]) {
//       results.push(iterable[idx]);
//     }
//     idx++;
//   }
//   return results;
// }
//
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1,2,2,2,2,3,3]));

//
