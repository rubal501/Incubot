/**
 * Created by rubal501 on 7/22/17.
 */
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
    $.get('templates/proyectosCards_template.mst', function (template) {
        $.getJSON('data/proyectos_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#rowDeProyectos').html(html);

        });
    });
    $.get('templates/footer_template.mst', function (template) {
        $.getJSON('data/footer_data.json', function(data) {
            var html = Mustache.to_html(template,data);
            $('#footer-zone').html(html);

        });
    });
});
