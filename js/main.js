/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/selfie.png'){
        myImage.setAttribute('src','images/js_image.jpg')
    } else{
        myImage.setAttribute('src','images/selfie.png')
    }
}
