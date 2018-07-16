function Question(questionText, answers, correctAnswer) {

    var answer
    this._alreadyAnswered = false
    this.displayQuestion = function () {
        console.log(`I am going to display the question`)
        console.log(questionText)
    }

    this.displayAnswer = function () {
        console.log(`Answers are, `)
        answers.forEach((e) => console.log(`${e}`))
    }

    this.acceptAnswer = function (option) {
        answer = option
    }

    this.validate = function () {
        if (answer === correctAnswer) {
            console.log(`${answer} is the correct answer`)
        } else {
            console.log(`${answer} is NOT the correct answer`)
        }
    }

    this.displayCorrectAnswer = function () {
        console.log(`${answers[correctAnswer]} is the correct answer!`)
    }
}

function QuestionBank(questions) {

    this.pickAQuestion = function () {
        var random = Math.floor(Math.random() * (questions.length))
        console.log(`random=${random}`)
        console.log(`questions=${questions.length}`)
        return questions[random]
    }
}

var ageQ = new Question('What is your age?', [23, 21, 67], 1);
var heightQ = new Question('What is your height?', [5, 10, 6, 45], 0);
var sizeQ = new Question('What is your sizeQ?', ['l', 'XL', 'S', 'M'], 3);
var eduQ = new Question('What is your education?', ['grad', 'ug', 'hs', 'na'], 2);

var q1 = new QuestionBank([ageQ, sizeQ, heightQ, eduQ]).pickAQuestion()

console.log(`q1 =${q1.questionText}`) //undefined
q1.displayQuestion()
q1.displayAnswer()
q1.acceptAnswer(3)

console.log(`Accepted answer is=${q1.answer}`)
q1.validate()

q1.acceptAnswer(1)
q1.validate()

q1.displayCorrectAnswer()

Question.prototype.logAnswer = function () {
    console.log(`logAnswer=${this.answer}`) //undefined as answer doesn't belong to the object
}
q1.logAnswer()

Question.prototype.isAnswered = function () {
    console.log(`isAnswered=${this._alreadyAnswered}`) //should be able to bind this time
}
q1.isAnswered()