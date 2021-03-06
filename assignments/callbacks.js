// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }
  // Potential Solution:

  // Higher order function using "cb" as the call back
  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }
  // // Function invocation 
  // firstItem(items, function(first) {
  //   console.log(first)
  // });


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// complete
getLength(items, function(getLength){
  console.log(getLength)
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  
  return cb(arr[arr.length - 1])
}
// complete
last(items, function(last){
  console.log(last)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return  cb(x + y);
}
// complete
sumNums(25, 10, function(sumNums){
  console.log(sumNums)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x * y);
}
// complete
multiplyNums(3, 4, function(multiplyNums){
  console.log(multiplyNums)
});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
if (items.includes(item)) {
  console.log(true);
}
else {
  console.log(false);
}
}
contains("Notes", items, function(contains){
  console.log(contains)
});
/* STRETCH PROBLEM */

numbers = [1,1,2,4,5,6,2,6,7,7,8,3,8,3,5]


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  numbers.reduce((unique, item) => {
      // console.log(
      //   item, 
      //   unique,
      //   unique.includes(item),
      //   unique.includes(item) ? unique : [...unique, item],
      //   );
      return  unique.includes(item) ? unique : [...unique, item]} , []);
    }


console.log(numbers);

// cannot figure out the output...
console.log(removeDuplicates(numbers));