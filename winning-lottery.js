function winningLottery(sum, digits){
    if(digits === 1){
        return sum;
    }

    if(sum-1 <= 9){
        //console.log(sum)
        return( (winningLottery(1, digits-1) * 10) + (sum-1))
    }else{
        //console.log(sum)
        return( (winningLottery(sum-9, digits-1) * 10) + 9)
    }

}

console.log(winningLottery(9, 9));