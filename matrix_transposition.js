
const transpose = function(matrix) {
    // Put your solution here
    let newArr=[];
    
    for(let i=0; i<matrix.length;i++){
    
      for(let j=0;j<matrix[i].length;j++){
       if(!newArr[j] ){
         newArr[j]=[];
       }
       newArr[j].push(matrix[i][j]) 
      }
    }
  console.log(newArr);
    return newArr;
  };