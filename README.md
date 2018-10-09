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