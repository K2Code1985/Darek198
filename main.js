let size = 10;
let orderElement = 1;

const clear = () => {


    const chosenOne = document.querySelector('ul');
    chosenOne.textContent = "";
    size = 10;
    orderElement = 1;


}

const init = () => {
    // tutaj kod 
    const btn1 = document.createElement('button');
    const btnReset = document.createElement('button');
    const ul = document.createElement('ul');
    document.body.appendChild(btn1);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);

    btn1.textContent = "Dodaj 10 elementów listy";
    btn1.addEventListener('click', createLiElements);
    btnReset.textContent = "Wyczyść ekran";
    btnReset.addEventListener('click', clear);
}

const createLiElements = () => {
    // tutaj kod  

    console.log("Działa na click!");
    for (i = 0; i < 10; i++) {
        const ul1 = document.querySelector('ul');
        const liElement = document.createElement('li');
        liElement.style.fontSize = `${size++}px`;
        liElement.textContent = `Element numer: ${orderElement++}`
        ul1.appendChild(liElement);


    }
}

init()