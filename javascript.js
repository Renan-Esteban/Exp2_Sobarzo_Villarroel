
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contacto-form');

    document.addEventListener("DOMContentLoaded", function(event) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir que el formulario se envíe por defecto
  
       
    });
    
     // Validar el formulario
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const opciones = document.getElementById('opciones').value.trim();

      if (nombre === '') {
        console.log('Por favor ingrese su nombre');
        return false;
      }

      if (correo === '') {
        console.log('Por favor ingrese su correo electrónico');
        return false;
      } else {
        const expReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!expReg.test(correo)) {
          console.log('El correo electrónico no es válido');
          return false;
        }
      }

      if (telefono === '') {
        console.log('Por favor ingrese su teléfono');
        return false;
      } else {
        const expReg = /^[0-9]{9}$/;
        if (!expReg.test(telefono)) {
          console.log('El teléfono debe tener 9 dígitos');
          return false;
        }
      }

      if (mensaje === '') {
        console.log('Por favor ingrese un mensaje');
        return false;
      }

      if (opciones === '') {
        console.log('Por favor seleccione su interés');
        return false;
      }

      // Si el formulario es válido, mostrar alerta de envío exitoso
      alert('Enviado exitosamente');
      form.reset();
    });
  });

  $(document).ready(function(){
    $("#enviar").click(function(){
        
        $.get("https://api.victorsanmartin.com/feriados/en.json",function(data){

            $.each(data.data,function(i, item){

                $("#categorias").append("<tr><td>"+item.title+"</td><td>"+item.date+
                    "</td></tr>");

            });

        });
    });
});