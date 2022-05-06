const funfact_result = document.getElementById('funfact_result');
const excuser_result = document.getElementById('excuser_result');
const fun_btn = document.getElementById('fun_btn');
const excuser_btn = document.getElementById('excuser_btn');

fun_btn.addEventListener('click', getRandomfunfact)
excuser_btn.addEventListener('click', getRandomexcuser)

function getRandomexcuser() {
    fetch('https://excuser.herokuapp.com/v1/excuse')
        .then(res => res.json())
        .then(data => {
            excuser_result.innerHTML = `
        <h2>${data[0].excuse}</h2>`
        })
}

function getRandomfunfact() {
    fetch('https://api.aakhilv.me/fun/facts')
        .then(res => res.json())
        .then(data => {
            funfact_result.innerHTML = `
            <h2>${data[0]}</h2>`
        })
}
