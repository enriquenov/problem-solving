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

/*
function tocharcode(text) {
  return text.toLowerCase().match(/[a-z]/g).map(ch => ch.charCodeAt() - 95).join(' ');
}

var str = "The quick brown fox jumped over the lazy dog.";

console.log(tocharcode(str));
*/

// function nbYear(p0, percent, aug, p) {
//   var count = 0;
//   while (p0 <= p) {
//     p0 = (p0 * (percent+100)/100) + aug;
//     count++;
//   }
//   return count;
// }
//
// console.log(nbYear(1500, 5, 100, 5000));

// function isValidWalk(walk) {
//   var v = 0, h = 0, result = false;
//   if (walk.length === 10) {
//     for (var i = 0; i < walk.length; i++) {
//       while (walk[i] == 'n') return v++;
//       while (walk[i] == 's') return v--;
//       while (walk[i] == 'e') return h++;
//       while (walk[i] == 'w') return h--;
//     }
//     if ((v + h) === 0) result = true;
//   }
//   return result;
// }
//
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

function levenshtein(a, b) {
  if(a.length === 0) return b.length;
  if(b.length === 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

console.log(levenshtein("boat", "got"));

// I wouldn't even be able to think about it.
// The deletion distance between two strings is the minimum sum of ASCII values of characters that you need to delete in the two strings in order to have the same string. The deletion distance between cat and at is 99, because you can just delete the first character of cat and the ASCII value of 'c' is 99. The deletion distance between cat and bat is 98 + 99, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their total ASCII values, because you can always just delete both of the strings entirely. Implement an efficient function to find the deletion distance between two strings. You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it's similar.
