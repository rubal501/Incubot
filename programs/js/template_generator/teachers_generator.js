/**
 * Created by rubal501 on 7/21/17.
 */
$(function() {
    $.getJSON('data/teachers_data.json', function(data) {
        var template = $('#teachersTemplate').html();
        var html = Mustache.to_html(template,data);
        $('#maestrosList').html(html);

    });

});