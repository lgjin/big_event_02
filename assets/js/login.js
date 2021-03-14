$('.login').on('click', function () {
    $('.login-box').hide();
    $('.reg-box').show()
});
$('.reg').on('click', function () {
    $('.login-box').show();
    $('.reg-box').hide()
});
//表单验证
let form = layui.form;
form.verify({
    pwd: [
        /^[\S]{6,12}$/
        , '密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {

        let val = $('.reg-box input[name=password]').val();
        if (value != val) {
            return '密码不一致'
        }
    }
});
//传输用户数据
$('#form-res').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/api/reguser',
        type: 'POST',
        data: {
            username: $('.reg-box input[name=username]').val(),
            password: $('.reg-box input[name=password]').val(),
        },
        success: (res) => {
            // if ()
            if (res.status !== 0) {
                // console.log(res.message);

                // $('#login-form')[0].reset()
                return layer.msg(res.message, { icon: 5 })
            }
            layer.msg('注册成功', { icon: 6 });
            $('.reg').click();
            $('#login-form')[0].reset()
        }
    })
});
//登录界面传输数据
$('#login-form').on('submit', function (e) {
    //阻止默认事件
    e.preventDefault();
    $.ajax({
        url: '/api/login',
        type: 'POST',
        data: $(this).serialize(),
        success: (res) => {
            console.log(res);
            if (res.status != 0) {
                return layer.msg(res.message, { icon: 5 })
            }
            layer.msg(res.message, { icon: 6 });
            //把token身份认证存入本地存储
            localStorage.setItem('token', res.token);
            //跳转到首页
            location.href = '/index.html'
        }
    })
})