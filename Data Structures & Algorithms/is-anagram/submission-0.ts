class Solution {
    hashFromString(str: string): Map<string, number> {
        let freqMap = new Map()
        for(let i=0; i<str.length; i++) {
            let curr = str.charAt(i)
            if(freqMap.has(curr)) {
                freqMap.set(curr, freqMap.get(curr) + 1)
            }else{
                freqMap.set(curr, 1)
            }
        }

        return freqMap
    }

    isAnagram(s: string, t: string): boolean {
        const sHash = this.hashFromString(s)
        const tHash = this.hashFromString(t)

        if(sHash.size !== tHash.size) {
            return false
        }

        for(const [char, freq] of sHash) {
            if(!tHash.has(char)) {
                return false
            }

            if(sHash.get(char) !== tHash.get(char)){
                return false
            }
        }

        return true
    }
}
