class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    dfs([i,j], grid: string[][], visited: number[][]) {
        visited[i][j] = 1
        const neigh = [[-1,0],[0,-1],[0,1],[1,0]]

        for(let k=0; k<neigh.length; k++) {
            const [dx, dy] = neigh[k]
            let ni = i+dx
            let nj = j+dy
            if(
                ni >=0 && ni < grid.length &&
                nj >=0 && nj < grid[i].length && 
                grid[ni][nj] === "1" &&
                visited[ni][nj] === 0
            ) {
                this.dfs([ni, nj], grid, visited)
            }
        }
    }   

    numIslands(grid: string[][]): number {
        let count = 0
        let visited = new Array(grid.length)
            .fill(null)
            .map(() => new Array(grid[0].length).fill(0))

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[i].length; j++) {
                if(grid[i][j] === "1" && visited[i][j] === 0) {
                    count++
                    // dfs
                    this.dfs([i,j], grid, visited)
                }
            }   
        }

        return count
    }
}
