
$(function() {

    var getAllRadio = $('input[type=radio]');
    var radioCount = getAllRadio.size() / 2;
    for(var i = 0; i < radioCount; i++) {
        if($('#radio' + i + ' input[type=radio]')[0]) {
            $('#radio' + i + ' input[type=radio]')[0].checked = true;
        }
    }
    
});