let bodyEl = document.querySelector('body');


let userName = prompt('Enter your name:');

let newh1 = document.createElement('h1');

newh1.innerText = `Hey, ${userName} you Welcome!`;

bodyEl.prepend(newh1);

newh1.style = 'text-decoration: underline;', 'text-align: center;', 'font-size: 5rem;';

let changeInfo = document.querySelector('.change-btns');
let newh4 = document.createElement('h4');

newh4.innerText = `Hi ${userName} you can change the color of background or text that suits you.`;

changeInfo.prepend(newh4);

function changeColor(){
    let colors = ['red', 'blue', 'white', '#282828', '#ff02ff'];
    let indexNo = Math.floor(Math.random()*colors.length);
    bodyEl.style.backgroundColor = colors[indexNo];
    
}

function changeTextColor(){
    let colors = ['red', 'blue', 'white', '#282828', '#ff02ff'];
    let indexNo = Math.floor(Math.random()*colors.length);
    bodyEl.style.color = colors[indexNo];
    
}


let inputEl = document.querySelector('#input-text');
let ulElement = document.querySelector('#ul-element');

function createNewli(){
    let newLi = document.createElement('li');
    newLi.innerText = inputEl.value;

    let newIcon = document.createElement('i');
    newIcon.classList.add('bx', 'bxs-trash');

    newLi.appendChild(newIcon);

    newIcon.addEventListener('click', function(){
        newLi.remove()
    })


    ulElement.appendChild(newLi);

    newLi.contentEditable = 'true';

    
    ulElement.style = 'font-size: 2rem;'
    newIcon.style = 'color: red;'


    inputEl.value = '';


}

let inputEl2 = document.querySelector('#input-text2');
let ulElement2 =document.querySelector('#ul-element2')

function createNewli2(){
    let newLi2 = document.createElement('li');
    newLi2.innerText = inputEl2.value;

    let newIcon2 = document.createElement('i');
    newIcon2.classList.add('bx', 'bxs-trash');

    newLi2.appendChild(newIcon2);

    newIcon2.addEventListener('click', function(){
        newLi2.remove()
    })

    ulElement2.appendChild(newLi2);

    ulElement2.style = 'font-size: 2rem;'

    let txtColors = ['red', 'blue', 'white', '#282828', '#ff02ff'];
    let randomInd = Math.floor(Math.random()*txtColors.length);

    newIcon2.style = 'color: red;'

    newLi2.contentEditable = 'true';


    inputEl2.value = '';


}

function todoColor(){
    let txtColors = ['red', 'blue', 'white', 'cyan', 'goldenrod'];
    let randomInd = Math.floor(Math.random()*txtColors.length);

    ulElement.style.color = txtColors[randomInd];
    ulElement2.style.color = txtColors[randomInd];

}