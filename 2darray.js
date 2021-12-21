function sumOfBoundAndDiag(arr, n, m){
    var sum = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            if(i === 0 || i === n-1 || j === 0 || j === m-1 || i === j || i === (m-1-j)){
                console.log(arr[i][j]);
                sum += arr[i][j];
            }
        }
    }

    return sum;
}

var matrix = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

//console.log(sumOfBoundAndDiag(matrix,5,5));


function printWave(arr, n, m){
    var ans = "";

    for(var i = 0; i < m; i++){
        if(i % 2 === 0){
            for(var j = 0; j < n; j++){
                ans += arr[j][i] + " ";
            }
        }else{
            for(var j = n-1; j >= 0; j--){
                ans += arr[j][i] + " ";
            }
        }
    }

    return ans;
}

//console.log(printWave(matrix, 5, 5));

function spiralPrint(arr, n, m){
    var rowStart = 0;
    var coulmnStart = 0;
    var rowEnd = n;
    var coulmnend = m;
    var count = 0;
    var ans = "";

    while(count < n*m){
        for(var i = coulmnStart; i < coulmnend; i++){
            ans += arr[rowStart][i] + " ";
            count++;
        }
        rowStart++;

        for(var i = rowStart; i < rowEnd; i++){
            ans += arr[i][coulmnend-1] + " ";
            count++;
        }
        coulmnend--;

        for(var i = coulmnend-1; i >= coulmnStart; i--){
            ans += arr[rowEnd-1][i] + " ";
            count++;
        }
        rowEnd--;

        for(var i = rowEnd-1; i >= rowStart; i--){
            ans += arr[i][coulmnStart] + " ";
            count++;
        }
        coulmnStart++;
    }

    return ans;
}

console.log(spiralPrint(matrix, 5,5))