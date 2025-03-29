const box1 = document.getElementById("box1");

box1.addEventListener("click", (e) => {
    box1.classList.add("bg-gray-500");
})

box1.addEventListener("mouseout", (e) => {
    box1.classList.remove("bg-gray-500");
})

const box2 = document.getElementById("box2");

box2.addEventListener("dragstart", (e) => {
    box2.classList.add("bg-gray-500");
})

box2.addEventListener("dragend", (e) => {
    box2.classList.remove("bg-gray-500");
})

