$(function() {

    $('ul.sidebar-nav ul li.active').parent().parent().addClass('active');
    $('ul.sidebar-nav li.active > ul').addClass('expanded');
    $('ul.sidebar-nav li.active > ul').parent().addClass('expanded');

    $('input:radio[name="reason"]').change(function() {
        $('.reason').toggle();
        $('.reasonon').toggle();
    });

    $('input:radio[name="reason2"]').change(function() {
        $('.reason2').toggle();
    });

    $('input:radio[name="reason3"]').change(function() {
        $('.reason3').toggle();
    });

    $('input:radio[name="reason4"]').change(function() {
        $('.reason4').toggle();
    });

    $('input:radio[name="notify"]').change(function() {
        $('.notify').toggle();
    });

    $('input:radio[name="notify3"]').change(function() {
        $('.notify3').toggle();
        $('.notify2').toggle();
    });

    $('input:radio[name="notify4"]').change(function() {
        $('.notify4').toggle();
    });

    $('.popup-modal, .helper').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.popup--image-fullscreen').click(function(e){
        e.preventDefault();
        var src = $(this).attr('src');
        $.magnificPopup.open({
          items: {
            src: '<div class="wtb-popup--image-fullscreen"><img src="'+src+'" /></div>',
            type: 'inline'
          }
        })
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $( "input[name='radioUkMtco']" ).change(function() {
      $('.wizard-navigation.show, .wizard-navigation.hide').toggle();
    });

});


