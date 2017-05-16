function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

define(['jquery'], function ($) {
    var contactForm = {
        init: function (settings) {
            settings.submit.click(function () {
                var error = null;

                $.each(settings.fields, function (index, field) {
                    if(field.required && !field.element.val()) {
                        error = field.name + " is required!!!";
                        return false;
                    }
                    else if(field.element.val().length > field.maxlength) {
                        error = field.name + " is too long!";
                        return false;
                    }
                    else if(field.element.attr("type") === "email" && !validateEmail(field.element.val())) {
                        error = "Please enter a valid email!";
                        return false;
                    }
                });

                if (error)
                    alert(error);
                else
                {   
                }
                return false;   
            });
        }
    }

    return contactForm;
});