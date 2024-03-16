// Write your code here!
const rmName = document.getElementById("main");
rmName.remove();

const newHeader =document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.textContent = "Edian is the champion"
document.append(newHeader);