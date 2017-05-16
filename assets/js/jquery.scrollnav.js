$.fn.scrollNav = function () {
    var links = this;
    var $window = $(window);

    $window.scroll(function () {
        this.requestAnimationFrame(function () {
            links.removeClass('active');
            $(links.get().reverse()).each(function () {
                var currentItem = $(this);
                var target = $(currentItem.attr('href'));
                if (target.offset().top <= $window.scrollTop()) {
                    currentItem.addClass('active');
                    return false;
                }
            });
        });
    });

    $(function () {
        $window.trigger('scroll');
    });

    return links;
};