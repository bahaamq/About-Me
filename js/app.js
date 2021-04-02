'use strict'

//Responsible For Global variable to calculate the correct answers.
let score = 0

//Responsible For returninng 
let userName = function () {
    let user = prompt('What\'s your name')
    return user
}


// Responsible For Validating all (y/n)Questions (1-5).
let validateAnswer = function (question) {
    let questionContainer = ""
    // flag to break from the loop
    let answer = true
    // to force user to enter y or yes // n or no
    while (answer) {

        questionContainer = prompt(question)
        questionContainer = questionContainer.toLowerCase()
        if (questionContainer === 'y' || questionContainer === 'yes') {
            questionContainer = 'yes'
            answer = false
            break
        }
        else if (questionContainer === 'n' || questionContainer === 'no') {
            questionContainer = 'no'
            answer = false
            break
        }
        else {
            alert('Please Answer with (yes or y),(no or n)')
        }

    }
    // to return a value then check if it's correct
    if (questionContainer === 'yes') {
        return true
    }
    else if (questionContainer === 'no') {
        return false
    }


}

//Welcome Message
alert('Hello ' + userName())
// Question one 
function question1() {

    let questionOne = validateAnswer('My name is Bahaa ?')
    if (questionOne) {
        alert('you  are correct!')
        score++
    }
    else {
        alert('you are wrong!')
    }
}


// // Question two
function question2() {
    let questionTwo = validateAnswer('im 23')
    if (questionTwo) {
        alert('you  are wrong i\'m 24')
    }

    else {
        alert('you are correct i am not 23')
        score++
    }
}
// //Question three
function question3() {
    let questionThree = validateAnswer('I love action movies')
    if (questionThree) {
        alert('You  are wrong i love mysteries!')
    }
    else {
        alert('You are correct!')
        score++
    }
}

// //Question Four
function question4() {
    let questionFour = validateAnswer('I love walking!')
    if (questionFour) {
        alert('You  are right what a good sport!')
        score++
    }
    else {
        alert('You are wrong i truly love to walk!')
    }
}
// //Question Five
function question5() {
    let questionFive = validateAnswer('I know you')

    if (questionFive) {
        score++
        alert('You  are right! , i only sent this to people that i know')
    }
    else {
        alert('You are wrong my friend!')
    }
}

//Guess the number - Question 6
function question6() {

    let attempts = 4
    let num = 3
    let userNum = ""
    for (let i = 0; i < 4; i++) {
        userNum = prompt('Guess the number from 1-10')
        if (isNaN(userNum)) {
            attempts--
            alert(`Wrong answer! ,you still have ${attempts} attempts`)
            continue
        }
        else if (userNum < num) {
            attempts--
            alert(`Too low ,you still have ${attempts} attempts `)
            continue
        }
        else if (userNum > num) {
            attempts--
            alert(`Too high, you still have ${attempts} attempts`)
            continue
        }
        else {
            alert(`Thanks you are right ${num} is the correct answer!`)
            score++
            break
        }
    }
    // This will only run if the user lost all attempts without guessing the number
    if (attempts <= 0) {
        alert(`the right answer was ${num}`)
    }
}

//Question - 7 Guess one of my fav snacks.

function question7() {
    let food = ['pizza', 'mansaf', 'makloba', 'egg', 'Koftah', 'kbseh'];

    let attempts = 6
    let favFoodUser = prompt('Can you guess what is my fav food ?')
    loop1:
    for (let i = 0; i < 6; i++) {
        favFoodUser = favFoodUser.toLowerCase()

        for (let j = 0; j < 6; j++) {
            if (favFoodUser == food[j]) {
                alert('Amazing you are right')
                score++;
                alert(`i love these foods ! (possible correct answers were!) ${food}`)
                break loop1;
            }
        }
//As long as the answer is wrong this part will run.
        attempts--
        favFoodUser = prompt(`you are wrong you still have
         ${attempts}attempts ,Can you guess one of my fav foods ?`)
         // End of this part.
    }
}


//Calling functions .
question1()
question2()
question3()
question4()
question5()
question6()
question7()
//Final Result
alert(`Your final result is ${score}/7`)