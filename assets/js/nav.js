const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () =>{
    //nav open
    nav.classList.toggle('nav-active');
    //Burger Animation.
    burger.classList.toggle('toggle');
  });

  

}

navSlide();