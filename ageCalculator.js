function ageCalculator(name, yob, year){
  age = year - yob
  return name + " is " + age + " years old." 
}

console.log(ageCalculator("Miranda", 1983, 2015))