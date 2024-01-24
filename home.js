$(document).ready(function(){

    console.log("JQUERY");

    $( ".nav1" ).hover(
        function() {
            $(".nav1").addClass("nav-hover") ;
        },function() {
            $(".nav1").removeClass("nav-hover") ;
        }
      );

      $( ".image1" ).hover(
        function() {
            console.log("arrowmovein");
            $(".arrow1").addClass("movingArrow") ;
        },function() {
            console.log("arrowmoveout");
            $(".arrow1").removeClass("movingArrow") ;
        }
      );

      $( ".image2" ).hover(
        function() {
            console.log("arrowmovein");
            $(".arrow2").addClass("movingArrow") ;
        },function() {
            console.log("arrowmoveout");
            $(".arrow2").removeClass("movingArrow") ;
        }
      );

      $( ".image3" ).hover(
        function() {
            console.log("arrowmovein");
            $(".arrow3").addClass("movingArrow") ;
        },function() {
            console.log("arrowmoveout");
            $(".arrow3").removeClass("movingArrow") ;
        }
      );

        $( ".image1" ).hover(
            function() {
                console.log("Hoverin");
                $(".image1").addClass("imageBrighten") ;
            },function() {
                console.log("Hoverout");
                $(".image1").removeClass("imageBrighten") ;
            }
          );

        
          $( ".image2" ).hover(
            function() {
                console.log("Hoverin");
                $(".image2").addClass("imageBrighten") ;
            },function() {
                console.log("Hoverout");
                $(".image2").removeClass("imageBrighten") ;
            }
          );
          $( ".image3" ).hover(
            function() {
                console.log("Hoverin");
                $(".image3").addClass("imageBrighten") ;
            },function() {
                console.log("Hoverout");
                $(".image3").removeClass("imageBrighten") ;
            }
          );


});