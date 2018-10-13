// 二分查找
function binarySearch(arr, target) {
  var h = arr.length - 1;
  var l = 0;
  while (l <= h) {
    var mid = Math.floor((h - l) / 2);
    if (target > arr[mid]) {
      l = mid + 1;
    }
    if (target < arr[mid]) {
      h = m - 1;
    }
    if (target == arr[mid]) {
      return true;
    }
  }
  return -1;
}
// 阻止冒泡
function stopBuble(e) {
  var ev = e || window.event;
  if (ev.stopPropagation) {
    ev.stopPropagation()
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
    ev.returnValue = false
  }
}
// 对象的深拷贝
function deepCopy(obj) {
  // 新建缓冲区
  var buf;
  if (obj instanceof Array) {
    buf = [];
    var i = obj.length;
    while (i--) {
      buf.push(deepCopy(obj[i]));
    }
    return buf;
  } else if (obj instanceof Object) {
    buf = {};
    for (var k in obj) {
      buf[k] = deepCopy(obj[k]);
    }
    return buf;
  } else {
    return obj;
  }
}
// 回文
function back(str) {
  return str.split('').reverse().join('');
}
// 数组去重
function unique(arr) {
  var data = [];
  var hash = {};
  for (var i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      data.push(arr[i]);
      hash[arr[i]] = true;
    }
  }
  return data;
}
// 计算字符中出现次数最多的数字
function maxValue(str) {
  if (str.length <= 1) {
    return str;
  }
  var data = {};
  for (var i = 0; i < str.length; i++) {
    if (!data[str.charAt(i)]) {
      data[str.charAt(i)] = 1;
    } else {
      data[str.charAt(i)] += 1;
    }
  }
  var maxValue = '';
  var maxNum = 1;
  for (var k in data) {
    if (maxNum <= data[k]) {
      maxValue = k;
      maxNum = data[k];
    }
  }
  return maxValue;
}
// 冒泡排序
function buble(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length - i - 1; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
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
  var leftArr = [];
  var rightArr = [];
  var midNum = Math.floor(arr.length / 2);
  var midValue = arr[midNum];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= midValue) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quick(leftArr).concat([midValue], rightArr);
}
// 不借助第三个变量  实现两个变量数值的交换
function exp(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}
//  找到数组中最大和最小两个数值的差值
function maxDis(arr){
  var maxValue = arr[0];
  var minValue = arr[0];
  for(var i=0;i<arr.length;i++){
    maxValue = Math.max(maxValue,arr[i]);
    minValue = Math.min(minValue,arr[i]);
  }
  var result = maxValue - minValue;
  return result;
}