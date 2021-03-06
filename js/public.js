// 设置 cookie的操作
function setCookie(key, value, expires) {
    if (!expires) {
        document.cookie = key + '=' + value
        return
    }
    // 调整时间
    const time = new Date()
    time.setTime(time.getTime() - 1000 * 60 * 60 *8 + 1000 * expires)
    // 设置 cookie
    document.cookie = `${ key }=${ value };expires=${ time }`
}

// 获取 cookie 的操作
function getCookie(key) {
    const obj = {}
    document.cookie.split('; ').forEach(item => {
        // 再次切割每一项
        const t = item.split('=')
        obj[t[0]] = t[1]
    })
    return key ? obj[key] : obj
}