'use strict';

// 回文
function back(str) {
    return str.split('').reverse().join('');
}
// 阻止事件冒泡
function stopBubble(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else {
        ev.cancelBuble = true;
    }
}
// 取消默认事件
function stopDefault(e) {
    var ev = e || window.event;
    if (ev.preventDefault) {
        ev.preventDefault();
    } else {
        ev.returnValue = false;
    }
}
//  对象的深拷贝
function deepCopy(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];
        var i = Obj.length;
        while (i--) {
            buf[i] = deepCopy(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {
        buf = {};
        for (var k in Obj) {
            buf[k] = deepCopy(Obj[k]);
        }
        return buf;
    } else {
        return Obj;
    }
}
//  数组去重
function unique(arr) {
    var data = [];
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}
// 统计字符串中出现最多的字
function maxValue(str) {
    if (str.length <= 1) {
        return str;
    }
    var list = {};
    for (var i = 0; i < str.length; i++) {
        if (!list[str.charAt(i)]) {
            list[str.charAt(i)] = 1;
        } else {
            list[str.charAt(i)] += 1;
        }
    }
    var maxValue = '';
    var maxNum = 1;
    for (var k in list) {
        if (maxNum <= list[k]) {
            maxValue = k;
            maxNum = list[k];
        }
    }
    return maxValue;
}

function maxValue(str) {
    if (str.length <= 1) {
        return str;
    }
    var list = {};
    for (var i = 0; i < str.length; i++) {
        if (!list[str.charAt(i)]) {
            list[str.charAt(i)] = 1;
        } else {
            list[str.charAt(i)] += 1;
        }
    }
    var maxValue = '';
    var maxNum = 1;
    for (var k in list) {
        if (maxNum <= list[k]) {
            maxValue = k;
            maxNum = list[k];
        }
    }
    return maxValue;
}
// 冒泡排序
function buble(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 1; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// 快速排序
function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var midIndex = Math.floor(arr.length / 2);
    var midValue = arr.splice(midIndex, 1)[0];
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= midValue) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quick(leftArr).concat([midValue], quick(rightArr));
}
// 不借助其他变量实现两个参数交换
function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}
// 斐波那契数列
function fib(n) {
    var res = [1, 1];
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return [1, 1];
    } else {
        for (var i = 2; i < n; i++) {
            res[i] = res[i - 1] + res[i - 2];
        }
    }
    return res;
}