$(function () {
  $(".mesa").draggable({

    start: function (ev, ui) {
      $(this).attr("data-y", ui.offset.top)
      $(this).attr("data-x", ui.offset.left)
    }, revert: true, helper: "clone", revertDuration: 0
  });

  $("#almacen").droppable({
    drop: function (ev, ui) {
      var mesa = ui.draggable;
      mesa.attr("style", "");
      $(this).append(mesa)

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
      console.log(top)
      console.log(left)

      var mesaYa = $(".sala .mesa").eq(0);
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
    }
  }
  );


})