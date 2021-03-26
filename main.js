const clock = () => {
    let time = 0;
    const counter = () => {
        time++;
        document.body.textContent = `Jesteś na stronie przez ${time} sekund.`
        document.body.style.fontSize = "40px";
        document.body.style.fontWeight = "bold";
        document.body.style.fontFamily = "Arial";
    }
    return counter
}

const myTime = clock();
setInterval(myTime, 1000);