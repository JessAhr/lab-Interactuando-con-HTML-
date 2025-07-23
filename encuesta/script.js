let votosWeb = 0;
let votosJS = 0;
let votosBD = 0;
let totalVotos = 0;

function votar(opcion) {
  switch(opcion) {
    case 'web':
      votosWeb++;
      document.getElementById('votos-web').textContent = votosWeb;
      break;
    case 'js':
      votosJS++;
      document.getElementById('votos-js').textContent = votosJS;
      break;
    case 'bd':
      votosBD++;
      document.getElementById('votos-bd').textContent = votosBD;
      break;
  }

  totalVotos++;
  alert("¡Gracias por tu voto!");

  if (totalVotos % 5 === 0) {
    console.log(`🔢 Total de votos acumulados: ${totalVotos}`);
  }
}
