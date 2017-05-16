$.fn.linkScroller = function () {
    this.click(function () {
        var target = $($(this).attr('href'));
        
        $(document.body).animate({
            scrollTop: target.offset().top
        }, 'slow');

        return false;    
    });

    return this;
};