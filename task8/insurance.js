// connect to html file

let current;

const insuranceRisk = () => {
    let score = 500;
    // const age1 = document.querySelector('#age1');
    // const age2 = document.querySelector('#age2');
    // const age3 = document.querySelector('#age3');
    // const age4 = document.querySelector('#age4');
    // const age5 = document.querySelector('#age5');
    // const age6 = document.querySelector('#age6');
    // const age7 = document.querySelector('#age7');
    const age = document.querySelector('#age').value;

    // const current1 = document.querySelector('#current1');
    // const current2 = document.querySelector('#current2');
    // const current3 = document.querySelector('#current3');

    const name = document.querySelector('#name').value; 

    const answer = document.querySelector('#answers');
    if (!age) {
        answer.innerHTML = 'Please write your age';
        return;
    }
    if (age != Number(age)) {
        answer.innerHTML = 'Please write numbers in "Your age';
        return;
    }
console.log(name);

let score_age;

console.log(age);

if (age < 18) {
    score_age = score;
    console.log(score_age);
} else if (age >= 18 && age <= 25) {
    score_age = score + (score*0.1);
    console.log(score_age);
} else if (age >= 26 && age <= 35) {
    score_age = score + (score*0.3);
    console.log(score_age);
} else if (age >= 36 && age <= 45) {
    score_age = score + (score*0.6);
} else if (age >= 46 && age <= 55) {
    score_age = score + (score*1);
    console.log(score_age);
} else if (age >= 56 && age <= 65) {
    score_age = score + (score*1.5);
    console.log(score_age);
} else if (age >= 66) {
    score_age = score + (score*2.1);
    console.log(score_age);
}

let score_current = score_age;

let checkboxes = document.querySelectorAll('input[name="current"]');
let values = [];
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
        values.push(checkboxes[i].value);
        score_current = score_current + (score_age*0.01);
    }
}
console.log(values)
console.log(score_current)

// if (current1.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current1.value
//     console.log(score_current);
// }
// if (current2.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current + '' + current2.value
//     console.log(score_current);
// }
// if (current3.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current + ', ' + current3.value
//     console.log(score_current);}

let score_goodHabits = score_age;
let score_gap = score_age*0.05;
let checkboxes_goodHabits = document.querySelectorAll('input[name="good_habits"]');
let valuesHabits = [];
for (let i = 0; i < checkboxes_goodHabits.length; i++) {
    if (checkboxes_goodHabits[i].checked == true) {
        valuesHabits.push(checkboxes_goodHabits[i].value);
        score_goodHabits = score_goodHabits - score_gap
    }
}
console.log(valuesHabits);
console.log(score_goodHabits);

let count = 0;
let score_badHabits = score_goodHabits;
let checkboxes_badHabits = document.querySelectorAll('input[name="bad_habits"]');
let valuesBadHabits = [];
for (let i = 0; i < checkboxes_badHabits.length; i++) {
    if (checkboxes_badHabits[i].checked == true) {
        valuesBadHabits.push(checkboxes_badHabits[i].value);
        count++;
        score_badHabits = score_goodHabits + score_gap*count;
    }
}
console.log(valuesBadHabits);
console.log(score_badHabits);
 
let totalscore;
totalscore = score_badHabits + (score_current - score_age);

answer.innerHTML = `${name}, You chose age: ${age} <br> Your current health: ${values} 
<br> Your good health habits: ${valuesHabits} 
<br> Unhealthy Habits: ${valuesBadHabits}<br> Your riskscore: ${totalscore}`;
}

const nameSelect = document.querySelector('#name');
nameSelect.addEventListener('change', insuranceRisk);

const ageSelect = document.querySelector('#age');
ageSelect.addEventListener('change', insuranceRisk);

const currentCheckboxes = document.querySelectorAll('input[name="current"]');
for (const i of currentCheckboxes) {
    i.addEventListener('click', insuranceRisk);
};

const goodHabitsCheckboxes = document.querySelectorAll('input[name="good_habits"]');
for (const i of goodHabitsCheckboxes) {
    i.addEventListener('click', insuranceRisk);
};

const badHabitsCheckboxes = document.querySelectorAll('input[name="bad_habits"]');
for (const i of badHabitsCheckboxes) {
    i.addEventListener('click', insuranceRisk);
};
