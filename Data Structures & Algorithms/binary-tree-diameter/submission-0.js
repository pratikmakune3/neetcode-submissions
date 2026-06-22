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
     * @return {number}
     */
    height(root, diam) {
        if(!root) return 0

        let l = this.height(root.left, diam)
        let r = this.height(root.right, diam)

        diam.maxi = Math.max(diam.maxi, l + r)

        return 1 + Math.max(l, r)
    }
    
    diameterOfBinaryTree(root) {
        if(!root) return 0
        let diam = { maxi: 0 }
        this.height(root, diam)

        return diam.maxi
    }
}
