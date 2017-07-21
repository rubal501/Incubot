/**
 * Created by rubal501 on 7/21/17.
 */
$(function() {
    $.getJSON('data/carousel_data.json', function(data) {
        var template = $('#carouselTemplate').html();
        var html = Mustache.to_html(template,data);
        $('#seccion1').html(html);

    });

});