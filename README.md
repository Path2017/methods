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
4. 回文
```javascript
// reverse 是数组的方法
function back(str){
  return str.split('').reverse().join('');
}
```
5. 数组去重
```javascript 
function unique(arr){
  var data = [];
  var hash = {};
  for(var i=0;i<arr.length;i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data;
}
```
6. 统计字符串中出现最多的字母
```javascript
function findMax(str){
  if(str.length == 1){
    return str
  }
  var charObj = {};
  for(var i =0;i<str.length;i++){
    if(!charObj[str.charAt(i)]){
      charObj[str.charAt(i)] = 1;
    }else{
      charObj[str.charAt(i)] += 1;
    }
  }
  var charMax = '';
  var charValue = 1;
  for(var k in charObj){
    if(charObj[k]>=charValue){
      charMax = k;
      charValue = charObj[k];
    }
  }
  return charMax;
}
```
7. 冒泡排序 -- 从小到大排序
```javascript
function buble(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```
8. 快速排序
```javascript
function quick(arr){
  if(arr.length<=1){
    return arr;
  }
  var leftarr =[];
  var rightarr = [];
  // 取中间值索引号
  var midindex = Math.floor(arr.length/2);
  var midvalue = arr.splice(midindex,1)[0];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<midvalue){
      leftarr.push(arr[i]);
    }else{
      rightarr.push(arr[i]);
    }
  }
  return quick(leftarr).concat([midvalue],quick(rightarr))
}
```
9. 不需要借助第三个临时变量，实现两个变量的交换
```javascript
function swap(a,b){
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}
```