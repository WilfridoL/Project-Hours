// variable
const time = document.getElementById('time');
const date = document.getElementById('date');
// array meses
const mesDelAño = ['Enero','Febrero','Marzo',
            'Abril','Mayo','Junio','Julio',
            'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
// funcion
const reloj = setInterval(() => {

  // variable local
  const local = new Date();

  // variable meses
  let dia = local.getDate(),
      meses = local.getMonth(),
      año = local.getFullYear();

  //  imprimir pantalla
  time.innerHTML = local.toLocaleTimeString();
  date.innerHTML = `${dia},${mesDelAño[meses]},${año}`; 
}, 1000);