// 入口函数
$(function () {
    // 1.根据登录状态决定用户信息位置显示的内容
    // 1-1. 获取用户昵称
    const nickname = getCookie('nickname')
    
    // 1-2.条件判断
    if(nickname) {
        // 登录过
        $('.off').addClass('hide')
        $('.on').text(`欢迎您: ${nickname}`).removeClass('hide')

        // 拿到 localStorage 里面存储的 list 数据
        const list = JSON.parse(window.localStorage.getItem('list')) || []
        $('.cartNum').text(list.length)
    } else {
        // 没有登录过 或者 过期了
        $('.off').removeClass('hide')
        $('.on').addClass('hide')
    }
})