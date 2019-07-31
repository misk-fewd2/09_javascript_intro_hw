// console.log("Loaded!");

// const firstWord = "Please";
// const secondWord = "squeeze";
// const thirdWord = "the";
// const fourthWord = "cheese";

// // console.log(firstWord + " " + secondWord + " " +thirdWord + " " + fourthWord);

// const num1 = 5;
// const num2 = 10;
//var num3 = num1+num2
//console.log("The sum of " + num1 +" and " + num2 + " is " + num3);


//var num = prompt("Please enter a number : ");

myFunction (15);


function myFunction(num){
    for ( var x=0 ; x <= num ; x++) {
        if ((x%3==0)&(x%5==0))
        console.log( " FizzBuzz");
        else if ( x%3==0)
        console.log("Fizz");
        else if (x%5 ==0)
        console.log("buzz");
        else 
        console.log(x);
        }
}


