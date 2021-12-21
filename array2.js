function reverse(start, end, arr){
    var temp;
    while(start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

function rotateArray(arr, d){
    reverse(0, d-1, arr);
    reverse(d, arr.length-1, arr);
    reverse(0, arr.length-1, arr);

    return arr;
}


function secondLargest(arr){
    var largest;
    var secLargest;

    if(arr.length === 1){
        console.log("size 1");
        return arr[0];
    }

    if(arr[0] > arr[1]){
        largest = arr[0];
        secLargest = arr[1];
    }else{
        largest = arr[1]
        secLargest = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if(arr[i] > largest){
            secLargest = largest;
            largest = arr[i];

        }else if(arr[i] > secLargest){
            secLargest = arr[i];
        }
        
    }

    return secLargest;

}

function isPrime(n){
    var flag = true;
    for(var i = 2; i < n; i++){
      if(n % i === 0){
        flag = false;
      }
    }
    return flag;
  }
  
//   console.log(isPrime(10));

console.log(secondLargest([5,6,4,5,5,6,21,8]));