// connect to html file
const decisionMaker = () => {
    // define question and answer
    const question = document.querySelector('#question').value;
    const answer = document.querySelector('#answers');
    
    // define the text that should be present in the response
    let text = '';

    if (question !== '') { 
        // make random numbers
        const randomNumbers = Math.floor(Math.random() * 10) + 1;
        // switch that selects random numbers associated with text
        switch (randomNumbers) {
            case 1:
                text = 'The stars say yes, go for it!';
                break;
            case 2:
                text = 'Trust your instincts and take the leap';
                break;
            case 3:
                text = 'Hmm, better try again later';
                break;
            case 4:
                text = 'Consider all options before making a move??';
                break;
            case 5:
                text = 'Outlook is bright, proceed with confidence';
                break;
            case 6:
                text = 'Seek advice from a trusted friend before deciding';
                break;
            case 7:
                text = 'Signs point to unexpected opportunities';
                break;
            case 8:
                text = "It's a toss-up, make a choice and see what happens";
                break;
            case 9:
                text = 'Take a step back and reassess before moving forward';
                break;
            case 10:
                text = "Not the right time, patience will bring better results";
                break;
        }
// showing text depending on numbers
        answer.textContent = `Question ${question}; Answer: ${text}`;
    } else {
        answer.textContent = 'Write your question correctly';
    }
}
