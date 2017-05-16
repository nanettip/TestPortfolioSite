define([
    'imagegallery',
    'contactform',
    'jquery',
    'jquery.linkscroller',
    'jquery.scrollnav'
], function (imageGallery, contactForm, $) {
    $(function () {
        imageGallery.init({
            gallery: $('#portfolio-gallery'),
            modal: $('#image-modal-backdrop'),
            imageElement: $('#image-modal-image')
        });

        var navLinks = $('#nav-links');
        navLinks.find('a')
            .linkScroller()
            .scrollNav();

        var contactElements = $('#contact');
        contactForm.init({
            submit: contactElements.find('input[type="submit"]'),
            fields: [{
                name: 'Name',
                element: contactElements.find('input[name="Name"]'),
                required: true,
                maxlength: 100
            },
            {
                name: 'Email',
                element: contactElements.find('input[name="Email"]'),
                required: true,
                maxlength: 100
            },
            {
                name: 'Phone',
                element: contactElements.find('input[name="Phone"]'),
                required: false,
                maxlength: 20
            },
            {
                name: 'Subject',
                element: contactElements.find('input[name="Subject"]'),
                required: true,
                maxlength: 100
            },
            {
                name: 'Message',
                element: contactElements.find('textarea[name="Message"]'),
                required: true,
                maxlength: 500
            },]
        })
    });
});