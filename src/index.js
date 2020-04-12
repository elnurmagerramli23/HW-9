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
note.setAttribute('class', 'form__note');
note.innerHTML = '* Denotes Required Field';
li.appendChild(note);

const secondLi = document.createElement('li');
secondLi.setAttribute('class', 'form__list');
ul.appendChild(secondLi);

const labelForName = document.createElement('label');
labelForName.setAttribute('for', 'name');
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
thirdLi.appendChild(labelForSurName);

const thirdLiInput = document.createElement('input');
thirdLiInput.setAttribute('class', 'form__input');
thirdLiInput.setAttribute('type', 'text');
thirdLiInput.setAttribute('placeholder', 'Enter surname name');
thirdLiInput.setAttribute('required');


const container__list = document.createElement('div');
container.appendChild(container__list)