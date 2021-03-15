$(function () {
    $.ajaxPrefilter(function (option) {
        console.log(option.url)
        let baseurl = 'http://api-breakingnews-web.itheima.net';
        option.url = baseurl + option.url
<<<<<<< HEAD
        option.complete = function (res) {
            console.log(res)
            let holdUp = res.responseJSON
            console.log(holdUp)
            //判断
            if (holdUp.status != 0 && holdUp.message == "身份认证失败！") {
                //删除用户身份认证信息
                localStorage.removeItem('token');
                //返回登录界面
                location.href = '/login.html'
            }

        }
=======
>>>>>>> 5e7535a410b9e27628f4615787355264aabd7608
    })
})