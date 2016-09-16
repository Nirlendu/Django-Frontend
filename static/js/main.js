// Variable to store your files
var files;
// Add events
$('input[type=file]').on('change', prepareUpload);

// Grab the files and set them to our variable
function prepareUpload(event)
{ 
  //console.log("form submitted!");
  files = event.target.files;
}

//$('#post_form').on('submit', uploadFiles);


$("#post_form").on('submit',function(event){
    //event.preventDefault();
    console.log("form submitted!");  // sanity check
    //create_post();
    uploadFiles(event);
});
// Catch the form submit and upload the files
function uploadFiles(event)
{
  	event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    // START A LOADING SPINNER HERE

    // Create a formdata object and add the files
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
        //console.log(value);
    });

    $.ajax({
         url: $(this).attr('action'),
         type: $(this).attr('method'),
         data: $(this).serialize()
        // cache: false,
        // dataType: 'json',
        // processData: false, // Don't process the files
        // contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        // success: function(data, textStatus, jqXHR)
        // {
        //     if(typeof data.error === 'undefined')
        //     {
        //         // Success so call function to process the form
        //         submitForm(event, data);
        //     }
        //     else
        //     {
        //         // Handle errors here
        //         console.log('ERRORS: ' + data.error);
        //     }
        // },
        // error: function(jqXHR, textStatus, errorThrown)
        // {
        //     // Handle errors here
        //     console.log('ERRORS: ' + textStatus);
        //     // STOP LOADING SPINNER
        // }
        //console.log('File Upload! : ' + data);
        //console.log("HEY");
    });
}