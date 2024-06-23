const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate_nCr(n, r) {
    // write code here
      let ncr = factorial(n)/ (factorial(r) * factorial(n-r))
      return ncr
  }
  
  
  function factorial(n){
     let fact = 1
      for(let i = 1; i<=n;i++){
            fact = fact *i
      }
      // console.log(fact)
      return fact
      
  }
  
  readline.question('', input => {
    const [n, r] = input.split(' ').map(Number);
    const ans = calculate_nCr(n, r);
    console.log(ans);
    readline.close();
  });