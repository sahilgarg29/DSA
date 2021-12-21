function maximizeTheSum(arr1, arr2){
    var maxSum = 0;
    var i = 0;
    var j = 0;
    var sum1 = 0;
    var sum2 = 0;

    while(i < arr1.length && j < arr2.length){
        
        if(arr1[i] === arr2[j]){
            sum1 += arr1[i];
            sum2 += arr2[j];
            if(sum1 > sum2){
                maxSum += sum1;
            }else{
                maxSum += sum2;
            }
            console.log(maxSum)
            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }else if(arr1[i] < arr2[j]){
            sum1 += arr1[i];
            
            i++;
        }else if(arr1[i] > arr2[j]){
            sum2 += arr2[j];
            j++;
        }
    }


    while(i < arr1.length){
        sum1 += arr1[i];
        i++;
    }

    while(j < arr2.length){
        sum2 += arr2[j];
        j++;
    }

    if(sum1 > sum2){
        maxSum += sum1;
    }else{
        maxSum += sum2;
    }

    return maxSum;
}


console.log(maximizeTheSum([1,5,10,15,20,25], [2,4,5,9,15]))