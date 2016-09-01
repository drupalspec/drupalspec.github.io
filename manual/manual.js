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


// $(function() {
//     $('.wt-row__notice-helper, .wt-row__checkbox, .wt-row__helper-checkbox, .wt-row__radiobutton, .wt-row__helper-radiobutton, .wt-row__radiobuttons_yes, .wt-row__helper-radiobuttons_yes, .wt-row__radiobuttons_ok, .wt-row__helper-radiobuttons_ok, [class^="wt-row__input_"], [class^="wt-row__helper-input_"], [class^="wt-row__buttons_"], [class^="wt-row__helper-buttons_"]').find('.label').text('Duis ut lorem non odio luctus tincidunt non a mi. Nunc varius, metus non rhoncus vehicula, nibh nunc finibus ligula, ut vehicula metus enim sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.').each(function(i, el){
//         var $el = $(el);
//         $el.css('width', $el.css('maxWidth'));
//         $el.css('maxWidth', 'none');
//         $el.css('outline', '1px solid #ccc');
//     });
// });
