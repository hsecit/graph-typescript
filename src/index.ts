import { Graph } from "./Graph";

let g = new Graph()
let vetr = ['A','B','C','D','E','F','G','H','I']; 
vetr.forEach(vertix => {
    g.addVertix(vertix)
})

//                    I---E
//                        |
//             c --  A -- B ---F
//             |  \   |
//             |   \  |
//             G ---  D      
//                    |
//                    H
// 

const graph = `
I---E
|
c --  A -- B ---F
|     |
|   \  |
G ---  D      
|
H



`


g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'G');
g.addEdge('D', 'G');
g.addEdge('D', 'H');
g.addEdge('B', 'E');
g.addEdge('B', 'F');
g.addEdge('E', 'I');

console.log(graph);

g.showGraph()

let m = g.BSF(vetr[0],g.printNode)
console.log(m);


