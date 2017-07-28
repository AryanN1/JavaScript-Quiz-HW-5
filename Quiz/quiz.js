
var panel = $("#test");

// Questions, Answers and Correnct Answers are put into an Array
var questions = [{
  question: "Galileo was an Italian astronomer who",
  answers: ["Developed the telescope", "Discovered four satellites of Jupiter", "Discovered that the movement of pendulum produces a regular time measurement", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "Which of the following is used in pencils?",
  answers: ["Silicon", "Charcoal", "Graphite", "Silicon"],
  correctAnswer: "Graphite"
}, {
  question: "Who developed Yahoo?",
  answers: ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
  correctAnswer: "David Filo & Jerry Yang"
}, {
  question: "August 20th is celebrated as?",
  answers: ["Earth Day", "Sadbhavana Divas", "No Tobacco Day", "None of the above"],
  correctAnswer: "Sadbhavana Divas"
}];


var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 90,
// This function creates the countdown
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
};