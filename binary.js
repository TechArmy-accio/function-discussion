

// 5 =>             0101


// 6



let n = "00010100110010011001" 
// n = +n // binary to decimal => 
    let sum = 0
let x = 0
for(let i = n.length-1; i>=0; i--){
       sum =  sum + n[i] * 2**x 
       x++
 }
 console.log(sum)



// console.log(parseInt(n))

//     let sum = 0
//     let x = 0
//     while(n>0){
//         let last  = n%10 
//         sum = sum + last * (2**x)
//         console.log(last, sum)
//         n = parseInt(n/10)
//         x++
//     }

//     console.log(sum)