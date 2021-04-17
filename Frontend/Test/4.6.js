function selectSort (arr) {
    let len = arr.length
    for(let i=0;i<len;i++) {
        let temp = 0
        for (j=i+1;j<len;j++) {
            if (arr[temp] > arr[j]) {
                temp = j
            }
        }
        if (temp !== i) {
            let a = arr[temp]
            arr[temp] = arr[i]
            arr[i] = a
        }
    }
}

function insertSort (arr) {
    let len = arr.length
    for (let i=1;i<len;i++) {
        let preIndex = i-1;
        let cur = arr[i];
        while (preIndex >=0 && arr[cur] < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = cur
    }

}

function bubbleSort (arr) {
    let len = arr.length
    for (let i=0;i<len-1;i++) {
        for (let j=0;j<len-i-1;j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

function quickSort (arr) {
    let len = arr.length;
    let midIndex = Math.floor(len/2);
    let mid = arr.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i=1;i<arr.length;i++) {
        if (arr[i] > mid) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), mid, ...quickSort(right)]
}

function mergeArr (nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n -1;

    while (len2) {
        if (len1 < 0) {
            nums1[len--] = num2[len2--]
            continue
        }

        nums1[len--] = num1[len1] > num2[len2] ? num1[len1--] : num2[len2--];
    }
}

function removeNum (nums, val) {
    
}