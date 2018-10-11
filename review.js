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