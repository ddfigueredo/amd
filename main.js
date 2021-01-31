window.onload = function() {
	const body = document.querySelector('body')
	const card = document.querySelector('.ct-card')
	const preloader = document.querySelector('.ct-preloader')
	const slider = document.querySelector('.slider')
	const logo = document.querySelector('.logotype')
	const title = document.querySelector('.ct-title')
	const redes = document.querySelector('.title-r')
	const sociales = document.querySelector('.title-s')
	const instagram = document.querySelector('.ct-instagram')
	const facebook = document.querySelector('.ct-facebook')
	const whatsapp = document.querySelector('.ct-whatsapp')
	const dataIg = document.querySelector('.d-instagram')
	const dataFb = document.querySelector('.d-facebook')
	const dataWp = document.querySelector('.d-whatsapp')
	const arrowIg = document.querySelector('.a-instagram')
	const arrowFb = document.querySelector('.a-facebook')
	const arrowWp = document.querySelector('.a-whatsapp')
	const alertCt = document.querySelector('.ct-alert')
	const alertBtn = document.querySelector('.alert-button')
	const alertBg = document.querySelector('.bg-alert')

	function doubleclick (socialmedia, link) {
  	if (socialmedia.style = 'scale(1.1)') {
  		window.open(link)
  	}
  }

  alertBtn.onclick = function() {
  	alertCt.classList.toggle('hide')
  	alertBg.classList.toggle('hide')
		body.classList.toggle('overflow')
  }

  instagram.ondblclick = function() {
  	doubleclick(instagram, 'https://www.instagram.com/amd.creaciones/')
  } 

 	facebook.ondblclick = function() {
  	doubleclick(facebook, 'https://www.facebook.com/amd.creaciones')
  } 

 	whatsapp.ondblclick = function() {
  	doubleclick(whatsapp, 'https://api.whatsapp.com/send/?phone=5491163070429&text&app_absent=0')
  } 

	title.onmouseover = function() {
		redes.classList.toggle('underline')
		sociales.classList.toggle('underline')
		sociales.classList.toggle('black')
	}

	title.onmouseout = function() {
		redes.classList.toggle('underline')
		sociales.classList.toggle('underline')
		sociales.classList.toggle('black')
	}

	instagram.onmouseover = function() {
		dataIg.classList.toggle('black')
		arrowIg.classList.toggle('rotate')
	}

	instagram.onmouseout = function() {
		dataIg.classList.toggle('black')
		arrowIg.classList.toggle('rotate')
	}

	facebook.onmouseover = function() {
		dataFb.classList.toggle('black')
		arrowFb.classList.toggle('rotate')
	}

	facebook.onmouseout = function() {
		dataFb.classList.toggle('black')
		arrowFb.classList.toggle('rotate')
	}

	whatsapp.onmouseover = function() {
		dataWp.classList.toggle('black')
		arrowWp.classList.toggle('rotate')
	}

	whatsapp.onmouseout = function() {
		dataWp.classList.toggle('black')
		arrowWp.classList.toggle('rotate')
	}

	function charge() {
		card.classList.toggle('hide')
		logo.classList.toggle('hide')
		slider.classList.toggle('hide')
		preloader.classList.toggle('hide')
		title.classList.toggle('ani-start')
		instagram.classList.toggle('ani-start')
		facebook.classList.toggle('ani-start')
		whatsapp.classList.toggle('ani-start')
		arrowIg.classList.toggle('ani-arrow')
		arrowFb.classList.toggle('ani-arrow')
		arrowWp.classList.toggle('ani-arrow')
		alertCt.classList.toggle('hide')
  	alertBg.classList.toggle('hide')
	}
	
	setTimeout(charge, 2500)
  


}