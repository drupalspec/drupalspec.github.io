hljs.configure({
    languages: ['xml']     // don't append class prefix
});

$(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });


    var ToC = '<ul class="expanded">';

    var newLine, el, title, link, linkId = 0;

    $(".wtb-form .wtb-form--row__subtitle").each(function() {
        linkId++;
        el = $(this);
        title = el.children('.label').text();
        el.attr("id", 'link_' + linkId);

        link = location.pathname + "#" + el.attr("id");

        newLine =
            "<li>" +
              "<a href='" + link + "'>" +
                title +
              "</a>" +
            "</li>";

        ToC += newLine;

    });

    ToC += '</ul>';

    $('.sidebar-nav li.active').append(ToC);
});
