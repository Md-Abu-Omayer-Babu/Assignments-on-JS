// cursor
const cursor = document.getElementById("cursor");
cursor.classList.add("w-6", "h-6", "bg-blue-500", "rounded-full", "fixed", "top-0", "left-0", "pointer-events-none", "transition-transform", "duration-75");

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


// Headline
const headline = document.getElementById("custom-cursor");

let previousColor = cursor.style.backgroundColor;

headline.addEventListener("mouseover", (e) => {
    cursor.classList.add("w-12", "h-12");
    cursor.style.backgroundColor = generateRandomColor();
})

headline.addEventListener("mouseout", (e) => {
    cursor.classList.remove("w-12", "h-12");
    cursor.style.backgroundColor = previousColor;
})
