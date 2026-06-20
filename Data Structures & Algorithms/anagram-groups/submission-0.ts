class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let mp = new Map()
        
        for(let i=0; i<strs.length; i++) {
            let currStr = strs[i]
            let sortedStr = currStr.split("").sort().join()
            if(mp.has(sortedStr)) {
                mp.get(sortedStr).push(currStr)
            }else{
                mp.set(sortedStr, [currStr])
            }
        }

        return [...mp.values()]
    }
}
