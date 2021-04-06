let curry = function (fn) {
    let func = function () {
        let _args = [].slice.call(arguments, 0);
        let func1 = function() {
            [].push.apply(_args, arguments);
            return func1;
        }

        func1.toString = func1.valueOf = function() {
            return fn.apply(fn, _args)
        }

        return func1;
    }
    return func;
}

let add = function() {
    return [].reduce.call(arguments, function(a, b) {
        return a+b;
    })
}

let adder = curry(add)
console.log(adder(1)(2))