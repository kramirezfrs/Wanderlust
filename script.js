document.addEventListener('DOMContentLoaded', function() {
  const verMasButtons = document.querySelectorAll(
    'a[href*="alojamiento.html"], ' +
    'a[href*="restaurantes.html"], ' +
    'a[href*="transporte.html"], ' +
    'a[href*="guias.html"], ' +
    'a[href*="paquetes.html"],' +
    'a[href*="actividades.html"],' +
    'a[href*="aboutuss.html"]'

  );

  verMasButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      Swal.fire({
        title: 'Accede a tu cuenta',
        text: 'o crea una nueva para poder acceder a nuestro sitio.',
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#4f46e5' // Color indigo-600 de Tailwind
      });
    });
  });
});




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validaciones básicas
    if (name.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Correo electrónico inválido.");
        return;
    }
    if (isNaN(phone) || phone.length < 8) {
        alert("El teléfono debe ser numérico y tener al menos 8 dígitos.");
        return;
    }
    if (message.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        return;
    }

    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
});


//ALOJAMIENTODS BUSQUEDA
