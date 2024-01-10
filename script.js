const question = document.querySelector('.question');
const buttons = document.querySelectorAll('.button');
const optionA = document.querySelector('.optionA');
const optionB = document.querySelector('.optionB');
const optionC = document.querySelector('.optionC');
const optionD = document.querySelector('.optionD');

// Fetch data from json file
const data = fetch('./questions.json')
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

var questionIndex = 0;

// Display Question
const displayQuestion = async () => {
    const questions = await data;
    
    // Get Random Question Index
    questionIndex = Math.floor(Math.random() * questions.length)

    // Populate HTMl element with question and options
    question.innerHTML = questions[questionIndex].question;
    optionA.innerHTML = questions[questionIndex].A;
    optionB.innerHTML = questions[questionIndex].B;
    optionC.innerHTML = questions[questionIndex].C;
    optionD.innerHTML = questions[questionIndex].D;
}

// Display First Question
displayQuestion();

buttons.forEach(button => {
    button.addEventListener('click', async (event) => {
        const questions = await data;
        event.target.value == questions[questionIndex].answer
            ? alert("🟢 You got it!") 
            : alert("🔴 Wrong Answer!");
        
        // Get Random Question Index
        questionIndex = Math.floor(Math.random() * questions.length);
        
        // Display Next Question
        displayQuestion();
    })
})