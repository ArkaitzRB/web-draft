const skeletons = document.querySelectorAll('.skeleton')
skeletons.forEach((skeleton) => {
  setTimeout(() => {
  skeleton.classList.remove('skeleton')
  }, 4000)
  
      e.preventDefault(); // Evita que se recargue la página

      const datos = {
        person:19790,
        space:24037,
        type:"desk",
        deskId:29281,
        from:"2025-05-06T07:00:00.000Z",
        to:"2025-05-06T11:00:00.000Z"
      };

      fetch('https://api.zityhub.com/api/v1/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Datos enviados con éxito");
      })
      .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error");
      });
    });
