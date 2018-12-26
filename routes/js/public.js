$(function () {
    var titleText = $('#text').val(),
        text = $('#content_text').val();
    $('#btn').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/public',
            dataType: 'json',
            data: $('#form1').serialize(),

            success: function (result) {
                console.log(result);
                if (result.resultCode === 200) {
                    alert('发布成功！');
                }
            },
            error: function () {
                alert('失败');
            }
        })
    })
})