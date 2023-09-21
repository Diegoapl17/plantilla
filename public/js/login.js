console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');


signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

function login(){
	let usuario= document.getElementById('usuario').value
	let password= document.getElementById('password').value
	let bandera

		
	if(usuario=="juli" && password=="1234"){
		bandera=true
		let timerInterval
		Swal.fire({
		  title: 'Inicio exitoso!',
		  html: 'Direccionando al dashboard.',
		  timer: 1500,
		  timerProgressBar: true,
		  didOpen: () => {
			Swal.showLoading()
			const b = Swal.getHtmlContainer().querySelector('b')
			timerInterval = setInterval(() => {
			  b.textContent = Swal.getTimerLeft()
			}, 100)
		  },
		  willClose: () => {
			clearInterval(timerInterval)
		  }
		}).then((result) => {
		  /* Read more about handling dismissals below */
		  if (result.dismiss === Swal.DismissReason.timer) {
			console.log('I was closed by the timer')
		  }
		})
	}else{
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Usuario o contraseña no valido!',
			footer: '<a href="">Olvidaste tu contraseña?</a>'
		  })
	}
	if(bandera==true){
	setTimeout(()=>{
window.location.href = "";
	},2000)
}


	
}