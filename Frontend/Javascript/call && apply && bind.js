Function.prototype.myCall = function (ctx) {
    ctx = ctx || window
    ctx.fn = this
    const [, args] = arguments 
    const result = ctx.fn(...args)
    delete ctx.fn
    return result
}

// Function.prototype.myBind = function (ctx) {
//     const that = this
//     const o = function {}
//     const [, ...args] = arguments
//     const newFn = function {
//         const bindArgs = Array.prototype.slice.call(arguments)
//         return that.apply(this instanceof newFn ? this : ctx, args.concat(bindArgs))
//     }
//     o.prototype = that.prototype
//     newFn.prototype = new o
//     return newFn
// }


Function.prototype.myBind = function (ctx) {
    const that = this;
    const [, args] = arguments;
    const o = function {};
    const newFn = function () {
        const bindArgs = Array.prototype.slice.call(arguments)
        return that.apply(this instanceof newFn ? this : ctx, bindArgs.concat(args))
    }
    o.prototype = that.prototype
    newFn.prototype = new o
    return newFn
}