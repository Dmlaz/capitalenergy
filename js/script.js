// xhr.open('GET', 'https://users.quickblox.com/users.json', false);

$(document).ready(function(){

$.ajax({
 type: "POST",
 url:"http://vneformate.ru/android.php",
 crossDomain: true,
 cache: false,
 success: function(data){
   if(data=="ok")
   {
   alert("OK");
   alert(data);
   }
   else if(data=="error")
   {
   alert("error");
   }
  }
});

}
