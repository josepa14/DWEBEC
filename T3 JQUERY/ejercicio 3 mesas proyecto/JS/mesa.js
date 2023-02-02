function Mesa(posy,posx,alto,ancho){
    this.posicionX = posx
    this.posicionY = posy
    this.ancho = alto
    this.alto = ancho
}

Mesa.prototype.posicion=function(){
    console.log(this.posicionX)
    console.log(this.posicionY)
}

Mesa.prototype.pinta=function(){
    var div = $('<div>');
    div.addClass("mesa").appendTo('.almacen')
    div.draggable()
    console.log(div)
}

Mesa.prototype.movimiento=function(){
    $(".mesa").draggable({
        start: function (ev, ui) {
          $(this).attr("data-y", ui.offset.top)
          $(this).attr("data-x", ui.offset.left)
        }, revert: true, helper: "clone", revertDuration: 0
      });
}