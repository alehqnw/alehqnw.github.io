Object.onclick = function(){
    DIOERROR();
}
function DIOERROR() {
    alert ('Temporalmente está deshabilitada esta sección\n'+
    'Disculpe las molestias');
}
  document.addEventListener('DOMContentLoaded', function() {
    var imagenes = document.querySelectorAll('.conteManga img');
    imagenes.forEach(function(imagen) {
      imagen.addEventListener('click', function() {
        alert('Vas a entrar a un link externo, si no estás seguro vuelve para atrás');
      });
    });
  });