export class Queue {
    items: any[]
    constructor() {
        this.items = []
    }

    //  add element in queue
    enqueue = (el) => {
        this.items.push(el)
    }

    // remove the first elemet nin queue
    dequeue = () => {
        return this.items.shift()
    }

    front = () => {
        return this.items[0]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    print = () => {
        let thread = ''
        this.items.forEach((el) => {
            thread += `|${el}|`
        })

        console.log(thread);
    }
}