### 面试及算法题库
1. 取消默认事件
```javascript
function stopDefault(e){
  var ev = e||window.event;
  if(ev.preventDefault){
    ev.preventDefault();
  }else{
    ev.returnValue = false;
  }
}
```
2. 阻止冒泡
```javascript
function stopBuble(e){
  var ev = e||window.event;
  if(ev.stopPropagation){
    ev.stopPropagation();
  }else{
    ev.cancelBuble = true;
  }
}
```
3. js对象的深度拷贝
```javascript
/* 因为对象拷贝的过程中，浅拷贝拷属性类型为基本类型，拷贝过程正常；
而对于属性为对象或者数组，那么实际上，子对象获得的只是一个内存地址，
而不是真正拷贝，因此存在父对象被篡改的可能。

采用递归进行深度拷贝：*/
function deepCopy(Obj){
  // 新建一个缓冲区
  var buf;
  if(Obj instanceof Array){
    buf = [];
    var i = Obj.length;
    while(i--){
      buf[i] = deepCopy(Obj[i]);
    }
    return buf;
  }else if(Obj instanceof Object){
    buf = {};
    for(var k in Obj){
      buf[k] = deepCopy(Obj[k]);
    }
    return buf;
  }else{
    return Obj;
  }
}



```