const myText = `Para todos tus retos, prepárate en 
este blog de programación WEB`;
const divWrapper = document.getElementById('java');

let index = 0;

writeText = () => {
    divWrapper.innerText = myText.slice(0,index);
    index++;
    if(index > myText.length)
    {
        index = 0;
    }
}

setInterval(writeText, 100);