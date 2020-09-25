
module.exports = function transform(arr ) {
  if(!arr) throw Error("Error");
  let newArr = []
  let aLength = arr.length;

  for (let i = 0; i < aLength; i++){
    if(i === 0 && (arr[i] === "--discard-next" 
    || arr[i] === "--double-prev" 
    || arr[i] === "--discard-prev")) 
      continue;
    if(arr[i] === "--discard-next" 
    || arr[i-1] === "--discard-next" 
    || arr[i+1] === "--double-prev" 
    || arr[i] === "--discard-prev" 
    || arr[i+1] === "--discard-prev"){
      continue;
    }
    if(arr[i] === "--double-next"){
      newArr.push(arr[i + 1]);
      continue;
    }
    if(arr[i+1] === "--double-prev"){
      newArr.push(arr[i]);continue;
    }    
      newArr.push(arr[i]);
  }

  return newArr;
};
