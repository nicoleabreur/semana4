window.onload = choosePic;

var myPix = new Array("images/frase1.jpg","images/frase2.jpg","images/frase3.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}