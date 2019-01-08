$(document).ready(function () {

    $('#btn').click(function () {
        var titleText = $('#text').val(),
            contentText = $('#content_text').val();
        $.ajax({
            type: 'post',
            url: '/public/api',

            data: {
                title: titleText,
                content: contentText
            },
            dataType: 'json',
            success: function (result) {
                console.log(result)
                window.location.href = '/public/?id=' + result._id;
                alert('成功');
            },
            error: function () {
                alert('失败');
            }
        })
    })
})