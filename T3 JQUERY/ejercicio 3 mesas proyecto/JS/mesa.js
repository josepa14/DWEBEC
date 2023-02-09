function Mesa(alto,ancho,posy,posx){
    this.posicionX = posx
    this.posicionY = posy
    this.ancho = ancho
    this.alto = alto
   // this.id= 1;
}

Mesa.prototype.posicion=function(){
    console.log(this.posicionX)
    console.log(this.posicionY)
}

Mesa.prototype.pinta=function(){
   // this.id = this.id+1
    var almesa = this.alto;
    var ancMesa= this.ancho;

    var div = $('<div>');
    //sala posicion abosluta alamacen relativo
    div.addClass("mesa").appendTo('.almacen').css({"height":almesa,"width": ancMesa})
    div.draggable(
        {
        start: function (ev, ui) {
          $(this).attr("data-y", ui.offset.top)
          $(this).attr("data-x", ui.offset.left)
          $(this).attr("id", this.id)
        }, revert: true, helper: "clone", revertDuration: 0
      }
      )
    console.log(div)
}
//esto es un comodin para las mesas que he creado a sangre
movimiento=function(){
    $(".mesa").draggable({
        start: function (ev, ui) {
          $(this).attr("data-y", ui.offset.top)
          $(this).attr("data-x", ui.offset.left)
        }, revert: true, helper: "clone", revertDuration: 0
      });
}
almacenaje=function(){
    $("#almacen").droppable({
        drop: function (ev, ui) {
         let mesaAlmacen = ui.draggable;
         mesaAlmacen.attr("style", "");
          $(this).append(mesaAlmacen)
    
        }
      });
}
Mesa.prototype.choca=function(otraMesa){

    return false;
}