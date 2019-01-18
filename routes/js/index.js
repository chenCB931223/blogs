
$(function () {
    $('#blog_btn').on('click', function () {
        window.location.href = $(this).attr('href');
    })


    $.get('/index', function (doc) {
        var html = template('test', doc);
        $('#article_mail').html(html);

        $('#next').on('click', function (e) {

            console.log(doc);

        });

        $('#info_message').html(`第${doc.page_num}/${doc.pages}页`);
    },
        'json')

});
