$(document).ready(function(){
 $(".todo").on("keypress",function(e){
   if(e.which == 13) {
     var toDo = $(".todo").val();
     $("ul").prepend("<li>"+ toDo +"</li>");
     $(".todo").val('');
   }
 });
});
