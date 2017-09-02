/* $.ajax({
            type: 'GET',
            url: "http://vneformate.ru/android.php",
            crossDomain: true,
            success: function (data, textStatus, jqXHR) {
                alert("Ok!");
                $("#retorno").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Wait, take a look: " + textStatus + ", " + errorThrown);
            },
            complete: function (jqXHR, textStatus ) {
                alert("Status: " + textStatus);
            }
        }); 


*/

      var jquery_path = "js/jquery.js";

      // stupid workaround, as IExplorer is sometimes configured to not send the HTTP_REFERER
      var origin = (window.location + '').match(/(https?:\/\/[^\/]+)/)[1];

      crossdomain.async_load_javascript(jquery_path, function () {
        $(function () {

          crossdomain.ajax({
            type: "POST",
            url: "http://vneformate.ru/android.php",
            success: function (txt) {
              $('#responsepost').html(txt);
            }
          });
        });
      });
