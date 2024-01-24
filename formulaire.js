$(document).ready(function(){

    // Hide the 2 forms
    $(".form2").hide();
    $(".form3").hide();
    
    // Hide the form2 and appears when the user click on the button next
    $(".btnNext").click(function(e)
    {   
        // Prevent the default action from refreshing the page
        e.preventDefault();
        var $next = $(".btnNext").val();
        if ($next === "yes") 
        {
            $(".form1").hide() ;
            $(".form2").show() ;
        }
    });

    // API Date picker with months and years
    //$(".datepicker").datepicker({
        //changeMonth: true,
        //changeYear: true
      //});

    // Hide the form3 and appears when the user click on t