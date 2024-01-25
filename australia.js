$(document).ready(function(){

    $(".btnSave").click(function(e)
    {
        var $save = $(".btnSave").val();
        if ($save === "yes") 
        {   
            {
                $(".btnSave").removeClass("btn-outline-danger") ;
                $(".btnSave").addClass("btn-danger") ;
            }
        }
    });
   
});