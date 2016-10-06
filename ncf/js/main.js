// Chosen
$(function() {
    $(".header-filter select").chosen({
        disable_search: true
    });
});

// Calendar popup
$(function() {
    $('.icon-calendar').click(function() {
        $(this).toggleClass('active');
        $('.calendar').toggleClass('active');
        $('.events-row .event:first-child').toggleClass('active');
        $('.icon-plus-squared').toggle();
        return false;
    });

    $('.calendar .switch a').click(function() {
        $('body').toggleClass('compact-mode');
        if($('body').hasClass('compact-mode')) {
            $(this).text('Switch to Normal Mode');
        } else {
            $(this).text('Switch to Compact Mode');
        }
        return false;
    });
});
