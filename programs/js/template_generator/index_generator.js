/**
 * Created by rubal501 on 7/21/17.
 */
$(function() {
    $.get('templates/navBar_template.mst', function (template) {
        $.getJSON('data/navBar_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#navBarContainer').html(html);

        });
    });
    $.get('templates/carousel_template.mst', function (template) {
        $.getJSON('data/carousel_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#seccion1').html(html);

        });
    });
    $.get('templates/academia_template.mst', function (template) {
        $.getJSON('data/academia_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#academia').html(html);

        });
    });
    $.get('templates/teacher_template.mst', function (template) {
        $.getJSON('data/teachers_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#maestrosList').html(html);

        });
    });
    $.get('templates/footer_template.mst', function (template) {
        $.getJSON('data/footer_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#footer-zone').html(html);

        });
    });
});
