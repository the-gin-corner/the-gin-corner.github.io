const word1 = "About";
const word2 = "Gallery";
const word3 = "My Tools";

let nav = document.getElementById("nav");
let nav_children = nav.children;

let span_c_1 = [];
let span_c_2 = [];
let span_c_3 = [];

let spans = [span_c_1, span_c_2, span_c_3];
let span_i = 0;
let num = 1;

let words = [word1, word2, word3];

for (let word = 0; word < words.length; word++) {
    let selected_word = words[word];
    
    for (let letter = 0; letter < selected_word.length; letter++) {
        if (letter != selected_word.length) {
        spans[word].push(selected_word[letter]); 
        }
    }
}

for (let span_i = 0; span_i < spans.length; span_i++) {
    let selected_span = spans[span_i];
    
    for (let char = 0; char < selected_span.length; char++) {
        let span = document.createElement("span");
        
        if (selected_span[char] === " ") {
            span.innerHTML = "&nbsp;"; 
        } 
        else {
            let text = document.createTextNode(selected_span[char]);
            span.appendChild(text);
        }
        
        let anchor = document.getElementById("link" + num);
        anchor.appendChild(span);
    }
    
    num += 1;
}

for (let link_i = 0; link_i < nav_children.length; link_i++) {
    let nav_child = nav_children[link_i];
    let link_children = nav_child.children;
    
    if (link_i % 2 != 0) {
        nav_child.style.marginLeft = "50%";
        nav_child.style.rotate = "5deg";
    }
    else {
        nav_child.style.rotate = "-5deg"; 
    }
    
    nav_child.addEventListener("mouseover", function() {
        for (let child_i = 0; child_i < link_children.length; child_i++) {
        let span = link_children[child_i];
        
        span.style.color = "#ff922c";
        
        if (child_i == 0) {
            span.style.bottom = 5 + "px";
            span.style.marginRight = "5px";
            span.style.rotate = "5deg";
        }
        else if (child_i % 2 != 0) {
            span.style.top = 5 + "px";
            span.style.marginRight = "5px";
            span.style.rotate = "-5deg";
        }
        else {
            span.style.bottom = 5 + "px";
            span.style.marginRight = "5px";
            span.style.rotate = "5deg";
        }
        }
    });
    
    nav_child.addEventListener("mouseout", function() {
        for (let child_i = 0; child_i < link_children.length; child_i++) {
        let span = link_children[child_i];
        
        span.style.color = "#26229c";
        
        if (child_i == 0) {
            span.style.bottom = 0 + "px";
            span.style.marginRight = "0px";
            span.style.rotate = "0deg";
        }
        else if (child_i % 2 != 0) {
            span.style.top = 0 + "px";
            span.style.marginRight = "0px";
            span.style.rotate = "0deg";
        }
        else {
            span.style.bottom = 0 + "px";
            span.style.marginRight = "0px";
            span.style.rotate = "0deg";
        }
        }
        
        
    });
  
}
