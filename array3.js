"use strict";

function checkArrayRotation(arr){
    var start = 0;
    var end = arr.length-1;
    var mid = 0;
    while(start+1 < end){
        mid = Math.floor((start + end) / 2);

        if(arr[mid] > arr[mid+1]){
            
            return mid+1;
        }else if(arr[mid] > arr[0]){
            

            start = mid;
        }else if(arr[mid] < arr[0]){
            

            end = mid;
        }
        

    }

    return 0;
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

function zeroOneTwoSort(arr){
    var nextZero = 0;
    var nextTwo = arr.length-1;
    var i = 0;

    while(i <= nextTwo){

        if(arr[i] === 0){
            swap(arr, i, nextZero);
            console.log(arr);
            i++;
            nextZero++;
        }else if(arr[i] === 2){
            swap(arr, i, nextTwo);
            console.log(arr);
            nextTwo--;
        }else{
            i++;
        } 
    }

    return arr;
}


function pushZero(arr){
    var nextNonZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0){
            swap(arr, i, nextNonZero);
            nextNonZero++;
        }
    }
}



function sumofarray(arr1, arr2){
    var newArr = [];
    var digit;
    var carry = 0;
    let i = 0;
    let j = 0;

    if(arr1.length > arr2.length){
        j = arr1.length-1;
        i = arr2.length-1;
    }else{
        j = arr2.length-1;
        i = arr1.length-1;
    }
    
    while(i >= 0){
        digit = arr1[i] +arr2[i] + carry;
        if(digit > 9){
            newArr[j+1] = digit -10;
            carry = 1;
        }else{
            newArr[j+1] = digit;
            carry = 0;
        }
        i--;
        j--;
    }

    for (; j >= 0; j--) {
        
        
    }

    

    newArr[0] = carry;

    return newArr;
}

console.log(sumofarray([6,2,4], [7,5,6]));