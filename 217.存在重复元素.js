/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for (const i in nums) {
        if (set.has(i)) {
            return true
        }
        set.add(x);
    }
    return false;
};
// @lc code=end

