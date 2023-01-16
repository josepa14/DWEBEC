window.addEventListener("load", function () { 
 
//    this.setInterval(() => { 
   
   
      const http = new XMLHttpRequest(); 
      http.open("GET", "https://api.telegram.org/bot5985274958:AAH2ozVrKmOS0XdDW_24H_mu4sn4MGuXziI/getUpdates"); 
      http.send(); 
   
      http.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) { 
          let respuestas = JSON.parse(this.responseText); 
          let ultimaRespuesta = respuestas.result.pop(); 
          if (ultimaRespuesta.message.text == "cuentame un chiste") { 
            let id = ultimaRespuesta.message.chat.id; 
            const datos = new FormData(); 
   
            datos.append("chat_id", id); 
            datos.append("text", "en que se diferencia un blanco de un negro? En que si el blanco esta encima del negro es sociedad y al reves es violacion"); 
            fetch("https://api.telegram.org/bot5985274958:AAH2ozVrKmOS0XdDW_24H_mu4sn4MGuXziI/sendMessage", { 
                method: "POST", 
                body: datos 
              }) 
              .then(async data => { 
                console.log(await data.text()); 
              }) 
          } else(ultimaRespuesta.message.text) 
        } 
      } 
   
   // }, 2750); 
   
   
  })
