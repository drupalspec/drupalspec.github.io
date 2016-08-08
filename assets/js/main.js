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

    /* Popups */

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
            src: '<div class="wt-popup__image-fullscreen"><img src="'+src+'" /></div>',
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


/* Highlight Code */

hljs.configure({
    languages: ['xml']     // don't append class prefix
});

$(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});

// FormatXml


/* HTML + FXML Code */
function downloadFxml(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$(function() {
    function formatXml(xml) {
        var formatted = '';
        var reg = /(>)\s+(<)(\/*)/g;
        xml = xml.replace(/(\n\r)/g, ' ').replace(/\s\s+/g, ' ').replace(reg, '$1\r\n$2$3');
        var pad = 0;
        var tabSpace = '    ';
        jQuery.each(xml.split('\r\n'), function(index, node) {
            var indent = 0;
            if (node.match( /.+<\/\w[^>]*>$/ )) {
                indent = 0;
            } else if (node.match( /^<\/\w/ )) {
                if (pad != 0) {
                    pad -= 1;
                }
            } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
                indent = 1;
            } else {
                indent = 0;
            }

            var padding = '';
            for (var i = 0; i < pad; i++) {
                padding += tabSpace;
            }

            formatted += padding + node + '\r\n';
            pad += indent;
        });

        return formatted;
    }

    if ($('.wt-form .wt-row__code').length) {
        $("#showFxml, #downloadFxml").show();
    }

    $("#showFxml").click(function(e){
        e.preventDefault();
        var isFxml = $('body').hasClass('show-fxml');
        $('body').toggleClass('show-fxml');
    });

    $("#downloadFxml").click(function(e){
        e.preventDefault();
        var fileContent = [];
        // push headear in variable
        var header = $('#fxidheader').text();
        fileContent.push(header);


        // read all codes from wt-from and push in variable
        $('.wt-form .wt-row__code').each(function(k, code){
            fileContent.push($(code).text());
        });

        // push footer in variable
        var footer = $('#fxidfooter').text();
        fileContent.push(footer);

        // get name of file from adress bar, like «step1», «step2» or others
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.')) + '.fxml';

        // OPTIONAL: Apply XML Beautifier
        // OPTIONAL: Create Resource File

        // download file
        downloadFxml(filename, formatXml(fileContent.join('\r\n')));
    });

    if(window.location.pathname.indexOf('/manual/') >= 0) {
        $("#showFxml").click();
    }
});

