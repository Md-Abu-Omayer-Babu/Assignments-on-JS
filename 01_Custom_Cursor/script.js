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
    cursor.classList.add("w-15", "h-15");
    cursor.style.backgroundColor = generateRandomColor();
})

headline.addEventListener("mouseout", (e) => {
    cursor.classList.remove("w-15", "h-15");
    cursor.style.backgroundColor = previousColor;
})

// Title
const title = document.getElementById("title");

let previousTitleColor = cursor.style.backgroundColor;

title.addEventListener("mouseover", (e) => {
    cursor.classList.add("w-12", "h-12");
    cursor.style.backgroundColor = generateRandomColor();
})

title.addEventListener("mouseout", (e) => {
    cursor.classList.remove("w-12", "h-12");
    cursor.style.backgroundColor = previousTitleColor;
})

// Paragraph
const paragraph = document.getElementById("paragraph");

let previousParagraphColor = cursor.style.backgroundColor;

paragraph.addEventListener("mouseover", (e) => {
    cursor.classList.add("w-8", "h-8");
    cursor.style.backgroundColor = generateRandomColor();
})

paragraph.addEventListener("mouseout", (e) => {
    cursor.classList.remove("w-8", "h-8");
    cursor.style.backgroundColor = previousParagraphColor;
})

// Hover Me
const hoverMe = document.getElementById("hover-me");
const hoverMeTitle = document.getElementById("hover-me-title");

let prevX = 0;

hoverMe.addEventListener("mousemove", (e) => {
    if(e.clientX > prevX){
        cursor.style.backgroundColor = generateRandomColor();
        hoverMeTitle.innerHTML = "Hovered --->";
    }else{
        cursor.style.backgroundColor = generateRandomColor();
        hoverMeTitle.innerHTML = "<--- Hovered";
    }
    prevX = e.clientX;
})

hoverMe.addEventListener("mouseout", () => {
    cursor.style.backgroundColor = previousColor;
    hoverMeTitle.innerHTML = "Hover me from left to right";
})
