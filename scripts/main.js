var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/piska.png') {
        myImage.setAttribute ('src','images/piska2.png');
    } else {
        myImage.setAttribute ('src','images/piska.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Privet ebaniy, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Privet ebaniy, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }