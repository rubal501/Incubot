/**
 * Created by rubal501 on 7/21/17.
 */
$(function() {
    $.get('templates/teacher_template.mst', function (template) {
        $.getJSON('data/teachers_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#maestrosList').html(html);

        });
    });
});