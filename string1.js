function minLenWord(str){
    var minWord = "";
    var minWordLen = 99999;
    var currWord = "";

    for (let i = 0; i <= str.length; i++) {
        if(str[i] === " " || i === str.length){
            
            if(currWord.length < minWordLen){
                minWord = (' ' + currWord).slice(1);
                minWordLen = minWord.length;
                //console.log(minWord);
            }
            currWord = "";
        }else{
            currWord += str[i];
           // console.log(currWord);
        }
    }

    return minWord;
}

console.log(minLenWord("Am Sahil cdsa nsi ah a"));