class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        let mp = new Map()
        for(let i=0; i<nums.length; i++) {
            if(mp.has(nums[i])) {
                mp.set(nums[i], mp.get(nums[i]) + 1)
            } else {
                mp.set(nums[i], 1)    
            }
        }

        /*
            1: 1,
            2: 2,
            3: 3

            [1,1], [2,2], [3,3]
        */

        let sorted = [...mp.entries()].sort(([e1, f1], [e2, f2]) => f2 - f1)
        let ans = []
        for(let i=0; i<k; i++) {
            ans.push(sorted[i][0])
        }   

        return ans
    }
}
