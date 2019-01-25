$(document).ready(function () {
    $('#comment_btn').on('click', function () {
        var titleId = $('h1').data('id');
        var commentText = $('#comment').val();
        if (!commentText) {
            $('#warn').html('评论不能为空!');
            return;
        }
        $.post('/comment', {
            id: titleId,
            comment: commentText
        }, function (result) {
            console.log(result);
            var html = `<li>
            <p class="comment_content">${result.text}</p>
            <p class="comment_date">${result.date}</p>
            </li>`;
            //var html = template('com', result);
            $('#comment_list').prepend(html);
            $('#comment').val('');
            $('#warn').empty();

        })


    })

    $('#remove').on('click', function () {
        var titleId = $('h1').data('id');
        $.get('/remove', {
            id: titleId
        }, function (doc) {
            console.log(doc);
        })
    })

    $('.like_icon').on('click', function () {

        $.get('/like', {
            id: $('h1').data('id')
        }, function (result) {
            $('#like_number').html(result.like);
        },
            'json'
        )
    });
})