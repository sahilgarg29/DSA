function minmax(arr){
    var minmaxarr = [];
    var i = 0;
    if(arr.length % 2 === 1){
        minmaxarr[0] = arr[0];
        minmaxarr[1] = arr[0];
        i = 1;
    }else{
        if(arr[0] > arr[1]){
            minmaxarr[1] = arr[0];
            minmaxarr[0] = arr[1];
        }else{
            minmaxarr[0] = arr[0];
            minmaxarr[1] = arr[1];
        }
        
        i = 2;
    }

    while(i < arr.length){
        if(arr[i] > arr[i+1]){
            if(arr[i+1] < minmaxarr[0]){
                minmaxarr[0] = arr[i+1];
            }
            if(arr[i] > minmaxarr[1]){
                minmaxarr[1] = arr[i]
            }
        }else{
            if(arr[i] < minmaxarr[0]){
                minmaxarr[0] = arr[i+1];
            }
            if(arr[i+1] > minmaxarr[1]){
                minmaxarr[1] = arr[i]
            }
        }

        i += 2;
    }

    return minmaxarr;
}

function palindromeNumber(num){
    var a = num;
    var reverse = 0;
    while(num > 0){
        var lastdigit = num % 10;
        reverse = (reverse * 10) + lastdigit;
        num = Math.floor(num/10);
    }


    if(a === reverse){
        return true;
    }else{
        return false;
    }

    
}


function countWords(str){
    count = 1;
    for(var i =1; i < str.length-1; i++){
        if((str.charAt(i) === ' ') && (str.charAt(i+1) !== ' ')){
            count++;
        }
    }

    return count;
}

function reverseEachWord(str){
    var start = 0;
    var newstr = "";

    for (let i = 0; i <= str.length; i++) {
        if( (str[i] === ' ') || (i === (str.length) ) ){
            for (let j = i-1; j >= start; j--) {
                newstr += str[j];    
            }
            newstr += " ";
            start = i+1;
        }
        
    }

    return newstr;
}

function reverseStringWordWise(str){
    var newstr = "";
    var end = str.length;

    for (let i = str.length; i >= 0; i--) {
        if(str[i] === ' '){
            newstr += str.substring(i+1,end);
            newstr += " ";
            end = i;
        }
    }
    newstr += str.substring(0, end);
    return newstr;
}


function checkPermutation(str1, str2){
    var arr1 = [];
    
    var ans = true;

    if(str1.length !== str2.length){
        console.log("Different Size");
        return false;
        
    }

    for (let i = 0; i <= 127; i++) {
        arr1[i] = 0;
        
    }


    for (let i = 0; i < str1.length; i++) {
        arr1[str1.charCodeAt(i)] += 1;
        arr1[str2.charCodeAt(i)] -= 1;
    }


    for (let i = 0; i <= 127; i++) {
        if(arr1[i] !== 0){
            ans = false;
            return false;
        }
    }

    return ans;
}


function removeConsicutiveDuplicates(str){
    var newstr = "";

    if (str.length === 0) {
        return str;
    }

    for (let i = 0; i < str.length; i++) {
        if(newstr[newstr.length-1] !== str[i]){
            newstr += str[i];
        }
    }

    return newstr;
}

function reverseArrayTraversal(n, arr){
    var ans = "";
  for(var i = n-1; i >= 0; i--){
      ans = ans + arr[i] + " ";
  }

  return ans;
}

function removeCharacter(str, c){
    var newstr = "";

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== c){
            newstr += str[i];
        }  
    }

    return newstr;
}


function highestOccuringChar(str){
    var arr = [];
    var maxi = 0;

    for (let i = 0; i <= 127; i++) {
        arr[i] = 0;        
    }

    for (let i = 0; i < str.length; i++) {
        arr[str.charCodeAt(i)] += 1;

        if(arr[str.charCodeAt(i)] > arr[maxi]){
            maxi = str.charCodeAt(i);
        }
    }

    // for (let i = 1; i <= 127; i++) {
    //     if(arr[i] > arr[maxi]){
    //         maxi = i;
    //     }
    // }

    return String.fromCharCode(maxi);
}


function compressString(str){
    var newstr = ""
    var currChar = str[0];
    var count = 1;

    for (let i = 1; i < str.length; i++) {
        
        if(str[i] === currChar){
            count++;
        }else{
            newstr += currChar;
            if(count > 1){
                newstr += count;
            }

            currChar = str[i];
            count = 1;
        }
    }

    newstr += currChar;
    if(count > 1){
        newstr += count;
    }

    return newstr;
}

console.log(compressString("aaabbbbccc"));



// console.log(minmax([1,2,44,7,336,5,46,2]))
//  console.log(countWords(" I   Am  Sahil "));