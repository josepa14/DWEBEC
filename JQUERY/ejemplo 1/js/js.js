$(function(){
    $("button").click(function(){
        var div= $("<div>");
        for (let i = 0; i<10;i++){   
            $("<p>").text("Parrafo numero " + (i+1)).appendTo(div)
        }
        div.appendTo($("body"))

        var img = $("<img src='c.png' style='height:15px;witdh:15px' />")

        $("p").click(function(){
            $(this).prepend(img)
            .animate()
        })
       
         $("p:odd").css({color:"red"}).click(function(){
        
        $(this).css({"color":this.className==="rojo"?"yellow":"red"}).toggleClass("rojo amarillo").animate({"font-size":"50px"}).animate({"font-size":"20px"},function(){alert("hola")})

        //TODO EL CODIGO SIGUIENTE ES RESUMIDO POR E LCODIGO DE ARRIBA
        //     if(this.className==="rojo"){
        //         $(this).css({"color":"yellow"})
        //     }else{
        //         $(this).css({"color":"red"})
        //     }
        //     $(this).toggleClass("rojo amarillo")
        }).addClass("rojo")

 
    })
})