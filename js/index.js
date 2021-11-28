const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*
document.addEventListener('scroll', (e) => {
 const scrollable = document.documentElement.scrollHeight - window.innerHeight;
 const scrolled = window.scrollY;

 if (Math.cell(scrolled) === scrollable){
    alert('You\'ve reached the bottom.');
 }
 //do your logic here
 }
);

/*
let pages = []
pages.push(document.querySelector('.my-services'))

pages.push(document.querySelector('.about-me'))

pages.push(document.querySelector('.my-work'))


// do it for all your  pages
document.addEventListener('scroll', (e) => {
 yPos = window.scrollY;
 if (yPos> 500) return;
 const pageNum = Math.floor(yPos/100)
 pages[pageNum].focus()
 }
);
*/