$(document).ready(function () {
    // Get the messages div.
    var formMessages = $(".form-message");

    $("#contact-form").submit(function (event) {
        // prevent the form from submitting via the browser
        event.preventDefault();

        // collect form data
        var formData = new FormData($(this)[0]);

        // send AJAX request
        $.ajax({
            url: "mail.php",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass("error");
                $(formMessages).addClass("success");

                // Set the message text.
                $(formMessages).text(response);
                // Clear the form.
                $("#contact-form input,#contact-form textarea").val("");
            },
            error: function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass("success");
                $(formMessages).addClass("error");

                // Set the message text.
                if (data.responseText !== "") {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text("Oops! An error occured and your message could not be sent.");
                }
            },
        });
    });
});
