$(document).ready(function(){
$("div").css({"background-color":"yellow"}).click(function(){
    
    $(this).find("p").slideToggle(400)
    var txt=$(this).find("span").text();
    $(this).find("span").text(txt=="[+]"?"[-]":"[+]")
})
$("p").hide()



})