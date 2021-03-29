'use strict'

let userName=function(){
    let user=prompt('What\'s your name')
    return user
}

let validateAnswer=function(question)
{
    let questionOne= prompt(question)
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
        questionOne= prompt(question)
     
    }
// to return a value then check if it's correct
if(questionOne==='yes')
{
    return true
}
else if (questionOne==='no')
{
    return false
}


}
//Welcome Message
alert('Hello '+userName())

// Question one 
let questionOne=validateAnswer('My name is Bahaa ?')
if(validateAnswer)
{
    alert('you  are correct!')
}
else
{
    alert('you are wrong!')
}

// Question two
let questionTwo=validateAnswer('im 23')
if(questionTwo)
{
    alert('you  are wrong i\'m 24')
    console.log(va)
}
else
{
    alert('you are correct i am not 23')
}

//Question three
let questionThree=validateAnswer('I love action movies')
if(questionThree)
{
    alert('you  are wrong i love mystery')
}
else
{
    alert('you are correct!')
}

//Question Four
let questionFour=validateAnswer('I love walking!')
if(questionFour)
{
    alert('you  are right what a good sport!')
}
else
{
    alert('you are wrong i truly love to walk!')
}

//Question Five
let questionFive=validateAnswer('I know you')

if(questionFive)
{
    alert('you  are right! , i only sent this to people that i know')
}
else
{
    alert('you are wrong my friend!')
}