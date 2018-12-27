$(function () {
    var titleText = $('#text').val(),
        text = $('#content_text').val();
    $('#btn').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/public/api',

            data: {
                title: titleText,
                text: text
            },
            dataType: 'json',
            success: function (result) {
                window.location.href = '/public/api';
                alert('成功');
            },
            error: function () {
                alert('失败');
            }
        })
    })
})