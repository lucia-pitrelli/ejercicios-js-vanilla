let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(promedio, aprobado){
  return promedio > 6;
});

let desaprobados = estudiantes.filter(function(promedio){
  return promedio < 5;
});

console.log(aprobados);