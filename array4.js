function pairSum(arr, k){
    var count = 0;
    var start = 0;
    var end = arr.length - 1;

    while(start < end){
        if((arr[start] + arr[end]) < k){
            start++;
        }else if((arr[start] + arr[end]) > k){
            end--;
        }else{
            console.log("a")
            if(arr[start] === arr[end]){
                var total = (end - start) + 1;
                count += total * (total - 1) / 2;
                break;
            }

            var elementAtStart = arr[start];
            var startCount = 0;
            while(arr[start] === elementAtStart){
                startCount++;
                start++;
            }

            var elementAtEnd = arr[end];
            var endCount = 0;
            while(arr[end] === elementAtEnd){
                endCount++;
                end--;
            }

            count += (startCount * endCount);
        }

    }
    return count;
}

console.log(pairSum([2,-5,8,-6,0,5,10,11,-3], 10));