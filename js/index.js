let url1 = 'https://cat-fact.herokuapp.com/facts';
let url2 = 'https://api.thecatapi.com/v1/images/search?limit=10';

function obtenerDatosAleatorios() {
  
  fetch(url1)
    .then((response) => {
     
      return response.json();
    })
    .then((data) => {

		let datoAleatorio = Math.floor(Math.random() * data.length);  
      	let textData = data[datoAleatorio].text;
      	let divTexto = document.getElementById('texto');
        divTexto.textContent = textData;
      } 
    )
    
}

function obtenerFotoAleatoria() {
  
	fetch(url2)
	  .then((response) => {
	   
		return response.json();
	  })
	  .then((data) => {
  
		  let fotoAleatoria = Math.floor(Math.random() * data.length);  
			let imgData = data[fotoAleatoria].url;
			let imagen = document.getElementById('imagen');
		  imagen.src = imgData;
		} 
	  )
	  
  }

let botonObtenerDatos = document.getElementById('boton');
botonObtenerDatos.addEventListener('click', obtenerDatosAleatorios);
botonObtenerDatos.addEventListener('click', obtenerFotoAleatoria);

