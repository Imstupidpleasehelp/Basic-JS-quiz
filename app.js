const correctAnswers = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

// dont forget the . when referencing classes. 
// create an array with the value of right answers 

// submitting the user answers 
form.addEventListener('submit', e => {
e.preventDefault();

let score = 0; 
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

// check answers 
userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
        score += 25; 
    } 
});

//showing score 
scrollTo(0,0);
result.querySelector('span').textContent = `${score}%`;
result.classList.remove('d-none');
  
  let output= 0;
  const timer = setInterval(() => {
result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer)
    }
    else {
      output++;
    }
  }, 10);
  
});

// window object everything is stored in the window 

//animation 

/* setInterval(() => {
console.log('hello')
}, 1000);
*/ 
// stop intervals by assigning it to a const then use clearInterval()