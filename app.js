

$( "#fetch" ).on( "click", function( event ) {
    $.ajax({
        url: "http://ip-api.com/json",
        success: function( result ) {
          console.log(result.as);
          alert(result.isp);
        }
    });
});
