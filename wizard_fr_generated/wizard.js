$(function() {

    function getSectionId(str,force){
      return str.toLowerCase()
                .replace(
                    /(\b)([a-zA-Z])/g,
                    function(firstLetter){
                      return  firstLetter.toUpperCase();
                    }
                )
                .replace(/ /g, '');
    }


    // For french wizzard
    $(window).load(function() {
        var radioCount = $('.fr-wizard input[type=radio]').size() / 2;
        radioCount = Math.floor(radioCount);
        if (window.location.pathname.search('wizard_fr') > 0 && (window.location.pathname.search('step-6.html') > 0 || window.location.pathname.search('step-6-e1.html') > 0)) {
            radioCount = radioCount - 1;
        }
        if (window.location.pathname.search('wizard_fr') > 0 && (window.location.pathname.search('step-8.html') > 0 || window.location.pathname.search('step-8-e1.html') > 0)) {
            radioCount = radioCount - 3;
        }

        $('.fr-wizard input[type="radio"]').change(function() {
            var size = $('.fr-wizard input[type=radio]:checked').size();
            if (size == radioCount) {
                $("button").removeAttr("disabled");
            }
        });
    });

    $('.substeps > div').hide();
    $('#selectMode select').change(function(el) {
        var id = getSectionId($(this).val());
        $('.wt-form .section').hide().filter("#"+id).show();
    });
    $('#selectMode select').change();

    //  For no active sidebar menu item
    var parents = $('.fr-wizard ul.sidebar-nav li.active ').parent().children();
    for(i = 0; i < parents.length; i++) {
      var hasClass = parents[i].className;

      if(parents[i].className) {
        break;
      }
      parents[i].className = 'disable';
    }

    /* == Switch Between Modes */
    $('#gotoE1 input:radio:first').attr('checked', true);
    $('#gotoE1 input:radio:last').change(function(e){
        e.preventDefault();
        window.location.href = 'wizard_fr_generated/step-3-e1.html';
    });

    $('#gotoNotE1 input:radio:first').change(function(e){
        e.preventDefault();
        window.location.href = 'wizard_fr_generated/step-3.html';
    });
    $('#gotoNotE1 input:radio:last').attr('checked', true);

    /* == MODALS */
    $('#gotoInspectionReport button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-print-report.png');
    });
    $('#gotoDistanceTest button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-odometer.png');
    });
    $('#gotoDtcoCalibration button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-dtco-calibration.png');
    });
    $('#gotoLegalParameter button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-legal-parameter.png');
    });
    $('#gotoPinForm button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-enter-pin.png');
    });
    $('#gotoPinForm2 button').click(function(e){
        e.preventDefault();
        showFullscreenPopup('/assets/images/france-enter-pin.png');
    });

    function showFullscreenPopup(src) {
        $.magnificPopup.open({
          items: {
            src: '<div class="wt-popup__image-fullscreen"><img src="'+src+'" /></div>',
            type: 'inline'
          }
        });
    }

});