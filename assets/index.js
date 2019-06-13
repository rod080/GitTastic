
var topics=["politicians","CEOs","singers","youtubers","intellectuals",]

// this iS an array of important people
var topics2 = ["Elon Musk","Mark Zuckerberg","Jeff Bezos","Donald Trump", "Vladimir Putin "]

//creating html in for each button that we will use to call API 
//we will creat them using jquery

//renderin means creating. so the followin is a creat button function

// when user types letters it is sent to the array name 'topics'
// remeber taht 'renderbuttons' function uses array 'topics' to creat buttons 

// 

renderButtons();
//the funtion render buttons creates buttons out of 
function renderButtons() {
    $("#buttons-view").empty();// clears out html inside 
    // if we didnt have this, this function would create duplicate buttons that we don't need. 

     // Looping through the array of movies
     // the follwoing is a for loop. This will loop through each item in the array. the funtion is now able to create new buttons for each one.
     for (var i = 0; i < topics2.length; i++) {
      console.log("looping stuff");
        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");


        // Adding a class
        a.addClass("figure");// we are adding a class to this newly created html element. we do this so that we can refrence this class in our javascript/jquery code. we will be using it to make the on click funtion for the button. 

        // Adding a data-attribute with a value of the movie at index i
        //hmmm what is data attribute...
        
       //adding the attribute "data-name" to each item in the array topics2
        a.attr("data-name", topics2[i]);
        // ids, class, href, and  are attributes
        //data attribut is unique becausue  
        // attribute is anything taht is in an html tag 

        // Providing the button's text with a value of the movie at index i
        a.text(topics2[i]);
        // adding text (that corresponds to an item in the array topics2) to the variable 'a' which was made a butto

        // Adding the button to the HTML using the append function
        $("#buttons-view").append(a);



      
      } 
}


var key = "fsfP29dCV3892XRKrMbMxbdRyThe13H9";


$("body").on("click", ".figure",function(){

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
$(this).attr("data-name") + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({
    url: queryURL
    // After the data from the AJAX request comes back 
  }).then(function(response) {
    console.log(response)
    // $( this ).addClass( "done" ); hmmmm is this  nessecary 
    
      // Saving the image_original_url property
      // here we are goin to be looping through the images under (data requested from giphy. this data is seen in the console by using console.log(reponse)
     for(var i=0; i<response.data.length;  i++){
      var imageUrl = response.data[i].images.fixed_height_still.url;
      var gifUrl = response.data[i].images.fixed_height.url
     console.log(gifUrl)

      // Creating and storing an image tag
      //creating an image tag for every object in the array
      var celebimage = $("<img>");
      celebimage.addClass("funpic");
      // attributes 

      //HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an HTML element type. An attribute either modifies the default functionality of an element type or provides functionality to certain element types unable to function correctly without them.

      // Setting the celebimage src attribute to imageUrl
      // we do this becuase we will modify the default functionality of this element type 

      //giving source attribut to variable imageUrl
      celebimage.attr("src", imageUrl);// setting initial image as still image
      celebimage.attr("alt", "celeb image");//actually don't need this line. just usefult for screenreaders
      // alt means the summary of the element. describing the picture of th image.
      celebimage.attr("data-still", imageUrl)
      celebimage.attr("data-animated", gifUrl);
      celebimage.attr("data-state", "still");// data-state is a variable inside an html element  
      // Prepending the celebimage to the images div
      $("#images").prepend(celebimage);// appears on the top elemnt
     }

     $(".funpic").on("click", function(){
      var imageState= $(this).attr("data-state")
      console.log(imageState)
      console.log(imageState)
      if (imageState == "still"){
        $(this).attr("data-state", "animated")
        $(this).attr("src", $(this).data("animated"))
      }
      else if(imageState == "animated"){
        $(this).attr("data-state", "still")
        $(this).attr("src", $(this).data("still"))
      }


     })
     

     //callback function means call after function. once user clicks this, then do _____

     //two states still and animated
     //if state = still 
     //if state = 
     
     //when clicked on gif check data state attribute
     //if data state = still then caneg source to animate url 
     //if data state = animeate 
     //animeat maek it into  gif wwehn clicked 
     // pausing gifs 

     


  });

});
// $("body").on("click", "img",function(){
//   if


//next steps!
// display images on screen, these are part of the reapose in the console
// after response, then creat a new image tag for a each one 
// set src attritbute to the url we find in response(dat.image.)
//need input fild (text box) to add new buttons
//create button to accept value 
//assign same previously used classes
//gifs