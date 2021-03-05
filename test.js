function throttle (fn, time, scope) {
    let timer;
    return function () {
        let context = scope || this, args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, time)
            timer = null
        }
    }
}

function debounce (fn, time, scope) {
    let timer;
    return function () {
        let context = scope || this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, time)
    }
}