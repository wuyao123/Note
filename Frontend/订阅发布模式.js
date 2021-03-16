class Publish {
    constructor() {
        this.clienlist = {}
    }

    addListener (key, fn) {
        if (!this.clienlist[key]) {
            this.clienlist[key] = []
        }
        this.clienlist[key].push(fn)
    }

    trigger () {
        let key = Array.prototype.shift.call(arguments);
        let funs = this.clienlist[key]
        if (!funs && funs.length === 0) {
            return false
        } else {
            funs.forEach(fun => {
                fun.apply(this, arguments)
            })
        }
    }

    removeListener (key, fn) {
        let funs = this.clienlist[key];
        if (!funs) {
            return false
        }
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            for (let l=fns.length-1;l>=0;l--) {
                if (fn === fns[l]) {
                    fns.splice(l, 1)
                }
            }
        }
    }
    // constructor() {
    //     this.messageMap = {}
    // }

    // addListener (subscriber, message) {
    //     if (!this.messageMap[message]) {
    //         this.messageMap[message] = []
    //     }

    //     const existIndex = this.messageMap[message].findIndex(exitSubscriber => exitSubscriber.id === subscriber.id)

    //     if (existIndex === -1) {
    //         this.messageMap[message].push(subscriber)
    //     } else {

    //     }
    // }

    // publish (message, info) {
    //     const subscribers = this.messageMap[message] || []
    //     subscribers.forEach(subscriber => subscriber[message + '_handler'](info))
    //     return this
    // }

    // removeListener (subscriber, message) {

    // }
}