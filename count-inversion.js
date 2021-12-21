function merge(arr, st, en, mid){
    var mArr = [];
    var count = 0;
    var i = st;
    var j = en;
    var k = mid+1
    var x = 0;
    while(i <= mid && k <= j){

        if(arr[k] < arr[i]){
            mArr[x] = arr[k];
            count += mid-i+1;
            k++;
            x++;
        }else{
            mArr[x] = arr[i];
            i++;
            x++;
        }
    }

    while(i <= mid){
        mArr[x] = arr[i];
        i++;
        x++;
    }

    while(k <= j){
        mArr[x] = arr[k];
        k++;
        x++;
    }

    x = 0;
    for(var y = st; y <= en; y++){
        arr[y] = mArr[x];
        x++;
    }

    return count;

}

function countInversion(arr, st, en){
    if(st === en){
        return 0;
    }

    var mid = Math.floor((st + en)/ 2);
    var a =countInversion(arr, st, mid);
    var b = countInversion(arr, mid+1, en);
    return (merge(arr, st, en, mid) + a + b);

    
}

//console.log(countInversion([3,1,2], 0, 2));

function murderMerge(arr, st, en, mid){
    var mArr = [];
    var count = 0;
    var i = st;
    var j = en;
    var k = mid+1
    var x = 0;
    //console.log(arr);
    while(i <= mid && k <= j){

        if(arr[k] > arr[i]){
            mArr[x] = arr[i];
            //console.log(arr[i])
            count += ((j-k+1) * arr[i]);
            i++;
            x++;
        }else{
            mArr[x] = arr[k];
            k++;
            x++;
        }
    }

    while(i <= mid){
        mArr[x] = arr[i];
        i++;
        x++;
    }

    while(k <= j){
        mArr[x] = arr[k];
        k++;
        x++;
    }

    x = 0;
    for(var y = st; y <= en; y++){
        arr[y] = mArr[x];
        x++;
    }
    //console.log(count);

    return count;

}


function murderProblem(arr, st, en){
    if(st === en){
        return 0;
    }

    var mid = Math.floor((st + en)/ 2);
    var a = murderProblem(arr, st, mid);
    var b = murderProblem(arr, mid+1, en);
    return (murderMerge(arr, st, en, mid) + a + b);

    
}

console.log(murderProblem([5,2,6,3,9], 0, 4));






