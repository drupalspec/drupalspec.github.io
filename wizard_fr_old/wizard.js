$(function() {
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
    $('select.kitasMode').change(function(el) {
        var id = $(this).val();
        $('.substeps > div').hide().filter("#"+id).show();
    });

    //  For no active sidebar menu item
    var parents = $('.fr-wizard ul.sidebar-nav li.active ').parent().children();
    for(i = 0; i < parents.length; i++) {
      var hasClass = parents[i].className;

      if(parents[i].className) {
        break;
      }
      parents[i].className = 'disable';
    }

});


function goToE1() {
  window.location.href = 'wizard_fr_old/step-3-e1.html';
}

function goToAll() {
  window.location.href = 'wizard_fr_old/step-3.html';
}