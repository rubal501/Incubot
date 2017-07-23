/**
 * Created by rubal501 on 7/23/17.
 */
$(function() {
    $.get('templates/navBar_template.mst', function (template) {
        $.getJSON('data/navBar_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#navBarContainer').html(html);

        });
    });
    $.get('templates/concursoJumbotron_template.mst', function (template) {
        $.getJSON('data/concursoJumbotron_template.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#containerConcursos').html(html);

        });
    });
    $.get('templates/footer_template.mst', function (template) {
        $.getJSON('data/footer_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#footerZone').html(html);

        });
    });
});

