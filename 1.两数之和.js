/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    const map = new Map();
    map.set(num[0], 0);
    for(let i=1;i<len;i++) {
        let other = target - nums[i]
        if (map.get(other) !== undefined) {
            return [ map.get(other), i ]
        }
        map.set(nums[i], i)
    }

};
// @lc code=end

