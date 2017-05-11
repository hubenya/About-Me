// //'use strict' ;
function userFun() {

var user = prompt('What is your name?');
  console.log('user:' + user);
  alert('Hi there, ' + user + ', I\'m going to ask you few question about me.');
}
userFun();

function birthplaceFun(){

var birthplace = prompt(', this is a yes/no question.  Please answer with Yes or No. Was, I born in US?').toUpperCase();
  console.log('user birthplace:' + birthplace);
    if (birthplace === 'YES') {
    alert('Nice try, but I was born in Ukraine.');
    } else if (birthplace === 'NO') {
    alert('Greate Job!!! You are correct, I was born outside of US.');
    } else {
    alert(' It appears that you did not answer the question.');
    }
  }
  birthplaceFun();

function movedToUsFun(){

var movedToUs = prompt('This is a yes/no question just like previous. Take your best guess, do you think I moved to US before my 10th birthday?').toUpperCase();
  console.log('user movedToUs:' + movedToUs);
    if (movedToUs === 'YES') {
    alert('Nice try, I moved to US in 2003.');
    } else if (movedToUs === 'NO') {
    alert('Good Job!!! You guessed right.');
    } else {
    alert(' It appears that you did not answer the question.');
    }
  }

  movedToUsFun();

  function highSchoolFun(){

var highSchool = prompt('What year do you think I graduated from high school?  I will give you few hints 2001, 2007, 2015');
  console.log('user highSchool:' + highSchool);
    if (highSchool === '2007') {
    alert('Nice job. How did you know? Where you in my class?');
    } else if (highSchool === '2001' || '2015') {
    alert('Nice try but I graduated in 2007.');
    } else {
    alert(' It appears that you did not answer the question.');
    }
  }

  highSchoolFun();

  function kidsFun(){

var kids = prompt('This is a yes/no question. Do you think I have kids?').toLowerCase();
  console.log('user kids:' + kids);
    if (kids === 'yes') {
    alert('You are correct, I have one baby girl.');
    } else if (kids === 'no') {
    alert('Nice try but I actually do.');
    } else {
    alert(' It appears that you did not answer the question.');
    }
  }
  kidsFun();

  function funFactFun(){

var funFact = prompt('Do you think I like fishing or snowboarding?').toLowerCase();
  console.log('user funFact:' + funFact);
    if (funFact === 'fishing' && 'snowboarding') {
    alert('Nice try but I don\'t do either of them.');
    } else {
    alert(' It appears that you did not answer the question.');
  }
}
  fuNFactFun();

here is where i added for loop this is a success
i have tried few thing to give user an error when entering text input
function myFavNumberFun(){

var myFavNumber = 7;

for (var i=0; i < 4; i++){
  var answer = parseInt(prompt('Do you know my favorite numner between 0 & 10?'));
  console.log('number:' + answer);
  if (answer < myFavNumber) {
    alert('You are a little too low with your answer :\(');
  } else if (answer > myFavNumber) {
    alert('Your answer is a little too hight :\(');
    //this logic is not working
  } else if (answer === NaN && answer === null) {
    alert('Please enter a number please');
    counter++;
  } else {
    alert('You got it right my number is 7.');
    break;
  }
}
}
  myFavNumberFun();
here is where i added while loop this is a success

function carNameFun(){
var carName = ['toyota', 'dodge', 'acura'];
var userAnswer = 0;
var counter = 1;

while(userAnswer < 6){
  var answer = prompt('What car brans do you think I own?').toLowerCase();
  for (var i=0; i < carName.length; i++) {
    console.log(carName);
    if (carName[i] === answer) {
      alert('Good guess, I do own ' + answer + '. It appears that you have tried ' + counter + '.');
      userAnswer = 6;
      break;
    }
  }
  userAnswer++;
  if (userAnswer < 6){
    alert('You were so close but try again');
    counter++;
    //after few hours i got this to work but not fully. this was part of our requirement
  } else if (userAnswer > 6 || answer !== carName[i]) {
    alert('It appears that you have tried over ' + counter + ' times and there are no more tries. Sorry!!!');
    break;
  }
console.log(answer);
console.log(userAnswer);
}
}
carNameFun();
