$(document).ready(function () {

    $('#btn').click(function () {
        var titleText = $('#text').val(),
            contentText = $('#content_text').val();
        $.ajax({
            type: 'post',
            url: '/api/public',

            data: {
                title: titleText,
                content: contentText
            },
            dataType: 'json',
            success: function (result) {
                window.location.href = '/acticle/?id=' + result._id;
                alert('成功');
            },
            error: function () {
                alert('失败');
            }
        })
    })
})