$(document).ready(function(){
			$("h2").click(function(){

				 alert("He is a CSE student.")
			});
			$ (".btn").click(function(){

				$("h2").show(2000);
			});
			$("#btn").click(function(){
				$("h2").hide(3000);
			});
			//fadeinouttoggle
			
			$("#Fadein").click(function(){
				$("h2").fadeIn(2000);
			});

			$("#Fadeout").click(function(){
				$("h2").fadeOut(3000);
			});

			$("#Fadetoggle").click(function(){
				$("h2").fadeToggle("slow");
			});

			$("#Fadeto").click(function(){
				$("h2").fadeTo("slow", .4);
			});

			//panel & flip
			$(".flip").click(function(){
				$(".panel").slideToggle(3000);
			});
			// color animation
			var state = true;
    $( "#a_button" ).on( "click", function() {
      if ( state ) {
        $( "#a_effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#a_effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
});
    // show
   
$( function() {
    $( "#draggable" ).draggable();

    $( "#datepicker" ).datepicker();
    $( "#resizable" ).resizable();
    // addclass
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );

  } );
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );