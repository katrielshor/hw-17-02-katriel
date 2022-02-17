
//ex 1
    const getEvenNum = (min, max) => {

        const myPromise = new Promise((resolve, reject) => {
    
            let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    
            if (rundomNumber % 10 === 7 || rundomNumber % 7 === 0) {
                resolve(rundomNumber)
            } else {
                reject(rundomNumber)
            }
        })
        return myPromise
    }
    let first = 4
let last = 40
getEvenNum(first, last)

    .then((num) => {
       console.log('green');
        console.log(num)
    })
    .catch((num) => {
        console.log("red");
        console.log(num)
    })

//ex2


const getPrimeNum = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        for (let i = 2; i < rundomNumber; i++) {
            if (rundomNumber % i === 0) {
                reject(rundomNumber)
            } else {
                resolve(rundomNumber)
            }
        }
    })
    return myPromise
}

const   set =  setTimeout(() => {

    let first = 122
    let last = 1222
    getPrimeNum(first, last)

        .then((num) => {
            console.log('green2');
            console.log(num)
        })
        .catch((num) => {
            console.log('red2');
            console.log(num)
        })
}, 1000);

