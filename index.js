let search = document.querySelector('.searchbox');

document.querySelector('#search-icon').onclick=() => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    
}
window.onscroll= () =>{
    navbar.classList.remove('active')
    search.classList.remove('active')
}

