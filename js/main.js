/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

//let myImage = document.querySelector('img');
let imageToChange = document.querySelector("#learning"); //#learning is the spcific id of specific image in index

imageToChange.onclick = function(){
    let mySrc = imageToChange.getAttribute('src');
    if(mySrc === 'images/learning.png'){
      imageToChange.setAttribute('src','images/js_image.jpg')
    } else{
      imageToChange.setAttribute('src','images/learning.png')
    }
}

//script to control multiple pages in one HTML
/*function show(shown, hidden) {
			  document.getElementById(shown).style.display='block';
			  document.getElementById(hidden).style.display='none';
			  return false;
			}
			*/
function show(pageNoToShow,nonShowPage1,nonShowPage2,nonShowPage3,nonShowPage4) {
  document.getElementById(pageNoToShow).style.display='block';
	document.getElementById(nonShowPage1).style.display='none';
  document.getElementById(nonShowPage2).style.display='none';
  document.getElementById(nonShowPage3).style.display='none';
  document.getElementById(nonShowPage4).style.display='none';
	return false;
}			

/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}
myButton.onclick = function() {
    setUserName();
  }
  */