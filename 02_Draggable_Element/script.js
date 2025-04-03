const box1 = document.getElementById("box1");
let isDragging = false;
let offsetX, offsetY;

// Start dragging on mousedown
box1.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - box1.getBoundingClientRect().left;
    offsetY = e.clientY - box1.getBoundingClientRect().top;
    box1.style.position = "absolute";
});

// Move the box on mousemove
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    box1.style.left = `${e.clientX - offsetX}px`;
    box1.style.top = `${e.clientY - offsetY}px`;
});

// Stop dragging on mouseup
document.addEventListener("mouseup", () => {
    isDragging = false;
});



// Drag and drop
const box2 = document.getElementById("box2");

box2.addEventListener("dragend", (e) => {
    box2.style.position = "absolute";
    box2.style.left = `${e.clientX - box2.offsetWidth}px`;
    box2.style.top = `${e.clientY - box2.offsetHeight}px`;
});
