const number = [13, 150, 30, 40, 23, 96];

let lowest;
number.sort(function(a,b)
{return a-b});
lowest = number[0]

console.log(lowest);

let highest;

number.sort(function(a,b)
{return b-a});
highest = number[0]

console.log(highest);
    for(let x=0; x<number.length; x++){
      let sum = (highest + lowest)/2;
      console.log(sum)
    }