/**
 * Created by rubal501 on 7/21/17.
 */
$(function() {
    $.get('templates/carousel_template.mst', function (template) {
        $.getJSON('data/carousel_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#seccion1').html(html);

        });
    });

});
