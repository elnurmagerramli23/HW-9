const root = document.querySelector('div.root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
root.appendChild(container);


const container__input = document.createElement('div');
container__input.setAttribute('class', 'container__input');
container.appendChild(container__input);

const form = document.createElement('form');
form.setAttribute('class', 'form');
container__input.appendChild(form);

const ul = document.createElement('ul');
ul.setAttribute('class', 'ul');
form.appendChild(ul);

const li = document.createElement('li');
li.setAttribute('class', 'form__list');
ul.appendChild(li);

const h2 = document.createElement('h2');
h2.setAttribute('class', 'form__title');
h2.innerHTML = 'Contact with us';
li.appendChild(h2);

const note = document.createElement('span');
note.setAttribute('class', 'firstLiSpan');
note.innerHTML = '* Denotes Required Field';
li.appendChild(note);

const secondLi = document.createElement('li');
secondLi.setAttribute('class', 'form__list');
ul.appendChild(secondLi);

const labelForName = document.createElement('label');
labelForName.setAttribute('for', 'name');
labelForName.innerHTML = 'Name:';
secondLi.appendChild(labelForName);


const secondLiInput = document.createElement('input');
secondLiInput.setAttribute('class', 'form__input');
secondLiInput.setAttribute('type', 'text');
secondLiInput.setAttribute('placeholder', 'Enter your name');
secondLi.appendChild(secondLiInput);

const thirdLi = document.createElement('li');
thirdLi.setAttribute('class', 'form__list');
ul.appendChild(thirdLi);

const labelForSurName = document.createElement('label');
labelForSurName.setAttribute('for', 'surName');
labelForSurName.innerHTML = 'Surname:';
thirdLi.appendChild(labelForSurName);

const thirdLiInput = document.createElement('input');
thirdLiInput.setAttribute('class', 'form__input');
thirdLiInput.setAttribute('type', 'text');
thirdLiInput.setAttribute('placeholder', 'Enter surname name');
thirdLi.appendChild(thirdLiInput);

const thirdLiSpan = document.createElement('span');
thirdLiSpan.setAttribute('class', 'thirdLiSpan');
thirdLi.appendChild(thirdLiSpan);

const fourthLi = document.createElement('li');
fourthLi.setAttribute('class', 'li');
ul.appendChild(fourthLi);


const labelForAge = document.createElement('label');
labelForAge.setAttribute('for', 'age');
labelForAge.innerHTML = 'Age:';
fourthLi.appendChild(labelForAge);

const fourthLiInput = document.createElement('input');
fourthLiInput.setAttribute('class', 'form__input');
fourthLiInput.setAttribute('type', 'number');
fourthLiInput.setAttribute('placeholder', 'Choose your age');
fourthLi.appendChild(fourthLiInput);

const fifthLi = document.createElement('li');
fifthLi.setAttribute('class', 'li');
ul.appendChild(fifthLi);

const subButton = document.createElement('button');
subButton.setAttribute('class', 'form__button');
subButton.setAttribute('type', 'submit');
subButton.innerHTML = 'Submit';
fifthLi.appendChild(subButton);

const container__output = document.createElement('div');
container__output.setAttribute('class', 'container__output');
container.appendChild(container__output);

const output__form = document.createElement('form');
output__form.setAttribute('class', 'output__form')
container__output.appendChild(output__form);

const resultInput = document.createElement('input');
resultInput.setAttribute('name', 'result');
resultInput.setAttribute('placeholder', 'Name');
resultInput.setAttribute('readonly');
resultInput.setAttribute('class', 'result__input');
output__form.appendChild(resultInput);


