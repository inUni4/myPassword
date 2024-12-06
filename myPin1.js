const pinLabelText = document.querySelector('.pinLabel-text');
const allWrapper = document.querySelector('.all-wrapper');
const allWrapper1 = document.querySelector('.all-wrapper1');
const labelText = document.querySelector('.label-text');
const labelInput = document.querySelector('.label-input');
const lengthText = document.querySelector('.length-text');
const lengthInput = document.querySelector('.length-input');
const pinBtn = document.querySelector('.pin-btn');
const myPinLabel = document.querySelector('.my-pin-label');
const myPinName = document.querySelector('.my-pin-name');
const myPinBtn = document.querySelector('.my-pin-btn');

allWrapper1.classList.add('hide');

function newPin(length) {
  let myPin = '';
  let randomNumber = Math.floor(Math.random() * 9);
  do{
    randomNumber = Math.floor(Math.random() * 9);
    myPin += randomNumber;
  } while (length > myPin.length) {
    return myPin;
  };
};

function labelPin(label) {
  let myPinLabel = '';
  if(label === '') {
    return 'Please label your pin!';
  } else {
    myPinLabel = label;
    return myPinLabel;
  };
};
let pinInventory = JSON.parse(localStorage.getItem('pinInventory')) || [];

function removePin(value) {
  pinInventory = pinInventory.filter(p => p.thePin !== value);
  localStorage.setItem('pinInventory', JSON.stringify(pinInventory));
  console.log(pinInventory);
};

function savePin(pin, label) {
  pinInventory.push({theLabel: labelPin(label), thePin: newPin(pin)});
  localStorage.setItem('pinInventory', JSON.stringify(pinInventory));
  
  console.log(pinInventory);
};
for(let i = 0; i < pinInventory.length; i++) {
  allWrapper1.innerHTML += `<p class="my-pin-label">${pinInventory[i].theLabel}</p>
                            <p class="my-pin-name">${pinInventory[i].thePin}</p>
                            <button class="remove-btn" onclick="removePin('${pinInventory[i].thePin}')">delete</button>`;
};
pinBtn.addEventListener('click', () => {
  allWrapper1.classList.remove('hide');
  savePin(lengthInput.value, labelInput.value);
});

myPinBtn.addEventListener('click', () => {
  if(!myPinBtn.classList.contains('my-pin')) {
    allWrapper1.classList.remove('hide');
    myPinBtn.classList.add('my-pin');
  } else {
    allWrapper1.classList.add('hide');
    myPinBtn.classList.remove('my-pin');
  };
});