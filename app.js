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
*/
// this is my for loop using fav number brands.
/*
var cars = ["honda", "toyota", "acura", "nissan"];
var userAnswer = 0;

while(userAnswer < 6) {
  var cars = prompt('What is one car brand that you think I own?');
  for (var i=0; i < cars.length; i++) {
    console.log(cars);
    if (cars[i] === userAnswer){
      alert('You got it right!');
      userAnswer + 1;
      alert('Nice job! you know what my fav thing is!');
      break;

    }
  }
  if (userAnswer !== cars) {
  alert('Nope - you are wrong!');
}
}

*/
// here is where i added while loop
var favNumber = 7;
var counter =

for (var i=0; i < 4; i++) {
  var answer = prompt('Do you know my favorite numner?');


  if (favNumber < 7) {
    alert('You are a little too low with your answer :\(');
    counter++;
  } else if (favNumber > 7) {
    alert('Your answer is a little too hight :\(');
    counter++;
  } else if (favNumber === NaN || favNumber === null) {
    alert('enter a number pleas');
    counter++;
  }else {
    alert('I want to congradulate you on guessing my favNumber. I can see that you have tried to guess this ' + counter + ' times.')

  }
}

console.log('counter', counter);
  //alert('counter');
