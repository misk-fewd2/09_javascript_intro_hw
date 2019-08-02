for(var userNumber =0 ; userNumber <=100 ; userNumber++){
    if (userNumber % 5 == 0 && userNumber % 3 == 0) {
      console.log("FizzBuzz");
    } else if (userNumber % 5 == 0) {
      console.log("Buzz");
    } else if (userNumber % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(userNumber);
    }
        }