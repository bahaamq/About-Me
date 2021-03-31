'use strict'

let score = 0;
let userName = function () {
    let user = prompt('What\'s your name')
    return user
}

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
        score++;
    }
    else {
        alert('you are wrong!')
    }
}
question1();


// // Question two
function question2(){
let questionTwo = validateAnswer('im 23')
if (questionTwo) {
    alert('you  are wrong i\'m 24')
}

else {
    alert('you are correct i am not 23')
    score++;
}
}
question2();
// //Question three
function question3(){
let questionThree = validateAnswer('I love action movies')
if (questionThree) {
    alert('you  are wrong i love mystery')
}
else {
    alert('you are correct!')
    score++;
}
}
question3();

// //Question Four
// let questionFour = validateAnswer('I love walking!')
// if (questionFour) {
//     alert('you  are right what a good sport!')
//     score++;
// }
// else {
//     alert('you are wrong i truly love to walk!')
// }

// //Question Five
// let questionFive = validateAnswer('I know you')

// if (questionFive) {
//     score++
//     alert('you  are right! , i only sent this to people that i know')
// }
// else {
//     alert('you are wrong my friend!')
// }

// //Question 6 - Guess the num call

//Question - 7 Guess t=my fav food.

//Guess the number
function question6() {

    let attempts = 4
    let num = 3
    let userNum = ""
    for (let i = 0; i < 4; i++) {
        userNum = prompt('Guess the number from 1-10')
        if (isNaN(userNum)) {
            attempts--
            alert(`ur wrong ,you still have ${attempts}`)
            continue
        }
        else if (userNum < num) {
            attempts--
            alert(`too low ,you still have ${attempts}`)
            continue
        }
        else if (userNum > num) {
            attempts--
            alert(`too High, you still have ${attempts}`)
            continue
        }
        else {
            alert(`Thanks you are right   ${num}`)
            score++
            break
        }
    }
    if (attempts <= 0) {
        alert(`the right answer was ${num}`)
    }
}
question6();

function question7() {
    let food = ['pizza', 'mansaf', 'makloba', 'egg', 'Koftah', 'kbseh'];

    let attempts2 = 6
    let loop2 = true
    let favFoodUser = prompt('Can you guess what is my fav food ?')
    for (let i = 0; i < 6; i++) {


        favFoodUser = favFoodUser.toLowerCase()
        for (let j = 0; j < 6; j++) {
            if (favFoodUser == food[j]) {
                alert('Amazing you are right')
                score++;
                alert(`i love these foods ! (possible correct answers were!) ${food}`)
                loop2 = false
            }
            if (loop2 == false) {
                break;
            }
        }

        if (loop2 == false) {
            break;
        }


        attempts2--
        favFoodUser = prompt(`you are wrong you still have ${attempts2}Can you guess one of   my fav foods ?`)
    }
}

question7();



//Final Result
// alert(`your result is ${score}/7`)