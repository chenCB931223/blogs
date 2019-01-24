
$(document).ready(function () {
    $('#blog_btn').on('click', function () {
        window.location.href = $(this).attr('href');
    })


    $.get(`/api${location.pathname}${location.search}`, function (doc) {
        var html = template('test', doc);
        $('#article_mail').html(html);
        $('#info_message').html(`第${doc.page_num}/${doc.pages}页`);
        console.log(typeof doc.page_num, typeof doc.pages);
        $('#next').attr('href', '/impress/?page_num=' + (Math.floor(doc.page_num) + 1))

        if (doc.page_num == doc.pages) {

            $('#next').attr('href', 'javascript:;');
        }

        $('#prev').attr('href', '/impress/?page_num=' + (Math.floor(doc.page_num) - 1));
        if (doc.page_num == 1) {
            $('#prev').attr('href', 'javascript:;');
        }
    },
        'json')



});
