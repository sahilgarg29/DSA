for(var j = 0; j<k-3; j++){
          if((matrix[j][j] === 's') && (matrix[j+1][j+1] === 'a') && (matrix[j+2][j+2] === 'b') && (matrix[j+3][j+3] === 'a')){
              count++;

            }
      		if((matrix[n-j-1][j] === 's') && (matrix[n-j-2][j+1] === 'a') && (matrix[n-j-3][j+2] === 'b') && (matrix[n-j-4][j+3] === 'a')){
              count++;

            }
        }