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

function saveNewPassword(password, label){
  let passInventory = [];
  passInventory.push({name: label, thePassword: password});
  console.log(passInventory);
  
};

saveNewPassword(newPassword(26), labelPassword('Facebook'));