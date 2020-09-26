
module.exports = function transform(arr ) {
  if(!Array.isArray(arr)) throw Error("Error");
  let newArr = []
  let aLength = arr.length;

  for (let i = 0; i < aLength; i++){
    if(i === 0 && (arr[i] === "--discard-prev" || arr[i] === "--double-prev" )) 
      continue;
    if(arr[i] === "--discard-next" 
    || arr[i-1] === "--discard-next" 
    || arr[i] === "--discard-prev" 
    || arr[i+1] === "--discard-prev")
      continue;    
    if(arr[i] === "--double-next"){
      newArr.push(arr[i + 1]);
      continue;
    }
    if(arr[i] === "--double-prev"){
      newArr.push(arr[i-1]);continue;
    } 
      newArr.push(arr[i]);
  }

  return newArr.filter(item => item != undefined);
};
