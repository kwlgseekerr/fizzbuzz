for (let game = 1; game <= 100; game++) {
if (game % 3 === 0 && game % 5 == 0){
  console.log('FizzBuzz');
} else if (game % 5 === 0){
  console.log('Buzz');
} else if (game % 3 === 0){
  console.log('Fizz');
} else { 
  console.log(game);
  }
}