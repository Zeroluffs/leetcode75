function twoSum(nums, target) {
  let dict = {};
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (!dict[nums[i]]) {
      dict[nums[i]] = target - nums[i];
      if (dict[target - nums[i]]) {
        array.push([dict[target - nums[i]], target - nums[i]]);
      }
    }
  }
  console.log(dict);
  console.log(array);
}

const nums = [2, 7, 8, 1, 15, 7, 3, 6, 3, 2];
const target = 9;

twoSum(nums, target);
