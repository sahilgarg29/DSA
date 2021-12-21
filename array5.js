function tripletSum(arr, k){
    arr.sort(function(a, b){return a-b});
    console.log(arr);
    var start;
    var end;
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        start = i+1;
        end = arr.length-1;
        var j = k-arr[i];
        while(start < end){
            if((arr[start] + arr[end]) < j){
                start++;
            }else if((arr[start] + arr[end]) > j){
                end--;
            }else{
                console.log("a")
                if(arr[start] === arr[end]){
                    var total = end - start + 1;
                    count += (total * (total - 1) / 2);
                }

                var startCount = 0;
                var startElement = arr[start];
                while(startElement === arr[start]){
                    startCount++;
                    start++;
                }

                var endCount = 0;
                var endElement = arr[end];
                while(endElement === arr[end]){
                    endCount++;
                    end--;
                }

                count += (startCount * endCount);
            }
        }
    }

    return count;
}

console.log(tripletSum([2, -5, 8, -6, 0, 5, 10, 11, -3], 10));