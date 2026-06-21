class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let s = new Set(nums)
        let ans = nums.length ? 1 : 0
        for(let i=0; i<nums.length; i++) {
            let curr = nums[i]
            if(s.has(curr - 1)) continue

            // curr is the start
            let c = 1
            while(s.has(curr + 1)) {
                c++
                ans = Math.max(ans, c)
                curr = curr + 1
            }
        }

        return ans
    }
}
