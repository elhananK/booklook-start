var fetch = function (bookname) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle' + bookname,
      success: function(data) {


          showBook(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };
  var source = $('#store-template').html();
  var template = Handlebars.compile(source)

  var showBook = function(data){
      for( let i=0 ; i<10 ; i++){
          if(data.items[i]){
            var newHTML = template({
                title: data.items[i].volumeInfo.title,
                description: data.items[i].volumeInfo.description,
                author: data.items[i].volumeInfo.authors[i],
                image: data.items[i].volumeInfo.imageLinks.smallThumbnail
            });
            $('.book').append(newHTML);
          }

      }
  };




$('.btn').on('click', function(){
    fetch($('#bookname').val());
});