function selectionSort(arr){
    var minI;
    var temp;
    for (let i = 0; i < arr.length-1; i++) {
        minI = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minI]){
                minI = j;
            }
        }
        temp = arr[i]
        arr[i] = arr[minI];
        arr[minI] = temp;
    }

    return arr;
}


function bubbleSort(arr){
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}


function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        var j = i;
        var temp;
        while(arr[j] < arr[j-1]){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;

            j--;
        }
        
    }

    return arr;
}


function mergeSortedArr(arr1, arr2){
    var newarr = [];
    var len = arr1.length + arr2.length;
    var a1 = 0;
    var a2 = 0;

    for (let i = 0; i < len; i++) {

        if(a2 === arr2.length){
            newarr[i] = arr1[a1];
            a1++;
            continue;
        }else if(a1 === arr1.length){
            newarr[i] = arr2[a2];
            a2++;
            continue;
        }

        if(arr1[a1] >= arr2[a2]){
            newarr[i] = arr2[a2];
            a2++;
        }else if(arr1[a1] < arr2[a2]){
            newarr[i] = arr1[a1];
            a1++;
        }
    }

    return newarr;
}


function pushZerosToEnd(arr){
    
    var temp;
    for (let i = arr.length-1; i >= 0; i--) {
        
        if(arr[i] === 0){
            var j = i;
            while((arr[j+1] !== 0) && (j < arr.length-1)){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                j++;
            }
        }
        
    }

    return arr;
}


function pushZero(arr){
    var i = 0;
    var j = 0;
    var temp
    while(i<arr.length){
        if(arr[i] !== 0){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }

    return arr;
}


// console.log(mergeSortedArr([1,4,6,10,10,13],[2,5,7,9, 10]));
console.log(pushZero([1,5,7,0,2,0,0,5,0,4,2]));