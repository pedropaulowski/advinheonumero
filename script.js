function verificar() {
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value; 
	var resultado = document.getElementById("resultado");
	var tampa = document.getElementById("tampa");

	if (n1 !== n2) {
		document.getElementById("resultado").innerText = "Errou, era: "+n1;
		tampa.style.height = "10px";
		setTimeout(resetar, 2000);

	} else {
		if (jogou() === true) {
			document.getElementById("resultado").innerText = "Tentando trapacear?";
			setTimeout(resetar, 0);

		} else {
			document.getElementById("resultado").innerText = "Acertou";
			tampa.style.height = "10px";

			setTimeout(resetar, 2000);
		}
	}

}	
function resetar(){
	document.getElementById("n2").value = "";
	var resultado = document.getElementById("resultado");
	var r = Math.floor(Math.random() * 10);
	document.getElementById("n1").innerHTML = r;
	tampa.style.height = "200px";
	resultado.innerText = "Tente acertar";

}


function jogou(x) {
	var tampa = document.getElementById("tampa");
	var x = tampa.style.height;

	if(x === "10px") {
		return true;
	} else {
		return false;
	}
}
