const $content = $('#content');
$('button').on('click', function(e) {
    e.preventDefault();
    let endpoint = 'https://api.quotable.io/random';
    $.ajax({
        url: endpoint,
        success: function(result) {
            $content.text(`"${result.content}" —${result.author}`);
            
        }
        });
    })










   