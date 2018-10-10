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