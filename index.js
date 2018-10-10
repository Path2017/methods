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