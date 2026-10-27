const passwordBox = document.getElementById('psd-box');
const genButton = document.querySelector('button');
const copyIcon = document.querySelector('.icon-box');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*-+=/?';
let allItems = upperCase + lowerCase + numbers + symbols;

genButton.addEventListener('click', () => {
    let psdLengthBox = Number(document.getElementById('psd-length').value);
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    password += numbers[Math.floor(Math.random() * numbers.length)]; 
    password += symbols[Math.floor(Math.random() * symbols.length)];
    

    while(psdLengthBox > password.length){
        password += allItems[Math.floor(Math.random()) * allItems.length];
    }
    passwordBox.value = password;
});

copyIcon.addEventListener('click', () => {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password has been copied!');
})


