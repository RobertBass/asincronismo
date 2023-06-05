const promise = new Promise(function (resolve, reject){
    resolve('OK');
})

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There is ${cows} cows on the farm`);
    }
});

countCows.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));