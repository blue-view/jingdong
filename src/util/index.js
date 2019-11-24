export class DownTime {
    tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
    getDate(enddate) {
        let oDate = new Date(); //获取日期对象
        if (enddate < oDate) {
            return {
                hour: '00',
                minute: '00',
                second: '00'
            }
        } else {
            let nowTime = oDate.getTime(); //现在的毫秒数
            let newenddate = new Date(enddate);
            let targetTime = newenddate.getTime(); // 截止时间的毫秒数
            let second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

            second = second % (24 * 24 * 60); //余数代表剩下的秒数；
            let hour = Math.floor(second / 3600); //整数部分代表小时；
            second %= 3600; //余数代表 剩下的秒数；
            let minute = Math.floor(second / 60);
            second %= 60;
            hour = this.tow(hour)
            minute = this.tow(minute)
            second = this.tow(second)
            return {
                hour,
                minute,
                second
            }
        }

    }
}