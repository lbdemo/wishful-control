/**
         * 参数：
         * 1. date: 秒级时间；
         * 2. fmt：格式化的格式 'yyyy', 'yyyy-MM-dd', 'yy-MM-dd', 'yyyy-MM-dd hh:mm:ss', ...(按需求自己定义格式)
         *       fmt给一个默认参数
         * RegExp.$1是正则对象里的内置符号，表示与 regexp 中的第1子表达式相匹配的文本。$2、...、$99同理
         * 注意年份与其他时间区分开，因为年份正常的表达是4位，所以单独判断
         */
function formatDate(date, fmt="yyyy-MM-dd hh:mm:ss") {
    if(typeof date === 'string'){
        return date;
    }
    date = new Date(date *1000);
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), //时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth()+3) / 3), // 季度
        'S' : date.getMilliseconds(), //毫秒
    }

    if (!date || date == null) return null;

    if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for(var k in o){
        if(new RegExp('('+k+')').test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00'+o[k]).substr((''+o[k]).length)));
        }
    }
    return fmt;
}
console.log(formatDate(1606358134)); //2020-11-26 10:35:34