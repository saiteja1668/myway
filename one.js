let pNo = '9121348041'
let sum = 0;
for(let i = 0 ; i< pNo.length ; i++){
  console.log(pNo[i])
 sum = sum+ parseInt(pNo[i])

}
let c = ""
for(let i = 1; i<=sum ; i++){
  if (i%4 === 0 && i%5 === 0){
    c=c+"FizzBuzz "
  }
  else if (i%4 === 0){
    c=c+"Fizz "
  }
  else if (i%5 === 0){
    c=c+"Buzz "
  }
  else{
    c=c+`${i} `
  }
}
console.log(c)