define(function () {
    var imageGallery = {
        init: function(settings) {
            settings.gallery.find('img').click(function () {
                settings.imageElement.attr('src', this.src);
                settings.modal.addClass('open');
            });

            settings.modal.click(function () {
                settings.modal.removeClass('open');
            });

            settings.imageElement.click(function () {
                return false;
            });
        }
    };

    return imageGallery;
});