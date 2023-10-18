const myNodelist = document.querySelectorAll('li');

showTask();

for(let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName('close');

function removeTask() {
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentNode;
            div.remove();
            saveTask();
        }
    }
}
removeTask();

let list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
    if(ev.target.tagName = 'li') {
        ev.target.classList.toggle('checked');
        saveTask();
    } 
}, false);

function newElement() {
    let li = document.createElement('li');
    let t = document.createTextNode(myInput.value);

    if (myInput.value === '') {
        alert('Your entry is empty');
    } else {
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);

        let span = document.createElement('span');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);

        removeTask();

        saveTask();
    }

    document.getElementById("myInput").value = ""; 
}

function saveTask() {
    localStorage.setItem('task', myUL.innerHTML);
}

function showTask() {
    myUL.innerHTML = localStorage.getItem('task');
}
