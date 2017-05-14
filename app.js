'use strict' ;

var user = prompt('What is your name?');
console.log('user:' + user);

alert('Hi there, ' + user + ', I\'m going to ask you few question about me.');

var birthplace = prompt('This is a yes/no question.  Please answer with Yes or No. Was, I born in US?').toUpperCase();
console.log('user birthplace:' + birthplace);

if (birthplace === 'NO' || birthplace === 'N') {
  alert('Greate Job!!! You are correct, I was born outside of US.');
} else if (birthplace === 'YES' || birthplace === 'Y') {
  alert('Nice try, but I was born in Ukraine.');
} else {
  alert('It appears that you did not answer the question.');
}

var movedToUs = prompt('This is a yes/no question just like previous. Take your best guess, do you think I moved to US before my 10th birthday?').toUpperCase();
console.log('user movedToUs:' + movedToUs);

if (movedToUs === 'YES' || movedToUs === 'Y') {
  alert('Nice try, I moved to US in 2003.');
} else if (movedToUs === 'NO' || movedToUs === 'N') {
  alert('Good Job!!! You guessed right.');
} else {
  alert('It appears that you did not answer the question.');
}

var highSchool = prompt('What year do you think I graduated from high school?  I will give you few hints 2001, 2007, 2015');
console.log('user highSchool:' + highSchool);

if (highSchool === '2007') {
  alert('Nice job. How did you know? Where you in my class?');
} else if (highSchool === '2001' || '2015') {
  alert('Nice try.');
} else {
  alert('It appears that you did not answer the question.');
}

var kids = prompt('This is a yes/no question. Do you think I have kids?').toLowerCase();
console.log('user kids:' + kids);

if (kids === 'yes' || kids === 'y') {
  alert('You are correct, I have one baby girl.');
} else if (kids === 'no' || kids === 'no') {
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

var myFavNumber = 7;

for (var i=0; i < 4; i++){
  var answer = parseInt(prompt('Do you know my favorite number between 0 & 10?'));
  console.log('number:' + answer);
  if (answer < myFavNumber) {
    alert('You are a little too low with your answer :\(');
  } else if (answer > myFavNumber) {
    alert('Your answer is a little too hight :\(');
//this logic is not working
  } else if (answer === NaN && answer === null) {
    alert('Please enter a number please');
  } else {
    alert('You got it right my number is 7.');
    break;
  }
}

//here is where i added while loop this is a success

var carName = ['toyota', 'dodge', 'acura'];
var userAnswer = 0;
var counter = 1;

while(userAnswer < 6){
  var answer1 = prompt('What car brands do you think I own?').toLowerCase();
  for (var j=0; j < carName.length; j++) {
    console.log(carName);
    if (carName[j] === answer1) {
      alert('Good guess, I do own ' + answer1 + '. It appears that you have tried ' + counter + '.');
      userAnswer = 5;
      break;
    }
  }
  userAnswer++;
  if (userAnswer < 6){
    alert('You were so close but try again');
    counter++;
  //after few hours i got this to work but not fully. this was part of our requirement
  } else if (answer1 > 6) {
    alert('It appears that you have tried over ' + counter + ' times and there are no more tries. Sorry1!!!');
    break;
  } else if (userAnswer > 6) {
    alert('It appears that you have tried over ' + counter + ' times and there are no more tries. Sorry!!!');
    break;

  }
  console.log(answer1);
  console.log(userAnswer);
}
