window.onload = function() {
	const ig = document.querySelector('.container-ig')
	const fb = document.querySelector('.container-fb')
	const wp = document.querySelector('.container-wp')

	ig.onclick = function() {
		window.open ('https://www.instagram.com/amd.impresionesdigitales/')
	}

	fb.onclick = function() {
		window.open ('https://www.facebook.com/AMD.impresiones')
	}

	wp.onclick = function() {
		window.open ('https://api.whatsapp.com/send/?phone=5491163070429&text&app_absent=0')
	}

	/*wp.onmouseover = function () {
		wp.style = 'height: 20%'
	}*/
}