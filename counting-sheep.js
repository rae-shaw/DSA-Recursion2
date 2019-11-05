const sheepCount = function(num) {
  if (num === 0 ){
    return 'All sheep jumped over the fence'
  }
  return `${num}:Another sheep jumps over the fence` + sheepCount(num - 1);

}

let three = 3

console.log(sheepCount(3))