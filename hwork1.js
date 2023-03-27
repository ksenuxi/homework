let sum = (n) => {
    sum.num +=n;
    return sum;
} 
sum.num = 0;
sum(1)(2);
console.log(sum.num);
