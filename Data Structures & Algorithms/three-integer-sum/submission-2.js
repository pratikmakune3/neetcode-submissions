class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * [-1,0,1,2,-1,-4]
     * [-4,-1,-1,0,1,2]
     * 
     * 
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b)
        let ans = new Set()
        for(let i=0; i<nums.length-2; i++) {
            let curr = nums[i]
            let l=i+1, r=nums.length-1
            while(l < r) {
                if(nums[l] + nums[r] === -curr) {
                    ans.add(JSON.stringify([curr, nums[l], nums[r]]))
                    l++
                    r--
                }else if(nums[l] + nums[r] < -curr) {
                    l++
                }else{
                    r--
                }
            }
        }

        return Array.from(ans).map(e => JSON.parse(e))
    }
}
