/* --- MENÜ VE NAVBAR İŞLEMLERİ --- */
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

// Butonlar HTML'de varsa işlem yap, yoksa hata verme
let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let loginBtn = document.querySelector('#login-btn');
let infoBtn = document.querySelector('#info-btn');
let closeContactBtn = document.querySelector('#close-contact-info');

if(menuBtn){
    menuBtn.onclick = () =>{
        navbar.classList.toggle('active');
        if(searchForm) searchForm.classList.remove('active');
        if(loginForm) loginForm.classList.remove('active');
    };
}

if(searchBtn){
    searchBtn.onclick = () =>{
        searchForm.classList.toggle('active');
        if(navbar) navbar.classList.remove('active');
        if(loginForm) loginForm.classList.remove('active');
    };
}

if(loginBtn){
    loginBtn.onclick = () =>{
        loginForm.classList.toggle('active');
        if(navbar) navbar.classList.remove('active');
        if(searchForm) searchForm.classList.remove('active'); 
    };
}

if(infoBtn){
    infoBtn.onclick = () =>{
        contactInfo.classList.add('active');
    }
}

if(closeContactBtn){
    closeContactBtn.onclick = () =>{
        contactInfo.classList.remove('active');
    }
}

window.onscroll = () =>{
   if(navbar) navbar.classList.remove('active');
   if(searchForm) searchForm.classList.remove('active');
   if(loginForm) loginForm.classList.remove('active');
   if(contactInfo) contactInfo.classList.remove('active');
}

/* --- FORM GÖNDERME İŞLEMİ (AJAX - Sayfa Yenilenmeden) --- */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  // Eğer form sayfada yoksa hata vermesin diye kontrol
  if (!form || !statusEl) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini/yönlenmesini engeller

    statusEl.textContent = "Sending...";
    statusEl.classList.remove("ok", "err");

    try {
      const formData = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        statusEl.textContent = "Your message has been sent. Thank you!";
        statusEl.classList.add("ok");
      } else {
        statusEl.textContent = "Sorry — something went wrong. Please try again.";
        statusEl.classList.add("err");
      }
    } catch (err) {
      statusEl.textContent = "Network error — please try again.";
      statusEl.classList.add("err");
    }
  });
});

/* --- SLIDER AYARLARI --- */

var swiperHome = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiperReviews = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiperBlogs = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiperLogo = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});