let quote;

const $content = $('#content');
    let endpoint = "https://api.quotable.io/random";
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        success: function(result) {
            $content.text(`" ${result.content}" —${result.author}`);
        }
    });
  
    function refreshPage(){
        window.location.reload();
    } 












   