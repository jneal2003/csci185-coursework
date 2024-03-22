function makeBigger() {
   alert('make bigger!');
   const headerEl = document.querySelector ("header");
   headerEl.style.fontSize = "50px";
   const bodyEl = document.querySelector (".content")
   bodyEl.style.fontSize = "40px";

};

function makeSmaller() {
   alert('make smaller!');
   const headerEl = document.querySelector ("header");
   headerEl.style.fontSize = "15px";
   const bodyEl = document.querySelector (".content")
   bodyEl.style.fontSize = "15px";
};

