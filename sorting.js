
//Descending order and remove all prime numbers

const arr = [1, 3, 6, 2 ,7 ,4 ,11 ,20];
const isPrime = n => {
   if (n===1){
   return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return false;
         }
      }
      return true;
   };
};
const filterPrime = arr => {
   const filtered = arr.filter(el => !isPrime(el));
   return filtered;
};

arr.sort(function(a, b){return b - a});

console.log(filterPrime(arr));
