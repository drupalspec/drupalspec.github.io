$(function() {

    /* == Switch Between Modes */
    $('#gotoMTCO2 input:radio:first').attr('checked', true);
    $('#gotoMTCO2 input:radio:last').change(function(e){
        e.preventDefault();
        console.log('d');
        window.location.href = 'wizard_uk_mtco/index-mtco2.html';
    });

    $('#gotoMTCO input:radio:first').change(function(e){
        e.preventDefault();
        window.location.href = 'wizard_uk_mtco/index.html';
    });
    $('#gotoMTCO input:radio:last').attr('checked', true);

    var getAllRadio = $('input[type=radio]');
    var radioCount = getAllRadio.size() / 2;
    for(var i = 0; i < radioCount; i++) {
        if($('#radio' + i + ' input[type=radio]')[0]) {
            $('#radio' + i + ' input[type=radio]')[0].checked = true;
        }
    }
    

});