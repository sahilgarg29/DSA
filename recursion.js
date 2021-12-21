function power(x, n){
    if(n === 1){
        return x;
    }
    return x * power(x, n-1);
}

//console.log(power(10,6));

function printNumber(n){

    if(n === 1){
        return 1;
    }

    return (printNumber(n-1) + " " + n);
}

//console.log(printNumber(10));


function countDigit(n){

    if(n === 0){
        return 0;
    }

    return countDigit(Math.floor(n/10)) + 1;
}

//console.log(countDigit(06234));


function fibonacci(n){

    if(n === 1){
        return 1;
    }

    return (n + fibonacci(n-1)); 
}

//console.log(fibonacci(3));


function isSorted(arr, start, end){
    if(start == end){
        return true;
    }

    if(isSorted(arr, start+1, end) && arr[start] <= arr[start+1]){
        return true;
    }

    return false;
}


//console.log(isSorted([1,1,1,3,5,6], 0, 5));

function isSorted_2(arr, start, end){
    if(start === end){
        return true;
    }

    if(arr[start] > arr[start+1]){
        return false;
    }

    return isSorted_2(arr, start+1, end);

    
}

//console.log(isSorted_2([1,2,5,3,5,6], 0, 5));


function sumOfArr(arr, start, end){
    if(start === end){
        return arr[start];
    }

    return arr[start] + sumOfArr(arr, start+1, end);
}

//console.log(sumOfArr([2,2,3,4,5,10], 0, 5));


function includes(arr, start, end, key){
    if(start > end){
        return false;
    }

    if(arr[start] === key){
        return true;
    }

    return includes(arr,start+1, end, key);
}

//console.log(includes([9,8,10], 0 , 2, 8));


function indexOf(arr, start, end, key){
    if(start > end){
        return -1;
    }

    if(arr[start] === key){
        return start;
    }

    return indexOf(arr, start+1, end, key);
}

//console.log(indexOf([9,8,10,8], 0, 3, 10));

function lastIndexOf(arr, start, end, key){
    if(start > end){
        return -1;
    }

    var ans = lastIndexOf(arr, start+1, end, key);

    if(ans > -1){
        return ans;
    }

    if(arr[start] === key){
        return start;
    }

    return -1;
}

//console.log(lastIndexOf([9,8,10,8], 0, 3, 9));

function lastIndexOf_2(arr, start, end, key){
    if(start > end){
        return -1;
    }

    if(arr[end] === key){
        return end;
    }

    return lastIndexOf_2(arr, start, end-1, key);
}

//console.log(lastIndexOf_2([9,8,10,8], 0, 3, 11));

function allIndices(arr, start, end, key){
    if(start > end){
        return "";
    }

    if(arr[start] === key){
        return start + " " + allIndices(arr, start+1, end, key);
    }

    return allIndices(arr, start+1, end, key);
}

//var arr = [1,5,55,4,5,2,6,4,34,6,46,46,46,46,46,45,12,45,4,2,41,51,];

//console.log(allIndices(arr, 0, arr.length-1, 46));

function multiply(n, m){
    if(n === 1){
        return m;
    }

    return m + multiply(n-1, m);
}

//console.log(multiply(3,100));

function countZeros(n){
    if(n === 0){
        return 0;
    }

    var ans = countZeros(Math.floor(n/10));

    if(n % 10 === 0){
        return ans + 1;
    }

    return ans;
}

// console.log(countZeros(10204));
// console.log(countZeros(708000));

function geometricSum(k){
    if(k === 0){
        return 1;
    }

    return 1/(2**k) + geometricSum(k-1);
}

//console.log(geometricSum(13))


function isPalindrome(str, start ,end){
    if(start === end){
        return true;
    }

    if(str[start] !== str[end]){
        return false;
    }

    return isPalindrome(str, start+1, end-1);
}

// console.log(isPalindrome("racecar", 0, 6));
// console.log(isPalindrome("sahil", 0, 4));

function sumOfDigits(n){
    if(n === 0){
        return 0;
    }

    return n%10 + sumOfDigits(Math.floor(n/10));
}

//console.log(sumOfDigits(9));


function removeChar(str, start, c){
    if(start > str.length-1){
        return "";
    }

    if(str[start] !== c){
        return str[start] + removeChar(str, start+1, c);
    }

    return removeChar(str, start+1, c);
}

//console.log(removeChar("xxabxcxa", 0, "x"));

function replaceChar(str, start, c1, c2){
    if(start > str.length-1){
        return "";
    }

    if(str[start] === c1){
        return c2 + replaceChar(str, start+1, c1, c2);
    }

    return str[start] + replaceChar(str, start+1, c1, c2);
}

//console.log(replaceChar("aaaabbbbcccaa", 0, "a", "d"));

function removeDuplicates(str, start){
    if(start === str.length-1){
        return str[start];
    }

    if(str[start] !== str[start+1]){
        return str[start] + removeDuplicates(str, start+1);
    }

    return removeDuplicates(str, start+1);
}

//console.log(removeDuplicates("xxxyyyzwwzzz", 0));

function merge(arr, start, end){
    //console.log(arr[end])
    var sortedArr = [];
    var mid = Math.floor((start + end) / 2);
    var i = 0;
    var st = start;
    var j = mid+1;
    while(st <= mid && j <= end){
        if(arr[st] < arr[j]){
            sortedArr[i] = arr[st];
            st++;
            i++;
        }else{
            sortedArr[i] = arr[j];
            j++;
            i++;
        }

        
    }

    while(st <= mid){
        sortedArr[i] = arr[st];
        st++;
        i++;
    }

    while(j <= end){
        sortedArr[i] = arr[j];
        j++;
        i++;
    }

    //console.log(sortedArr);


    var m = 0;
    for(var k = start; k <= end; k++){
        arr[k] = sortedArr[m];
        m++;
    }

    return arr;
}

function mergeSort(arr, start, end){
    if(start >= end){
        return;
    }

    var mid = Math.floor((start + end) / 2);
    //console.log(mid)
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, end);
}


var a = [2,1,5,2,3];

mergeSort(a, 0, a.length-1);
console.log(a);

function partition(arr, start, end){
    var j = start;
    var pivot = end;
    var temp;
    for (var i = start; i < end; i++) {
        if(arr[i] < arr[pivot]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    temp = arr[j];
    arr[j] = arr[pivot];
    arr[pivot] = temp; 

    //console.log(arr);
    return j;
}

function quickSort(arr, start, end){

    if(start >= end){
        return;
    }

    var pi = partition(arr, start, end);
    quickSort(arr, start, pi-1);
    quickSort(arr, pi+1, end);
}


    // var arr1 = [6,3,5,92,32,3,2,8,7,48,4,5,115,5,5,5,45];
    // quickSort(arr1, 0 , arr1.length-1);
    // console.log(arr1);

function replacePi(str, start, end){
    if(start > end){
        return "";
    }

    if(str[start] === "p" && str[start+1] === "i"){
        return "3.14" + replacePi(str, start+2, end);
    }

    return str[start] + replacePi(str, start+1, end);
}

// console.log(replacePi("pip", 0, 2));

function removeX(str, start){
    if(start > str.length-1){
        return "";
    }

    if(str[start] !== "x"){
        return str[start] + removeX(str, start+1);
    }

    return removeX(str, start+1);
}

//console.log(removeX("xx", 0));


function stringToInt(str, end){

    if(end === 0){
        return (str.charCodeAt(end) - 48);
    }

    var ans =stringToInt(str, end-1);

    return (ans*10) + (str.charCodeAt(end) - 48); 
}

// console.log(stringToInt("12345", 4));

function pairStar(str, start){
    if(start >= str.length-1){
        return str[start];
    }

    if(str[start] === str[start+1]){
        return str[start] + "*" + pairStar(str, start+1)
    }

    return str[start] + pairStar(str, start+1);
}

//console.log(pairStar("aaaa", 0));

function towerOfHanoi(n , a, b, c){
    

    if(n < 1){
        return;
    }

    if(n === 1){
        console.log(a + " to " + b);
        return;
    }

    towerOfHanoi(n-1, a, c, b);
    towerOfHanoi(1, a, b, c);
    towerOfHanoi(n-1,c,b,a);
}

// towerOfHanoi(3, 'A', 'C', 'B')


function printSubSeq(str, start, end){

    if(start > end){
        return [""];
    }

    var ans = printSubSeq(str, start+1, end);
    var newAns = [];

    for(var i = 0; i < ans.length; i++){
        newAns.push(ans[i]);
        newAns.push(str[start] + ans[i]);
        console.log(str[start] + ans[i])
    }

    return newAns;

}

//printSubSeq("xyz", 0, 2)

//console.log(printSubSeq("xyz", 0, 2));

var keypad = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

function keypadCombinations(keys, keypad){
    if(keys === 0){
        var ans = [""];
        // for(var i = 0; i < keypad[keys].length; i++){
        //     ans[i] = keypad[keys][i];
        // }
        return ans;
    }
    var ans = keypadCombinations(Math.floor(keys/10), keypad);
    var key = keys % 10;
    var newAns = [];

    for(var i = 0; i < keypad[key].length; i++){
        for(var j = 0; j < ans.length; j++){
            newAns.push(ans[j]+keypad[key][i]);
        }
    }

    return newAns;
}

//console.log(keypadCombinations(234, keypad));

function printSubSeq_2(str, ans, i){
    if(i === str.length){
        console.log(ans);
        return;
    }

    printSubSeq_2(str, ans+str[i], i+1);
    printSubSeq_2(str, ans, i+1);
}

//printSubSeq_2("abcd", "", 0);

function keypadCombinations_2(keys, ans, keypad){
    if(keys === 0){
        console.log(ans);
        return;
    }

    var key = keys % 10;

    for(var i = 0; i < keypad[key].length; i++){
        keypadCombinations_2(Math.floor(keys/10), keypad[key][i] + ans, keypad);
    }
}

//keypadCombinations_2(23, "", keypad);

function checkAB(str, start){
    if(start === str.length){
        return true;
    }

    if(str[start] === "a" && str[start+1] === "a"){
        return checkAB(str, start+2);
    }else if(str[start] === "a" && str[start+1] === "b" && str[start+2] === "b"){
        return checkAB(str, start+3);
    }else if(str[start] === "b" && str[start+1] === "b" && str[start+2] === "a"){
        return checkAB(str, start+3);
    }

    return false;
}

//console.log(checkAB("abbaabba", 0));

function checkAB_2(str, i){
    if(i === str.length){
        return true;
    }

    if(str[i] === "a"){
        if(str[i+1] === "b" && str[i+2] === "b"){
            return checkAB_2(str, i+3);
        }else{
            return checkAB_2(str, i+1);
        }
    }

    return false;
}

//console.log(checkAB_2("b", 0));

function stairCase(n){
    if(n === 0){
        return 1;
    }
    if(n < 0){
        return 0;
    }

    var count = 0;

    count += stairCase(n-1);
    count += stairCase(n-2);
    count += stairCase(n-3);

    return count;
}

//console.log(stairCase(5));

function binarySearch(arr, start, end, key){
    if(start > end){
        return -1;
    }

    var mid = Math.floor((start + end) / 2);
    //console.log(mid)
    if(arr[mid] == key){
        //console.log("true");
        return mid;
    }else if(arr[mid] < key){
        return binarySearch(arr,mid+1,end, key);
    }else{
        return binarySearch(arr,start, mid-1, key);
    }
}

//console.log(binarySearch([2,3,4,5,6,8], 0, 5, 1));

function arrSubset(arr, i){
    if(i === arr.length){
        var ans = [""]
        return ans;
    }

    var ans = arrSubset(arr, i+1);
    var newAns = [];

    for(var j = 0; j < ans.length; j++){
        newAns.push(ans[j]);
        newAns.push(ans[j] + " " + arr[i]);
        console.log(arr[i] +ans[j]);
    }

    return newAns;
}

//arrSubset([15,20,12], 0);

function arrSubset_2(arr, ans, i){
    if(i === arr.length){
        console.log(ans);
        return;
    }

    arrSubset_2(arr, ans, i+1);
    arrSubset_2(arr, (ans + " " + arr[i]) , i+1);
}

//arrSubset_2([15,20,12], "", 0);

function subSetSumEquals(arr, i , k){
    if(i === arr.length){
        if(k === 0){
            return [[]];
        }else{
            return [];
        }
    }

    var ans = subSetSumEquals(arr, i+1, k-arr[i]);
    
    var ans2 = subSetSumEquals(arr, i+1, k);

    var ans1 = [];

    for(var j = 0; j < ans.length; j++){
        ans1.push(ans[j].concat([arr[i]]));
    }

    var newAns = ans1.concat(ans2);

    return newAns;

}

//console.log(subSetSumEquals([5,12,3,17,1,18,15,3,17], 0, 6));


function subSetSumEquals_2(arr, i, k, ans){

    if(i === arr.length){
        if(k === 0){
            console.log(ans);
            return;
        }else{
            return;
        }
    }
    //console.log(ans);
    subSetSumEquals_2(arr, i+1, k, ans);
    subSetSumEquals_2(arr, i+1, k-arr[i], ans + " " + arr[i]);
    

}

//subSetSumEquals_2([5,12,3,17,1,18,15,3,17], 0, 6, "");

function allCodes(num){
    if(num <= 0){
        return [""];
    }

    var ans1 = allCodes(Math.floor(num / 10));

    var x = num % 100;
    var ans2;
    if(x <= 26 && x > 9){
        ans2 = allCodes(Math.floor(num / 100));
    }

    var newAns = [];

    for(var i = 0; i < ans1.length; i++){
        newAns.push(ans1[i] + String.fromCharCode((num % 10) + 96));
    }

    if(ans2){
        for(var i = 0; i < ans2.length; i++){
            newAns.push(ans2[i] + String.fromCharCode((num % 100) + 96));
        }
    }

    return newAns;

}

//console.log(allCodes(1123));

function allCodes_2(num, ans){
    if(num === 0){
        console.log(ans);
        return;
    }

    allCodes_2(Math.floor(num / 10), String.fromCharCode((num%10) + 96) + ans);

    var x = num % 100;

    if(x > 9 && x <= 26){
        allCodes_2(Math.floor(num / 100), String.fromCharCode((num%100) + 96) + ans);
    }
}

//allCodes_2(1123, "");

function permutations(str, i){
    if(i === str.length-1){
        return [str[i]];
    }

    var ans = permutations(str, i+1);
    var newAns = [];

    for(var j = 0; j < ans.length; j++){
        // if(j.length === 0){
        //     newAns.push(str[i]);
        // }
        for(var k = 0; k <= ans[j].length; k++){
            newAns.push(ans[j].substring(0,k)+str[i]+ans[j].substring(k));
        }
    }

    return newAns;
}

//console.log(permutations("abc", 0));

function permutations_2(str, i, ans){
    if(i === str.length){
        console.log(ans)
        return;
    }

    for(var j = 0; j <= ans.length; j++){
        permutations_2(str, i+1, ans.substring(0,j) + str[i] + ans.substring(j))
    }
}

//permutations_2("abc", 0, "");



