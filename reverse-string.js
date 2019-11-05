function reverseString(str){
  return str.split('').reverse().join('')
}
reverseString('hello')

function reverseString(str){
 if(str === ""){
  return str 
 }else{
  return reverseString(str.substr(1)) + str[0]
 }
}
reverseString('hello')

function reverseString(str){
 return str ? reverseString(str.substr(1)) + str[0] : str
}