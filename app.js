'use strict' ;
/*
var user = prompt('What is your name?');
  console.log('user:' + user);
  alert('Hi there, ' + user + ', I\'m going to ask you few question about me.');

var birthplace = prompt(user + ', this is a yes/no question.  Please answer with Yes or No. Was, I born in US?').toUpperCase();
  console.log('user birthplace:' + birthplace);
    if (birthplace === 'YES') {
    alert('Nice try, but I was born in Ukraine.');
    } else if (birthplace === 'NO') {
    alert('Greate Job!!! You are correct, I was born outside of US.');
    } else {
    alert(user + ' It appears that you did not answer the question.');
    }

var movedToUs = prompt('This is a yes/no question just like previous. Take your best guess, do you think I moved to US before my 10th birthday?').toUpperCase();
  console.log('user movedToUs:' + movedToUs);
    if (movedToUs === 'YES') {
    alert('Nice try, I moved to US in 2003.');
    } else if (movedToUs === 'NO') {
    alert('Good Job!!! You guessed right.');
    } else {
    alert(user + ' It appears that you did not answer the question.');
    }

var highSchool = prompt('What year do you think I graduated from high school?  I will give you few hints 2001, 2007, 2015');
  console.log('user highSchool:' + highSchool);
    if (highSchool === '2007') {
    alert('Nice job. How did you know? Where you in my class?');
    } else if (highSchool === '2001' || '2015') {
    alert('Nice try but I graduated in 2007.');
    } else {
    alert(user + ' It appears that you did not answer the question.');
    }

var kids = prompt('This is a yes/no question. Do you think I have kids?').toLowerCase();
  console.log('user kids:' + kids);
    if (kids === 'yes') {
    alert('You are correct, I have one baby girl.');
    } else if (kids === 'no') {
    alert('Nice try but I actually do.');
    } else {
    alert(user + ' It appears that you did not answer the question.');
    }

var funFact = prompt('Do you think I like fishing or snowboarding?').toLowerCase();
  console.log('user funFact:' + funFact);
    if (funFact === 'fishing' && 'snowboarding') {
    alert('Nice try but I don\'t do either of them.');
    } else {
    alert(user + ' It appears that you did not answer the question.');
  }

// this is my for loop using car brands.
var favCarBrand = ['Toyota', 'Honda', 'RAM', 'Acura', 'Nissan', 'Tesla'];
var answer = prompt('What is my favorite car maker brand?');
var flag;

for (var i=0; i < favCarBrand.length; i++){
  console.log('current thing:', favCarBrand[i]);
  if (answer === favCarBrand[i]){
    alert('Nice job! You know what my fav car brand is!');
    flag = true;
    break;
  }

}

if (!flag) {
  alert('Nope - you are wrong!');
}*/
// here is where i added while loop
var number;
var counter = 1;

while (number !== 2007) {
  number = parseInt(prompt('Do you remember what year I graduated from school? It was one of earlier questions.'));
  //number = prompt('Do you rememner what year I graduated from school? It was one of the questions earlier.');

  if (number < 2007) {
    alert('You are a little too low with your answer :\(');
    counter++;
  } else if (number > 2007) {
    alert('Your answer is a little too hight :\(');
    counter++;
  } else if (number === NaN || number === null) {
    alert('enter a number pleas');
    counter++;
  }else {
    alert('I want to congradulate you on remembering the year I graduated.')

  }
}

console.log('counter', counter);
  alert('counter');
