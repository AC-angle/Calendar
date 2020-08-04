
// 判断某年是不是闰年
function isRunNian(year) {
    return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
}

// 计算某年某月多少天
function getMonthDays(year, month) {
    var days = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
    if (days == -1) {
        days = isRunNian(year) ? 29 : 28;
    }
    return days;
}

// 当月视图前置天
function getPreDayArray(year, month) {

    // 前置补充的天数
    var preDays = new Date(year + "/" + month + "/01").getDay();

    // 上个月多少天
    var preMonthDays = month == 1 ? getMonthDays(year - 1, 12) : getMonthDays(year, month - 1);

    var temp = [];
    for (var i = 0; i < preDays; i++) {
        temp.unshift(preMonthDays - i);
    }

    return temp;
}

// 当月视图后置天
function getNextDayArray(year, month) {
    var preDays = new Date(year + "/" + month + "/01").getDay();

    // 后置补充的天数
    var nextDays = 42 - preDays - getMonthDays(year, month);

    var temp = [];
    for (var i = 1; i <= nextDays; i++) {
        temp.push(i);
    }

    return temp;
}

// 计算年视图的十年
function getDecYears(year) {
    var temp = (year + "").replace(/\d$/, '0') - 1, years = [];
    for (var i = 1; i <= 10; i++) {
        years.push(temp + i);
    }
    return years;
}
