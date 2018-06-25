(function() {

function Question(question, options, correct) {
  this.question = question;
  this.options = options;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
 console.log(this.question);
 for (var i = 0; i < this.options.length; i++) {
   console.log(i + 1 + ":" + this.options[i]);
 }
}

Question.prototype.displayScore = function() {
  var score = 0;
}

Question.prototype.checkAnswer = function(ans, callback) {
  var sc;

  if (parseInt(ans) == this.correct) {
    console.log("Correct answer! Your score is " + score);
    sc = callback(true);

  } else {
    console.log("Wrong answer. Try again:");
    sc = callback(false);
  }

  this.displayScore(sc);
}

var score = 0;
var questionPinguin = new Question('What is Pinguin', ["a fish", "a bird", "a Mammal"], 2);
var questionWoodpecker = new Question('What is Woodpecker', ["a fish", "a bird", "a Mammal"], 2);

var questions = [questionPinguin, questionWoodpecker];

functon nextQuestion() {
  var n = Math.floor(Math.random()*questions.length);

  questions[n].displayQuestion();

  var answer = prompt('Please select the corret answer.');

  questions[n].checkAnswer(answer);
}

nextQuestion();

})();
