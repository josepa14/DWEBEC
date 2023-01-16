//BOT PARA TELEGRAM
//url parametro que contiene la ruta del bot

class telegramBot {

    constructor(url) {
        this.url = url;
        this.id_ultimo = 0;
        this.mensajes = [];
        this.ultimosMensajes = [];
        this.temporizador = null;
        this.pendiente=false;
    }
    //tiempo parametro que define el periodo de actualizacion en ms
    iniciar(tiempo) {
        if (this.temporizador === null)
            this.temporizador = setInterval(programarTemporizador(this), tiempo)
    }
    parar() {
        clearInterval(this.temporizador);
        this.temporizador = null;

    }
    procesar() {
        this.pendiente=true;
        var objetoConexion = {"method":"GET"};
        if (this.id_ultimo > 0) {
            objetoConexion.method = "POST"
            objetoConexion.body = {};
            var formulario = new FormData;
            formulario.append("offset",this.id_ultimo);
            objetoConexion.body=formulario;

        }
        fetch(this.url,objetoConexion)
        .then(respuesta => respuesta.json())
        .then(datos=>{
            console.log(datos);
            console.log(this);
            this.id_ultimo=datos.result[datos.result.length-1].update_id;
            
        }).then(this.pendiente=false)
        
    }
}

//estas dos funciones son lo mismo
function programarTemporizador(objeto) {
    return function () {
        if(!objeto.pendiente)//esto es igual a false
        objeto.procesar();
    }
}