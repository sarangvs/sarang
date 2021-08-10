$(document).ready(function () {
    $("#submitbutton").mouseenter(function () {
        $(this).css({ "background": "#ebd19d" })
    })
    $("#submitbutton").mouseleave(function () {
        $(this).css({ "background": "#ffb727" })
    })

    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim('').length >= 3;
    }, "Minimum 3 character is required");

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });

    $('body').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                alpha: true,
                noSpace: true
            },
            email: {
                required:true,
                isEmail:true
            },
            message: {
                required: true,
                minlength: 10
            },
            mobile:{
                required: true,
                minlength:10,
                maxlength:10,
                number: true
            },
        },
        messages:{
            name:{
                alpha:"Please enter your valid only"
            },
            email:{
                isEmail:"Please enter a valid email address"
            },
            mobile:{
                number:"Please enter a valid mobile number",
                minlength:"Please enter a valid mobile number",
                maxlength:"Please enter a valid mobile number",
            },
        }, 

        submitHandler: function (form) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwvWelKFl3L0TpURczs9j3mrSKNPRFlRSEOmi7N98b_r_ZtXiRl4e5s9cXDqBHKIwew/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error: function (err) {
                    alert("Something Error")
                }
            })
        }
    })
})