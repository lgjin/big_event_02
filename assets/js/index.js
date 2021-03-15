$(function () {
    //获取用户信息,多次用到封装函数
    getUserInfo()
    //退出登录
    $('#exit').on('click', function () {
        //eg1
        layer.confirm('确认退出?', { icon: 3, title: '提示' }, function (index) {
            //do something
            //删除用户身份认证信息
            localStorage.removeItem('token');
            //返回登录界面
            location.href = '/login.html'
            layer.close(index);
        });
    })

});
function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',

        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: (res) => {
            console.log(res);
            if (res.status != 0) {
                return layui.layer.msg(res.message, { icon: 5 });
            }
            //更换头像
            change(res.data)

        }
    })
};
function change(item) {
    let name = item.nickname || item.username
    $('.welcome').html('欢迎&nbsp;&nbsp;' + name);
    //判断头像是否为空
    if (item.user_pic == null) {
        $('.layui-nav-img').hide();

        $('.text-avatar').show().html(name[0].toUpperCase())

    }
    else {
        $('.layui-nav-img').show().attr('src', item.user_pic);
        $('.text-avatar').hide()
    }
}