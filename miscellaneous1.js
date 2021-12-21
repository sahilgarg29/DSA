function tajMahalEntry(arr){
    var count = 0;

    while(true){
        for(var i = 0; i < arr.length; i++){
            if((arr[i] - count) <= 0){
                return i+1;
            }
            count++;
        }
    }
}

//console.log(tajMahalEntry([2,3,2,0]));

function binarySearch(st, en, i, n, len){
    if(st >= en){
        return st;
    }
    
    var mid = Math.floor((st + en) / 2);
    //console.log(mid);
    if((i+mid*len) === n){
        return mid;
    }else if((i+mid*len) > n){
        return binarySearch(st, mid-1, i, n, len);
    }else{
        return binarySearch(mid+1, en, i, n, len);
    }
}

function tajMahalEntry_2(arr){
    var minTime = Number.MAX_VALUE;
    var ans = -1;

    for(var i = 0; i < arr.length; i++){
        var t = binarySearch(0, 10**9, i, arr[i], arr.length);
        var time = i + t*arr.length
        if(time < minTime){
            minTime = time;
            ans = i+1;
        }
    }

    return ans;
}

//console.log(tajMahalEntry_2([3234,123,123,381]));

function tajMahalEntry_3(arr){
    var minTime = Number.MAX_VALUE;
    var ans = -1;

    for(var i = 0; i < arr.length; i++){
        var t = (arr[i] - i) / arr.length;
        t = Math.ceil(t);

        var time = i + t*arr.length;
        if(time < minTime){
            minTime = time;
            ans = i+1;
        }
    }

    return ans;
}

//console.log(tajMahalEntry_3([2,3,2,0]));

function binarySearchMomos(arr, st, en, k){

    if(st > en){
        return st-1;
    }

    var mid = Math.floor((st + en) /2);

    if(k === arr[mid]){
        return mid;
    }else if(k < arr[mid]){
        return binarySearchMomos(arr, st, mid-1, k);
    }else{
        return binarySearchMomos(arr, mid+1, en, k);
    }
}

function momosMarket(arr,x){
    var a = [];
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        a[i] = sum;
    }
    console.log(a)

    var j = binarySearchMomos(a, 0, a.length-1, x);
    //console.log(j)

    return (j+1 + " " + (x - a[j]));
}

console.log(momosMarket([2,4,4,5,6,7,2], 18));

function canBeDistributed(x, boxes, n){
    var count = 0;

    for(var i = 0; i < boxes.length; i++){
        var total = boxes[i] / x;
        total = Math.floor(total);
        count += total;
    }

    //console.log(count);
    if(count >= n){
        return true;
    }else{
        return false;
    }
}

function binarySearchMaxCandies(st, en, boxes, n){

    if(st > en){
        return st-1;
    }

    var mid = Math.floor((st + en) / 2);

    if(canBeDistributed(mid,boxes,n)){
        return binarySearchMaxCandies(mid+1, en, boxes, n);
    }else{
        return binarySearchMaxCandies(st, mid-1, boxes, n);
    }

}

function distributeCandies(boxes, n){
    
    var max = 0;

    for(var i = 0; i < boxes.length; i++){
        if(boxes[i] > max){
            max = boxes[i];
        }
    }

    return binarySearchMaxCandies(0, max, boxes, n);
}

//console.log(distributeCandies([3,2,3,9], 8));

