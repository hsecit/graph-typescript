class Stack {
    items: any[]
    constructor() {
        this.items = []
    }

    toString = () => {
        let reverse = this.items.reverse()
        let str = `@PathFrom ${reverse[0]} @PathTo ${reverse[this.size()-1]}: ${reverse.toString().replace(/\,/g,' -> ')}`
        return str
    }
    push = (el) => {
        this.items.push(el)
    }

    pop = () => {
        this.items.pop()
    }

    isEmpty = () => {
        return this.items.length == 0
    }

    size = () =>  {
        return this.items.length
    }

    clear = () => {
        this.items = []
    }

    // show the last item of the stack
    peek = () => {
        return this.items[this.items.length - 1]
    }

    reverse = () => {
        return this.items.reverse()
    }

    print = () => {
        console.log(this.items)
    }
}

export default Stack ;