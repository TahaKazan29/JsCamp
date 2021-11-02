//Is the number prime?
const findPrime = (...numbers) => {
    numbers.map(number => {
        let isPrime = primeOrNotPrime(number)
        console.log(isPrime ? `${number} is a prime number " ` : `${number} is not a prime number `)
    })
}

const primeOrNotPrime = (number) => {
    let isPrime = true
    if(number < 2) {
        isPrime = false
    }
    else {
        for (let i = 2; i < number; i++) {
            if(number % i == 0){
                isPrime = false
            }
        }
    }
    return isPrime;
}


//Is the numbers friends ? 
const friendNumbers = (number1,number2) => {
    let total1 = 0 ,total2 = 0  
    for (let i = 1; i < number1; i++)
    {
        if (number1 % i == 0)
        {
            total1+=i
        }
    }
    for (let i = 1; i < number2; i++)
    {
        if (number2 % i == 0)
        {
            total2+=i
        }
    }
    console.log(total2 == number1 && total1 == number2 ?  `${number1} ve ${number2} friend numbers` : `${number1} ve ${number2} not friend numbers`)

}


// Let's find the prime numbers up to 1000
const primeNumbersUpTo1000 = () => {
    let primeNumbers = []
    for (let i = 1; i <= 1000; i++) {
        let isPrime = primeOrNotPrime(i);
        isPrime && primeNumbers.push(i);
    }
    console.log(`prime numbers up to 1000 : ${primeNumbers}`)
}

// Let's find the perfect numbers up to 1000
const perfectNumbersUpTo1000 = () => {
    let perfecNumbers = []
    for (let i = 1; i <= 1000; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if(i % j == 0){
                total += j
            }
        }
        i == total && perfecNumbers.push(i)
    }
    console.log(`perfect numbers up to 1000 : ${perfecNumbers}`)
}


findPrime(2,5,8,21,13,23,43,73)
friendNumbers(284,220)
primeNumbersUpTo1000()
perfectNumbersUpTo1000()