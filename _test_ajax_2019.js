$("#sub_btn").on('click', function(e){

    e.preventDefault();
    
    //get form input value
    var name = $('#name').val();
    var email = $('#email').val();
    var msg = $('#msg').val();

    //ajax
    $.ajax({
        type: "POST",
        url: "_test_ajax_data_2019.php",
        data: {
            name: name,
            email: email,
            msg: msg
        },
        success: function(res){

            $("#res-back").html(res);

            //alert(res);

            if(res == "Maklumat Berjaya Dihantar!"){
                alert("Berjaya!");
            };


            // if(res == "success"){
            //     alert("Form submitted");
            // };


            //  if(res == "Maklumat Berjaya Disimpan"){
            //     alert("Form submitted");
            // };
        }
    });
});