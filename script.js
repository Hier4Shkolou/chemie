/* Progressbar */

window.onscroll = function(){

let winScroll = document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.getElementById("progressBar").style.width = scrolled + "%";

};


/* Scroll Animation */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));