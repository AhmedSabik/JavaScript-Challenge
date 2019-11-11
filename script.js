function Question (question, answers, correct) {
    
    this.question = question; 
    this.answers = answers;
    this.correct = correct; 
    
}

//Method to display random questions in console using prototype without adding it to Question function  

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
    console.log((i + 1) + " - " + this.answers[i]); 
}
}


// Questions 

var question1 = new Question ("Is JavaScript the coolest langauge in the world?",
                              ["Yes", "No"],
                              0
    ); 

var question2 = new Question ("What does best describe coding?"
                              ["Boring", 
                              "Hard",
                              "Fun",
                              "Tediuos"],
                              2
); 

var question3 = new Question ("Which academy do you learn JavaScript in?"
                             ["CodeAcademy",
                             "W3School",
                             "Udamy"],
                             1
); 

var question4 = new Question ("When are you due to finish your course?"
                              ["January 2020",
                              "February 2020",
                              "March 2020",
                              "April 2020"],
                              3
); 

// Array containing all questions 

var questions = [question1, question2, question3, question4]; 

// Random question 

var pickRandomQuestion = Math.floor(Math.random() * questions.length); 

// Retrieve the random question and call the displayquestion on it 

questions[pickRandomQuestion].displayQuestion();