'use strict'
let userName=function(){
    let user=prompt('What\'s your name')
    return user
}



let firstQuestion=function()
{
    let questionOne= prompt('My name is Bahaa ?')
    questionOne=questionOne.toLowerCase()
    // flag to break from the loop
    let answer=true
    // to force user to enter y or yes // n or no
    while(answer)
    {
        if (questionOne==='y'||questionOne==='yes')
        {
            questionOne='yes'
            answer=false
            break
        }
        else if (questionOne ==='n'||questionOne==='no')
        {
            questionOne='no'
            answer=false
            break
        }
        alert('Please Answer with (yes or y),(no or n)')
        questionOne= prompt('My name is Bahaa ?')
     
    }
// to check the answers is correct or not 
if(questionOne==='yes')
{
    alert('You are Correct!')
}
else if (questionOne==='no')
{
    alert('You are Wrong!')
}


}




let secQuestion=function()
{
    let questionTwo= prompt('I love action movies')
    questionTwo=questionTwo.toLowerCase()
    // flag to break from the loop
    let answer=true
    // to force user to enter y or yes // n or no
    while(answer)
    {
        if (questionTwo==='y'||questionTwo==='yes')
        {
            questionOne='yes'
            answer=false
            break
        }
        else if (questionTwo ==='n'||questionTwo==='no')
        {
            questionTwo='no'
            answer=false
            break
        }
        alert('Please Answer with (yes or y),(no or n)')
        questionTwo= prompt('I love action movies')
     
    }
// to check the answers is correct or not 
if(questionTwo==='no')
{
    alert('You are Correct!')
}
else if (questionTwo==='yes')
{
    alert('You are Wrong!')
}


}


let thirdQuestion=function()
{
    let questionThree= prompt('I love pizza')
    questionThree=questionThree.toLowerCase()
    // flag to break from the loop
    let answer=true
    // to force user to enter y or yes // n or no
    while(answer)
    {
        if (questionThree==='y'||questionThree==='yes')
        {
            questionThree='yes'
            answer=false
            break
        }
        else if (questionTwo ==='n'||questionTwo==='no')
        {
            questionThree='no'
            answer=false
            break
        }
        alert('Please Answer with (yes or y),(no or n)')
        questionThree= prompt('I love pizza')
     
    }
// to check the answers is correct or not 
if(questionThree==='yes')
{
    alert('You are Correct!')
}
else if (questionThree==='no')
{
    alert('You are Wrong!')
}


}


let forthQuestion=function()
{
    let questionFour= prompt('I love walking')
    questionFour=questionFour.toLowerCase()
    // flag to break from the loop
    let answer=true
    // to force user to enter y or yes // n or no
    while(answer)
    {
        if (questionFour==='y'||questionFour==='yes')
        {
            questionFour='yes'
            answer=false
            break
        }
        else if (questionFour ==='n'||questionFour==='no')
        {
            questionFour='no'
            answer=false
            break
        }
        alert('Please Answer with (yes or y),(no or n)')
        questionFour= prompt('My name is Bahaa ?')
     
    }
// to check the answers is correct or not 
if(questionFour==='yes')
{
    alert('You are Correct!')
}
else if (questionFour==='no')
{
    alert('You are Wrong!')
}


}


let fifthQuestion=function()
{
    let questionFive= prompt('I know you')
    questionFive=questionFive.toLowerCase()
    // flag to break from the loop
    let answer=true
    // to force user to enter y or yes // n or no
    while(answer)
    {
        if (questionFive==='y'||questionFive==='yes')
        {
            questionFive='yes'
            answer=false
            break
        }
        else if (questionFive ==='n'||questionFive==='no')
        {
            questionFive='no'
            answer=false
            break
        }
        alert('Please Answer with (yes or y),(no or n)')
        questionFive= prompt('My name is Bahaa ?')
     
    }
// to check the answers is correct or not 
if(questionFive==='yes')
{
    alert('You are Correct! as i only shared this with people i know')
}
else if (questionFive==='no')
{
    alert('You are Wrong!')
}


}


console.log(userName())
firstQuestion()
secQuestion()
thirdQuestion()
forthQuestion()
fifthQuestion()