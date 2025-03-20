let customCursor = document.getElementById("custom-cursor");

customCursor.onmouseover = function() {
    this.innerHTML = "Custom Cursor (Hover Effect) is working.........";
};

customCursor.onmouseout = function() {
    this.innerHTML = "Custom Cursor";
};

let title = document.getElementById("title");

title.onmouseover = function() {
    this.innerHTML = "Title (Hover Effect) is working.........";
};

title.onmouseout = function() {
    this.innerHTML = "This is a title";
};

let paragraph = document.querySelector("p");

paragraph.onmouseover = function() {
    this.style.color = "red";
};

paragraph.onmouseout = function() {
    this.style.color = "black";
};
