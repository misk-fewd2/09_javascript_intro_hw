let a = 1;
let b = 'bongos';
let c = true;

a = b;
b = c;
c = a;

console.log(c);

const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";

console.log(firstWord+" "+secondWord+" "+thirdWord+" "+fourthWord);


const num1 = 5;
const num2 = 10;
const num3 = num1+num2;

console.log("The sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+num3)
console.log(9 !== 8 + 1);


function printFizz(number){

    for(var i=0;i<=number;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
    

}