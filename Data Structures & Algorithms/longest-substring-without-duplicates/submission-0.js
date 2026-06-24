class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0, j=0, ans = 0 
        let mp = new Map()
        
        while(j < s.length) {
            // expand
            mp.set(
                s[j], 
                mp.has(s[j]) ? mp.get(s[j]) + 1 : 1
            )

            //shrink
            while(j-i+1 > mp.size) {
                mp.set(s[i], mp.get(s[i]) - 1)
                if(mp.get(s[i]) === 0) mp.delete(s[i])
                i++
            }

            ans = Math.max(ans, j-i+1)
            j++
        }
        return ans
    }
}
