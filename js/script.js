
function toggleMenu(){
document.getElementById('nav-links').classList.toggle('active');
}

function validateCaptcha(){
let answer=document.getElementById('captcha').value;
if(answer!='8'){
alert('Incorrect CAPTCHA');
return false;
}
alert('Submitted Successfully');
return true;
}

window.onload=function(){
let count=localStorage.getItem('visits');
count=count?parseInt(count)+1:1;
localStorage.setItem('visits',count);
let el=document.getElementById('counter');
if(el){el.innerText='Visitor Count: '+count;}
}


function openModal(img){
document.getElementById("imageModal").style.display = "block";
document.getElementById("modalImg").src = img.src;
}

function closeModal(){
document.getElementById("imageModal").style.display = "none";
}
