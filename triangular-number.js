function triangularNum(n){
 if(n <= 1){
  return n 
 }else{
  return n + triangularNum(n - 1)
 }
}
triangularNum(7)