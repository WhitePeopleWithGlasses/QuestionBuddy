// Array of Questions and Answers
var questionsArray = [
              ["What is your mother's maiden name?", "Lake"],
              ["What was your first pet's name?", "Paris"],
              ["What do you use to brush your teeth?", "Toothbrush"],
              ["What street did you grow up on?", "Hampton"],
              ["Who was your childhood hero?", "Xena"],
              ["In which drawer do you keep your dish towels?", "Top"],
              ["In what year was your first child born?", "1991"]
            ];

function getQuestions() {
  var arrayLength = questionsArray.length;
  var questionSet = [];
  var rand = questionsArray[Math.floor(Math.random() * arrayLength);

  for(var i = 0; i < 4; i++) {
    questionSet.push("<h1>" + questionsArray[rand][0] + "</h1><br>");
  }

  document.getElementById('questionOutput').innerHTML += questionSet.toString();
}
