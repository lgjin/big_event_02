$(function () {
    $.ajaxPrefilter(function (option) {
        console.log(option.url)
        let baseurl = 'http://api-breakingnews-web.itheima.net';
        option.ulr = baseurl + option.url
    })
})