$(function() {
    var ToC = '<ul class="expanded">';

    var newLine, el, title, link, linkId = 0;

    $(".wt-form .wt-row__subtitle").each(function() {
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
