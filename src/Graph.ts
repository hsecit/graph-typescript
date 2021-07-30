import { Queue } from "./Queue";
import Stack from "./Stack";


/**
 * @class
 */
class Graph {
    vertices: Array<any>
    adjList: Map<any, Array<any>>
    constructor() {
        this.vertices = [];
        this.adjList = new Map()
    }

    addVertix = (v) => {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }

    addEdge = (v, w) => {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    initializeColor() {
        let color = {}
        this.vertices.forEach(vertex => {
            color[vertex] = 'white'
        })

        return color
    }

    /**
     * BSF algo using QUEUE
     * @param v Vertex
     * @param cb  callback
     */
    bsf = (v, cb) => {
        let color = this.initializeColor()
        let queue = new Queue()

        queue.enqueue(v)
        while (queue.items.length !== 0) {
            let u = queue.dequeue()
            // console.log(u)
            let nighbours = this.adjList.get(u)
            color[u] = 'grey'
            nighbours.forEach(w => {
                if (color[w] == 'white') {
                    color[w] = 'grey';

                    queue.enqueue(w)
                }
            })
            color[u] = 'black'
            if (cb) {
                cb(u)
            }


        }

    }


    /**
     * 
     * @param v 
     * @param cb 
     * @returns 
     */
    BSF = (v, cb) => {
        let color = this.initializeColor()
        let queue = new Queue()
        let d = []
        let pred = []
        // inti pred and dis 
        this.vertices.forEach(vertex => {
            d[vertex] = 0
            pred[vertex] = null
        })
        queue.enqueue(v)
        while (queue.items.length !== 0) {
            let u = queue.dequeue()
            // console.log(u)
            let nighbours = this.adjList.get(u)
            color[u] = 'grey'
            nighbours.forEach(w => {
                if (color[w] == 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1
                    pred[w] = u
                    queue.enqueue(w)
                }
            })
            color[u] = 'black'
            if (cb) {
                cb(u)
            }

        }

        return {
            distances: d,
            predecessors: pred
        }


    }

    /**
     * Shortest path from vertex @var U to @var W
     * @param u 
     * @param w 
     * @returns the path
     */
    pathFromTo = (u, w) => {
        let path = new Stack()

        let short = this.BSF(u, null)
        for (var v = w; v !== u;
            v = short.predecessors[v]) { //{13}
            path.push(v); //{14}
        }
        path.push(u)

        return path.toString()
    }

    printNode(val) {
        console.log(`@Visited_Vertex: ${val}`);
    }

    showGraph() {
        this.vertices.forEach(vertix => {
            let v = ''
            v += `${vertix} -> `
            this.adjList.get(vertix).forEach(edge => {
                v += ` ${edge}`
            })

            console.log(v);

        })
    }
}

export { Graph }