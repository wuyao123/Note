function checkType (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function deepCopy (target) {
    let temp;
    if (checkType(target) === 'Object') {
        temp = {}
    } else if (checkType(target) === 'Array') {
        temp = []
    } else {
        return target;
    }

    for (let i in target) {
        let val = target[i]
        if (checkType(target) === 'Object' || checkType(target) === 'Array') {
            temp[i] = deepCopy(val);
        } else {
            temp[i] = val;
        }
    }
    return temp;
}