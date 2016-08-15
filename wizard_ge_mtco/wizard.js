function toggle(el) {
  el.style.display = (el.style.display == 'none') ? 'block' : 'none'
}

$(function() {
    $('#reason,#notice,#reason-two, #reason-three, #reason-four,#notice-two').hide();
    $('#shownotify input:radio:first,#showreason input:radio:first,#showreason-two input:radio:first, #radio-first input:radio:first,#showreason-three input:radio:first,#showreason-four input:radio:first').attr('checked', true);
    $('#shownotify-last input:radio:last, #shownotify-last-two input:radio:last, #radio-last input:radio:last').attr('checked', true);

    $('#showreason, #shownotify, #showreason-two,#showreason-three, #showreason-four, #shownotify-last,#shownotify-last-two').change(function(e){
        var reason = this.nextSibling.nextSibling;
        toggle(reason);
        $('#afterreason').toggle();
    });

});