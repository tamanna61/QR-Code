
function htmlEncode (value) {
    return $('<div/>').text(value).html();
}

$("#rtn").on('click',function(){
    $(".qr-code").attr("src","https://chart.googleapis.com/chart?cht=qr&chl=Tamanna&chs=160x160&chld=L|0");
     $("#content").val(" ");
});

    $("#generate").click(function() {
        $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
    });


