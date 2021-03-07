// quotable api
const $content = $('#quote-content');
$('button#moreContent').on('click', function(e) {
    e.preventDefault();
    let endpoint = 'https://api.quotable.io/random';
    $.ajax({
        url: endpoint,
        success: function(result) {
            $content.html('" '+ result.content +'" ' + 
            '<br/><br/>' + '-' + result.author)
            
        }
        });
    })

    
const $activity = $('#activity');
    $('button#bored').on('click', function(e) {
        e.preventDefault();
        $('#bored-container').animate({
            width: '50%',
            height: '100%' 
        }, 1000, function() {

        });
        let endpoint2 = 'http://www.boredapi.com/api/activity/';
        $.ajax({
        url: endpoint2,
        success: function(result) {
            $activity.text(`${result.activity}`);
            
            }
        });
    })
    $('#heading3div').hide(); 
    $('#bored-container').mouseover(function() {
        $('#heading3div').fadeIn(500, 'linear');
    })

   
$('#bluefeather').hide();
$('#heading1').mouseover(function() {
    $('#bluefeather').fadeIn(500, 'swing');
});
$('#p1message').mouseover(function() {
    $('#bluefeather').fadeOut(1000, 'swing');
})


    
$('#heading2div').hide(); 
    $('#moreContent').mouseover(function () {
        $('#heading2div').fadeIn(2000, 'linear'); 
        console.log('works');
    });

    

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

const $pexFrame = $('#pexFrame');
const api_key = "563492ad6f917000010000014b61995ccd004085ba7dfe6c20ef2b8f"; 


  $("#form").submit(function(e) {
      e.preventDefault();
        let search = $('#search').val();
        let url = "https://api.pexels.com/v1/search?query="+ search +"&per_page=6";
        
        let image="";
        $('#images').empty();
        
      $.ajax({
          method: 'GET',
          beforeSend: function(xhr) {
              xhr.setRequestHeader ("Authorization", api_key);
          },
          url: url,
          success: function (data) {
            //   console.log(data)
 
           data.photos.forEach(photo => {
               image = `
               <img src="${photo.src.original}" width="400" height="400"/>`
               $("#images").append(image);

           })
              
          },
          error: function (error) {
              console.log(error);
          }
      });
    });
