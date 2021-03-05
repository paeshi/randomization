// quotable api
const $content = $('#content');
$('button#moreContent').on('click', function(e) {
    e.preventDefault();
    let endpoint = 'https://api.quotable.io/random';
    $.ajax({
        url: endpoint,
        success: function(result) {
            $content.text(`"${result.content}" —${result.author}`);
            
        }
        });
    })

    
// bored api https://www.boredapi.com/documentation#endpoints-random
const $activity = $('#activity');
    $('button#bored').on('click', function(e) {
        e.preventDefault();
        let endpoint2 = 'http://www.boredapi.com/api/activity/';
        $.ajax({
        url: endpoint2,
        success: function(result) {
            $activity.text(`${result.activity}`);
            
            }
        });
    })


//    random poem api
const $poemTitle = $('#poemTitle');
const $poemContent = $('#poemContent');
const $poet = $('#poet');
    $('button#newPoem').on('click', function(e) {
        e.preventDefault();
        let endpoint3 = 'https://www.poemist.com/api/v1/randompoems';
        $.ajax({
            url: endpoint3,
            success: function(result) {
                $poemTitle.text(`${result[0].title}`);
                $poemContent.text(`${result[0].content}`) 
                $poet.text(`-${result[0].poet.name}`);
                
            }
        });
    })

const $dog = $('#dog');
    $('button#newDog').on('click', function(e) {
        e.preventDefault();
        $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        success: function(result) {
        $dog.attr("src", `${result.message}`);
                   
                    
            }
        });
    });

           






   