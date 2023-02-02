$(function(){
$("<p>")
    .text("Parrafo creado automaticamente")
    .css({fontSize:"20px",color:"red"})
    .click(function(){
        $(this).text("has cambiado el texto").click(function(){
            $(this).animate({fontSize:"200px"}).animate({fontSize:"20px"})
        })
        
    })
    .appendTo($("body"))
    // .hover(function(){
    //     $(this).css({fontSize:"100px"})
    // })
    $("table").css({border:"1px solid black"}).find("td:even").html(function(i){return "DNI_"+(i+1)})
    $("table").css({border:"1px solid black"}).find("td:odd").html(function(i){return "NOMBRE_"+(i+1)})

    // OTRA MANERA DE HACERLO RESUMIDO EN UNA SOLA LINEA

    $("td").html(function(i){
        var valor = "";
        if (i%2==0)
        valor = "DNI_"+ (i/2+1);
        else
        valor = "NOMBRE_"+(i+1)/2;
        return valor;
    })
    $("td").css({border:"1px solid black"})
    $("tr").append("<td><span><img src='up.jpg'style='height:20px;witdh:20px'/></span><span><img src='d.png'style='height:20px;witdh:20px'/></span></td>")//aqui inyecto un td
    $("span:even").click(function(){
        var filaActual = $(this).parent().parent();
        filaActual.next().after(filaActual);
    }) //escojo todos los span impares
    //let primera 
})
