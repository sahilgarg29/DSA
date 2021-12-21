function maximunProfit(budgets){
    budgets.sort();
    var maxProfit = 0;
    var profit = 0;

    for(var i = 0; i < budgets.length; i++){
        profit = budgets[i] * (budgets.length-i);
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }

    return maxProfit;
}

// console.log(maximunProfit([30,20,53,14]));
// console.log(maximunProfit([34,78,90,15,67]));

// function MinSquares(N)
//     {
//         var mincount = Number.MAX_VALUE;
//         var count = 0;
//         var sq = Math.floor(Math.sqrt(N));
//         //console.log(sq)
//         for(var i = sq; i >= 1; i--){
//             count = 0;
//             var x = N;
//             var j = i;
//             while(x !== 0 && j >= 1){
//                 var d = Math.floor(x / (j*j));
//                 //console.log(d)
//                 if(d > 0){
//                     count += d;
//                     x = x % (j*j);
//                 }else{
//                     j--;
//                 }
//             }
            
//             if(count < mincount && mincount > 0){
//                 mincount = count;
//             }
//         }
        
//         return mincount;
//     }

// console.log(MinSquares(88))

// function minSquares(N , x){
//     if(N <= 3){
//         return N;
//     }

//     var mincount = Number.MAX_VALUE;
//     // var n = Math.floor(Math.sqrt(N));
//     for(var i=1; i <= x; i++){
        
        
//         if((i*i) <= N){
//             var count = minSquares(N - (i*i), x) + 1;
//             if(count < mincount){
//                 mincount = count;
//             }
//         }else{
//             break;
//         }
        
//     }

//     return mincount;

// }

// console.log(minSquares(10, Math.floor(Math.sqrt(10))));

function strOfLength(str, k){
    if(k === 0){
        return [""];
    }

    var ans = strOfLength(str, k-1);
    var newAns = [];

    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < ans.length; j++){
            newAns.push(ans[j] + str[i]);
        }
    }

    return newAns;
}

//console.log(strOfLength("abcdef", 3));

function splitArray(arr, i, sum3, sum5){
    if(i === arr.length){
        if(sum3 === sum5){
            return true;
        }else{
            return false;
        }

        
    }

    if(arr[i] % 5 === 0){
        return splitArray(arr, i+1, sum3, sum5+arr[i]);
    }else if(arr[i] % 3 === 0){
        return splitArray(arr, i+1, sum3+arr[i], sum5);
    }else{
        return splitArray(arr, i+1, sum3, sum5+arr[i]) || 
        splitArray(arr, i+1, sum3+arr[i], sum5);
    }
}

console.log(splitArray([1,3,4], 0, 0, 0));