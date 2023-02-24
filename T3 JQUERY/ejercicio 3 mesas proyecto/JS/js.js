//servidor trae mesas y yo creo en modo objeto
//pinto mesas, en almacen
$(function () {
//porgramacion eficiente meter en variables sala y almacen y pasarselo 
//a pinta para que no se tenga que buscar cadave que se ejecuta al mismo tiempo que se pueden cambiar en la lineas de aqui
var almacen= $("#almacen");
//ajax de la api

//este codigo debe borrarse cuando desaparezcan las mesas añadidas asangre
  $(".mesa").draggable({
    start: function (ev, ui) {
      $(this).attr("data-y", ui.offset.top)
      $(this).attr("data-x", ui.offset.left)
    }, revert: true, helper: "clone", revertDuration: 0
  })

//este codigo esta bien aqui
  almacen.droppable({
    drop: function (ev, ui) {
      let mesaAlmacen = ui.draggable;
      mesaAlmacen.attr("style", "");
      $(this).append(mesaAlmacen)
    }
  })


  $('.dialog').hide();


  $("#anadir").click(function () {
    //capturamos los valores de la altura y anchura de la mesa
    altmesa = $("#altura").val();
    anchmesa = $("#anchura").val();
    console.log(altmesa);
    console.log(anchmesa);
    //cerramos el dialog
    $(".dialog").dialog("close");
    var mesa = new Mesa(altmesa, anchmesa)
    mesa.pinta();
  });

  $('#agregar').click(function () {
    $(".dialog").dialog({ autoOpen: true });

  }
  )
  //control de movimiento


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

      var mesaYa = $(".sala .mesa");
      console.log(mesaYa)


      if (mesaYa.length > 0) {
        var choca = false;

        mesaYa.each(function (i, v) {

          var mesaPrueba = $(v);
          if (mesaPrueba.attr('id') != undefined && mesa.attr('id') != mesaPrueba.attr('id')) {//dos formas hacer estamos mezclando elementos jquery y javascript
            var posX = parseInt(mesaPrueba.offset().left)
            var posY = parseInt(mesaPrueba.offset().top)
            var anchura = parseInt(mesaPrueba.width())
            var altura = parseInt(mesaPrueba.height())
            var pos2 = [posX, posX + anchura, posY, posY + altura];
            if (((pos1[0] > pos2[0] && pos1[0] < pos2[1]) ||
              (pos1[1] > pos2[0] && pos1[1] < pos2[1]) ||
              (pos1[0] <= pos2[0] && pos1[1] >= pos2[1])) &&
              ((pos1[2] > pos2[2] && pos1[2] < pos2[3]) ||
                (pos1[3] > pos2[2] && pos1[3] < pos2[3]) ||
                (pos1[2] <= pos2[2] && pos1[3] >= pos2[3]))) {

              choca = true;
            }
          }
        })
        debugger
        if (!choca) {

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



  //crear objeto mesa
  //crear objeto sala
  //crear objeto almacen
})