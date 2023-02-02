//servidor trae mesas y yo creo en modo objeto
//pinto mesas, en almacen
$(function () {
  var mesa = new Mesa()
  $('#agregar').click(function () {
    mesa.pinta();
  })

  mesa.movimiento();



  $("#almacen").droppable({
    drop: function (ev, ui) {
     let mesaAlmacen = ui.draggable;
     mesaAlmacen.attr("style", "");
      $(this).append(mesaAlmacen)

    }
  });

  $(".sala").droppable({
    drop: function (ev, ui) {

      difX = $(this).offset().left
      difY = $(this).offset().top

      var mesa = ui.draggable;
      var left = parseInt(ui.offset.left);
      var top = parseInt(ui.offset.top)
      var width = parseInt(mesa.width())
      var height = parseInt(mesa.height())



      var pos1 = [left, +left + width, top, top + height]
      m1 = new Mesa(left, top, left + width, top + height);
      m1.posicion();





      //$.each(function(ev,i){
        console.log('hola')
        var mesaYa = $(".sala .mesa").eq(0);
      console.log(mesaYa)
      if (mesaYa.length > 0) {

        var posX = parseInt(mesaYa.offset().left)
        var posY = parseInt(mesaYa.offset().top)
        var anchura = parseInt(mesaYa.width())
        var altura = parseInt(mesaYa.height())
        var pos2 = [posX, posX + anchura, posY, posY + altura];

        if (((pos1[0] > pos2[0] && pos1[0] < pos2[1]) ||
          (pos1[1] > pos2[0] && pos1[1] < pos2[1]) ||
          (pos1[0] <= pos2[0] && pos1[1] >= pos2[1])) &&
          ((pos1[2] > pos2[2] && pos1[2] < pos2[3]) ||
            (pos1[3] > pos2[2] && pos1[3] < pos2[3]) ||
            (pos1[2] <= pos2[2] && pos1[3] >= pos2[3]))) {
          console.log("CHOCA")
        } else {
          $(this).append(mesa)
          mesa.css({ position: "absolute", top: top - difY + "px", left: left - difX + "px" })
        }
      } else {
        $(this).append(mesa)
        mesa.css({ position: "absolute", top: top - difY + "px", left: left - difX + "px" })
      }
      //})
      
    }
  }
  );


})

//crear objeto mesa
//crear objeto sala
//crear objeto almacen