// copy clipboard

function copyToClipboard(str){
    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}

function handleClick(){
    let text = document.querySelector('#text');
    copyToClipboard(text.innerText);
}