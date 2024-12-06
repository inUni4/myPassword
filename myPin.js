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
  console.log('What do you want to label your pin?');
  if(label === '') {
    return 'Please label your pin!';
  } else {
    myPinLabel = label;
    return myPinLabel;
  };
};

function savePin(pin, label) {
  let pinInventory = [];
  pinInventory.push({theLabel: label, thePin: pin});
  console.log(pinInventory);
};

savePin(newPin(8), labelPin('YouTube'));

let hero = [1, 2, 3, 4, 'hello'];
function remove(value) {
  hero = hero.filter(m => m !== value);
  console.log(hero);
};

remove(1);