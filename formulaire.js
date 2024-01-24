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

    $(".btnBack").click(function(e)
    {   
        // Prevent the default action from refreshing the page
        e.preventDefault();
        var $back = $(".btnBack").val();
        if ($back === "yes") 
        {
            $(".form1").show() ;
            $(".form2").hide() ;
        }
    });

    // Hide the form3 and appears when the user click on the button submit
    $(".btnSubmit").click(function(e)
    {
        e.preventDefault();
        var $submit = $(".btnSubmit").val();
        if ($submit === "yes") 
        {   
            console.log("submit");
            $(".form1").hide();
            $(".form2").hide();
            $(".form3").show();
        }
    });
    
    
    //API AJAX pour le code postal//
    $(".btnValidate").click((e) =>
    {    e.preventDefault();
        var $save = $('.btnValidate').val();
        var $city = $('.code').val();
        if ($save === "yes" && $city !== "" && $city.length === 5)
        {
        $.ajax("https://apicarto.ign.fr/api/codes-postaux/communes/"+ $city, {
        success: function(data) {
            console.log(data)
            console.log(data[0].nomCommune)
            let nom = data[0].nomCommune;
            $('.city').val(nom);},
            });
        }})


    //API  pour l'autocomplétion de l'adresse
    document.getElementById('address-input').addEventListener('input', function() {
    var input = this.value;
    var resultsContainer = document.getElementById('autocomplete-results');

    if(input.length > 1) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                resultsContainer.innerHTML = ''; // Clear previous results
                resultsContainer.style.display = 'block'; // Show the container

                response.features.forEach(function(item) {
                    var div = document.createElement('div');
                    div.innerHTML = item.properties.label;
                    div.className = 'autocomplete-item';
                    div.onclick = function() {
                        document.getElementById('address-input').value = item.properties.label;
                        resultsContainer.style.display = 'none'; // Hide the container
                    };
                    resultsContainer.appendChild(div);
                });
            }
        };
        xhr.open("GET", "https://api-adresse.data.gouv.fr/search/?q=" + encodeURIComponent(input), true);
        xhr.send();
    } else {
        resultsContainer.style.display = 'none'; // Hide the container when input is too short
    }
});

    
    
    //Users Conditions//
    $(".consent").click(function()
        {
            var $consent = $("input[name='customRadio']:checked").val();
            if ($consent === "yes")
            {
                $(".btnSubmit").removeClass("disabled") ;
            }
        });


} );
