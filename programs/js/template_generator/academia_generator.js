/**
 * Created by rubal on 7/21/17.
 */
$(function() {
    $.get('templates/academia_template.mst', function (template) {
        $.getJSON('data/academia_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#academia').html(html);

        });
    });

});
