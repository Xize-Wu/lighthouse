function howManyHundreds(num){
  let hundred = num / 100
  hundred = Math.trunc(hundred)
  return hundred
}

console.log(howManyHundreds(2222))