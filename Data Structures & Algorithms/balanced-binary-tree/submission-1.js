/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    height(root) {
        if(!root) return 0

        let l = this.height(root.left)
        if(l === -1) return -1
        
        let r = this.height(root.right)
        if(r === -1) return -1

        if(Math.abs(l - r) > 1) return -1

        return 1 + Math.max(l, r)
    }

    isBalanced(root) {
        if(this.height(root) === -1) return false

        return true    
    }
}
