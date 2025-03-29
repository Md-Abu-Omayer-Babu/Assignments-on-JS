const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("mouseout", (e) => {
    cursor.style.visibility = "hidden";
})

document.addEventListener("mouseover", (e) => {
    cursor.style.visibility = "visible";
})

const redColor = () => {
    return Math.floor(Math.random() * 256);
}

const greenColor = () => {
    return Math.floor(Math.random() * 256);
}

const blueColor = () => {
    return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
    return `rgb(${redColor()}, ${greenColor()}, ${blueColor()})`;
}

document.addEventListener("click", ()=> {
    cursor.style.backgroundColor = generateRandomColor();
})



