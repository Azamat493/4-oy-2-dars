//8-masala
//foydalandim ===> https://www.w3schools.com/jsref/jsref_filter.asp 
                // https://youtu.be/VvSEKHKFvpQ?si=kr04C4IbC-y31PNN
let numbers = [1, 2, 3, 4, 5, 6];
let evenNums = numbers.filter(juft);
let oddNums = numbers.filter(toq);

function juft(element) {
    return element % 2 === 0;
}
function toq(element) {
    return element % 2 !== 0;
}
let natija = {
  juft: evenNums,
  toq: oddNums
};
console.log(natija);

//1-masala
//foydalandim ===> https://www.w3schools.com/jsref/jsref_filter.asp
                // https://youtu.be/siThsBL6vxs?si=VNZjg6UC2Rec76oB
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
// Output: [3, 4]

var res = array1.filter((val) => {
    return array2.includes(val)
});
console.log(res);

//4-masala
//foydalandim ===> https://www.w3schools.com/jsref/jsref_pop.asp
                // https://youtu.be/1-sHHkYRZ4g?si=yiDcykxtJ-Mgfwmx
const arr = [1, 2, 3, 4, 5]; 
const k = 2; 
for (let i = 0; i < k; i++) {
    let last = arr.pop();
    
  arr.unshift(last);
}
console.log(arr);

//3-masala
//foydalandim ===> https://youtu.be/isGKzmwDREg?si=CGlQAWF49wM-Drt1
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
const target = 9;
const result = twoSum([2, 7, 11, 15], target);
console.log(result);