function rectangle (length, width){
  if (length > 0 && width > 0){
  let area = length * width
  return area
  }
}

function triangle (base, height){
  if (base > 0 && height > 0){
    let area = base * height * 0.5
    return area
  }
 
}

function circle (radius) {
  if (radius > 0 ){ 
    let area = Math.PI * Math.pow(radius,2)
    return area} 
 
}

console.log(rectangle(10, 5));     // should print 50
console.log(rectangle(1.5, 2.5));  // should print 3.75
console.log(rectangle(10, -5));    // should print undefined

console.log(triangle(10, 5)); // should print 25
console.log(triangle(3, 2.5)); // should print 3.75
console.log(triangle(10, -5)); // should print undefined

console.log(circle(10)); // should print 314.159...
console.log(circle(3.5)); // should print 38.484...
console.log(circle(-1)); // should print undefined