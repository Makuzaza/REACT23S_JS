const formInput = document.querySelector('form') 
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const directions = document.querySelectorAll('input[name="direction"]')

const answer = document.querySelector('.code')

const bgGenerator = () => {
    let selectedValue;
    for (const sel of directions) {
        if (sel.checked) {
            selectedValue = sel.value
        }
    }
    
    let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`

    document.body.style.backgroundImage = gradient

    console.log(`linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`)

    answer.textContent = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`
}

formInput.addEventListener('change', bgGenerator)