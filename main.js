var swiper = new Swiper(".swiperGallery-1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

// mushroom piece
const mushroomDialogTrigger = document.querySelector('.mushroom-dialog-trigger')
const mushroomDialog = document.querySelector('.dialog-mushroom')
mushroomDialogTrigger.addEventListener('click', () => {
  mushroomDialog.show()
})

// sunrise piece
const sunriseDialogTrigger = document.querySelector('.sunrise-dialog-trigger')
const sunriseDialog = document.querySelector('.dialog-sunrise')
sunriseDialogTrigger.addEventListener('click', () => {
  sunriseDialog.show()
})

// red piece
const redDialogTrigger = document.querySelector('.red-dialog-trigger')
const redDialog = document.querySelector('.dialog-red')
redDialogTrigger.addEventListener('click', () => {
  redDialog.show()
})

// jesus piece
const jesusDialogTrigger = document.querySelector('.jesus-dialog-trigger')
const jesusDialog = document.querySelector('.dialog-jesus')
jesusDialogTrigger.addEventListener('click', () => {
  jesusDialog.show()
})

// hand piece
const handDialogTrigger = document.querySelector('.hand-dialog-trigger')
const handDialog = document.querySelector('.dialog-hand')
handDialogTrigger.addEventListener('click', () => {
  handDialog.show()
})

// heart2 peice
const heart2DialogTrigger = document.querySelector('.heart2-dialog-trigger')
const heart2Dialog = document.querySelector('.dialog-heart2')
heart2DialogTrigger.addEventListener('click', () => {
  heart2Dialog.show()
})

// ellie peice
const ellieDialogTrigger = document.querySelector('.ellie-dialog-trigger')
const ellieDialog = document.querySelector('.dialog-ellie')
ellieDialogTrigger.addEventListener('click', () => {
  ellieDialog.show()
})

// heart piece 
const heartDialogTrigger = document.querySelector('.heart-dialog-trigger')
const heartDialog = document.querySelector('.dialog-heart')
heartDialogTrigger.addEventListener('click', () => {
  heartDialog.show()
})

// lady piece 
const ladyDialogTrigger = document.querySelector('.lady-dialog-trigger')
const ladyDialog = document.querySelector('.dialog-lady')
ladyDialogTrigger.addEventListener('click', () => {
  ladyDialog.show()
})

// jungle piece
const jungleDialogTrigger = document.querySelector('.jungle-dialog-trigger')
const jungleDialog = document.querySelector('.dialog-jungle')
jungleDialogTrigger.addEventListener('click', () => {
  jungleDialog.show()
})

// moonMan piece
const moonManDialogTrigger = document.querySelector('.moonMan-dialog-trigger')
const moonManDialog = document.querySelector('.dialog-moonMan')
moonManDialogTrigger.addEventListener('click', () => {
  moonManDialog.show()
})

// Studio Img Buttons //
// si-b1
const b1DialogTrigger = document.querySelector('.b1-dialog-trigger')
const b1Dialog = document.querySelector('.dialog-si-b1')
b1DialogTrigger.addEventListener('click', () => {
  b1Dialog.show()
})

// si-b2
const b2DialogTrigger = document.querySelector('.b2-dialog-trigger')
const b2Dialog = document.querySelector('.dialog-si-b2')
b2DialogTrigger.addEventListener('click', () => {
  b2Dialog.show()
})

// si-b3
const b3DialogTrigger = document.querySelector('.b3-dialog-trigger')
const b3Dialog = document.querySelector('.dialog-si-b3')
b3DialogTrigger.addEventListener('click', () => {
  b3Dialog.show()
})

// si-b4
const b4DialogTrigger = document.querySelector('.b4-dialog-trigger')
const b4Dialog = document.querySelector('.dialog-si-b4')
b4DialogTrigger.addEventListener('click', () => {
  b4Dialog.show()
})

// GSAP Logo
gsap.from(".logo-main", {duration: 2, x: -500, ease: "bounce"});

// Back to Top Btn 
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

gsap.from(".overlayCollaborate", { opcaity: 0, x: 200, duration: 1})

// GSAP Collaborate Scroll Trigger (doesn't work when i have back to top Btn on)

//overlayCollaborateBox = document.getElementById("overlayCollaborate");
//window.onscroll = function() {scrollFunction()};

//function scrollFunction(){
//  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
//    overlayCollaborateBox.style.display = "block";
//  }
//  else {
//    overlayCollaborateBox.style.display = "none";
//  }
//}