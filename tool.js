// 判断是否为闰年
function isRunNian(year) {
    return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
}
// 获取当月的天数
function getTianShu(year,month){
    var temp=[31,-1,31,30,31,30,31,31,30,31,30,31][month-1];
    if(temp==-1){
        if(isRunNian(year)){
            temp=29;
        }else{
            temp=28;
        }
    }
    return temp;
}
// 获取当月一号的星期(0-6)
function getFirstXingQi(year,month){
    var date=new Date(year+"/"+month+"/01");
    var temp=date.getDay();
    return temp;
}
// 获取日期视图最前面有几天是上月的，是哪几天
function getBeforDay(year,month){
    var tianshu=getFirstXingQi(year,month);
    // 获取上月天数
    var befortianshu=getTianShu(year,month-1);
    var temp=[];
    for(var i=0;i<tianshu;i++){
        temp.push(befortianshu);
        befortianshu=befortianshu-1;
    }
    return temp;
}
// 获取日期视图最后面面有几天是下月的，是哪几天
function getAfterDay(year,month){
    var qianzhitianshu=getFirstXingQi(year,month);
    var dangyuetianshu=getTianShu(year,month);
    var aftertianshu=42-qianzhitianshu-dangyuetianshu;
    var temp=[];
    for(var i=1;i<=aftertianshu;i++){
        temp.push(i);
    }
    return temp;
}
// 计算十年
function shinian(year){
    var firstnian=(year+"").replace(/\d$/,'0')-1;
    var years=[];
    for(var i=1;i<=10;i++){
        years.push(firstnian+i);
    }
    return years;
}


































// // 判断某年是不是闰年
// function isRunNian(year) {
//     return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
// }

// // 计算某年某月多少天
// function getMonthDays(year, month) {
//     var days = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
//     if (days == -1) {
//         days = isRunNian(year) ? 29 : 28;
//     }
//     return days;
// }

// // 当月视图前置天
// function getPreDayArray(year, month) {

//     // 前置补充的天数
//     var preDays = new Date(year + "/" + month + "/01").getDay();

//     // 上个月多少天
//     var preMonthDays = month == 1 ? getMonthDays(year - 1, 12) : getMonthDays(year, month - 1);

//     var temp = [];
//     for (var i = 0; i < preDays; i++) {
//         temp.push(preMonthDays - i);
//     }

//     return temp;
// }

// // 当月视图后置天
// function getNextDayArray(year, month) {
//     var preDays = new Date(year + "/" + month + "/01").getDay();

//     // 后置补充的天数
//     var nextDays = 42 - preDays - getMonthDays(year, month);

//     var temp = [];
//     for (var i = 1; i <= nextDays; i++) {
//         temp.push(i);
//     }

//     return temp;
// }

// // 计算年视图的十年
// function getDecYears(year) {
//     var temp = year.replace(/\d$/, '0') - 1, years = [];
//     for (var i = 1; i <= 10; i++) {
//         years.push(temp + i);
//     }
//     return years;
// }
