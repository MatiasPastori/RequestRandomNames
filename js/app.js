document
	.querySelector("#generar-nombre")
	.addEventListener("submit", cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
	e.preventDefault();

	// Leemos las variables de los selectores

	const origen = document.getElementById("origen");
	const origenSeleccionado = origen.options[origen.selectedIndex].value;

	const genero = document.getElementById("genero");
	const generoSeleccionado = genero.options[genero.selectedIndex].value;

	const cuantos = document.getElementById("numero").value;

	let url = "";

	url += "https://randomuser.me/api/?inc=name,nat,gender&";

	// Si hay una cantidad
	if (cuantos !== "") {
		url += `results=${cuantos}&`;
	}

	// si Hay origen agregarlo a la URL
	if (origenSeleccionado !== "") {
		url += `nat=${origenSeleccionado}&`;
	}
	// Si hay un genero lo agregamos a la URL
	if (generoSeleccionado !== "") {
		url += `gender=${generoSeleccionado}&`;
	}
	url += "noinfo";

	// Código de FETCH API AQUI

	// Creamos el fetch
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let html = "<h2>Nombres Generados</h2>";
			html += `<ul class = "lista">`;
			data.results.forEach((persona) => {
				html += `
					<li>${persona.name.first}</li>
				`;
			});
			html += "</ul>";
			document.getElementById("resultado").innerHTML = html;
		})
		.catch((error) => console.log(error));
}
