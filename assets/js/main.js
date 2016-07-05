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

    $('input:radio[name="notify4"]').change(function() {
        $('.notify4').toggle();
    });

    $('input:radio[name="notify3"]').change(function() {
        $('.notify3').toggle();
        $('.notify2').toggle();
    });

    
  
      if(window.location.pathname.search('wizard_fr') > 0 || 
        window.location.pathname.search('wizard_ge_mtco') > 0 || 
        window.location.pathname.search('wizard_ge') > 0
        ) { // For FR Wizard only
        //Modal
        $('.popup-modal').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
      }



      $( ".open-text" ).click(function() {
        $(this).parent().parent().find('.text-box').slideToggle('fast');
        $(this).toggleClass('open');
      });

      $( "input[name='radioUkMtco']" ).change(function() {
        $('.wizard-navigation.show, .wizard-navigation.hide').toggle();
      });
  
      //  For no active sidebar menu item
      var parents = $('.fr-wizard ul.sidebar-nav li.active ').parent().children();
      for(i = 0; i < parents.length; i++) {
        var hasClass = parents[i].className;

        if(parents[i].className) {break;}
          parents[i].className = 'disable'; 
        }


      // For french wizzard
      $(window).load(function() {
        var radoiCount = $('.fr-wizard input[type=radio]').size() / 2;
        radoiCount = Math.floor(radoiCount);
        if(window.location.pathname.search('wizard_fr') > 0 && window.location.pathname.search('step-6.html') > 0 || window.location.pathname.search('step-6-e1.html') > 0) {
          radoiCount = radoiCount - 1;
        }
  
        $('.fr-wizard input[type="radio"]').change(function() {
          var size = $('.fr-wizard input[type=radio]:checked').size();
          if(size == radoiCount) {
            $( "button").removeAttr("disabled");
          }
        });
      });




});

function goToE1() {
  window.location.href = 'wizard_fr/step-3-e1.html';
}

function goToAll() {
  window.location.href = 'wizard_fr/step-3.html';
}


