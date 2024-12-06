const passLabelText = document.querySelector('.passLabel-text');
const allWrapper = document.querySelector('.all-wrapper');
const allWrapper1 = document.querySelector('.all-wrapper1');
const labelText = document.querySelector('.label-text');
const labelInput = document.querySelector('.label-input');
const lengthText = document.querySelector('.length-text');
const lengthInput = document.querySelector('.length-input');
const passwordBtn = document.querySelector('.password-btn');
const myPassLabel = document.querySelector('.my-pass-label');
const myPassName = document.querySelector('.my-pass-name');
const myPasswordsBtn = document.querySelector('.my-passwords-btn');

let passInventory = JSON.parse(localStorage.getItem('passInventory')) || [];

allWrapper1.classList.add('hide');
function newPassword(length){
  let characters = ['!', '@', '#', '%', '&', '*'];
  let randomCharacters = characters[Math.floor(Math.random() * characters.length)];
  let randomNumber = Math.floor(Math.random() * 9);
  let smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'v', 'w', 'x', 'y', 'z'];
  let bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'V', 'W', 'X', 'Y', 'Z'];
  let randomSmallLetters = smallLetters[Math.floor(Math.random() * smallLetters.length)];
  let randomSmallLetters1 = smallLetters[Math.floor(Math.random() * smallLetters.length)];
  let randomBigLetters = bigLetters[Math.floor(Math.random() * bigLetters.length)];
  let randomBigLetters1 = bigLetters[Math.floor(Math.random() * bigLetters.length)];
  let myPassword = '';
  myPassword += `${randomSmallLetters}${randomCharacters}${randomBigLetters}${randomNumber}`;
  let helloPass = '';
  
  if(length < 4) {
    return 'The length is too short.';
  } else if (length > 4){
    do{
      if(Math.random() > 0.5) {
        randomSmallLetters = smallLetters[Math.floor(Math.random() * smallLetters.length)];
        randomSmallLetters1 = smallLetters[Math.floor(Math.random() * smallLetters.length)];
        randomBigLetters = bigLetters[Math.floor(Math.random() * bigLetters.length)];
        randomBigLetters1 = bigLetters[Math.floor(Math.random() * bigLetters.length)];
        helloPass += randomSmallLetters1;
      } else {
        randomSmallLetters = smallLetters[Math.floor(Math.random() * smallLetters.length)];
        randomSmallLetters1 = smallLetters[Math.floor(Math.random() * smallLetters.length)];
        randomBigLetters = bigLetters[Math.floor(Math.random() * bigLetters.length)];
        randomBigLetters1 = bigLetters[Math.floor(Math.random() * bigLetters.length)];
        helloPass += randomBigLetters1;
      };
    } while (length > helloPass.length + 4) {
      return helloPass.concat(myPassword);
    };
    } else if(length === 4 ){
        return myPassword;
      };
};

function labelPassword(passName) {
  let nameOfPassword = '';
  console.log('What would you like to label your new password?');
  if(passName === '') {
    return 'Please label your password!';
  } else {
    nameOfPassword = passName;
    return nameOfPassword;
  };
};
function remove(value) {
  passInventory = passInventory.filter(m => m.thePassword !== value);
  console.log(passInventory);
  localStorage.setItem('passInventory', JSON.stringify(passInventory));
};

function saveNewPassword(password, label){
  passInventory.push({name: label, thePassword: password});
  localStorage.setItem('passInventory', JSON.stringify(passInventory));
};

for(let i = 0; i < passInventory.length; i++) {
  allWrapper1.innerHTML += `<p class="my-pass-label">${passInventory[i].name}</p>
                            <p class="my-pass-name">${passInventory[i].thePassword}</p>
                            <button class="remove-btn" onclick="remove('${passInventory[i].thePassword}')">remove</button>`;
};

passwordBtn.addEventListener('click', () => {
  allWrapper1.classList.remove('hide');
  saveNewPassword(newPassword(Number(lengthInput.value)), labelPassword(labelInput.value));
});

myPasswordsBtn.addEventListener('click', () => {
  if(!myPasswordsBtn.classList.contains('my-pass')) {
    myPasswordsBtn.classList.add('my-pass');
    allWrapper1.classList.remove('hide');
  } else {
    myPasswordsBtn.classList.remove('my-pass');
    allWrapper1.classList.add('hide');
  };
  
});