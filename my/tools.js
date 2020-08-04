
// 判断某年是不是闰年
function isRunNian(year){
    return year%400==0||(year%100!=0&&year%4==0);
}

// 计算某年某月多少天
function getMonthDays(year,month){
    var days = [31,-1,31,30,31,30,31,31,30,31,30,31][month-1];
    if(days==-1){
        days=isRunNian(year)?29:28;
    }
    return days;
}
// 上月填满一号之前
function getPreDayArray(){

}
//下月填满最后
function getNextDayArray(){

}
// 计算十年
function getDecYears(year){
    var temp = year.replace(/\d$/,'0')-1;
    var year[];
    for(var i=1;i<temp;i++){
        b
    }
}