// 选择天的视图
function selectDayView(targetEl, year, month, cYear, cMonth, cDay) {

}
// 选择月的视图
function selectMonthView(targetEl, cYear, cMonth) {

}
// 选择年的视图
function selectYearView(targetEl, year, cYear) {
    var decYears = getDecYears(year);

    // 头部分
    var template =
        "<div class='header'>" +
        "<div class='left' name ='pre'><img src='./toleft.png'></div>" +
        "<div class='middle'>" + decYears[0] + "-" + decYears[9] + "</div>" +
        "<div class='right' name ='next'><img src='./toright.png'></div>" +
        "</div>";

    // 内容部分
    template+="<div class='container'><ul>";
    for(var i=0;i<decYears.length;i++){
        template+="<li>"+decYears[i]+"</li>";
        if((i+1)%4==0&&i!=0)
        template+="<br>";
    }
    template+="</ul></div>";
    targetEl.innerHTML=template;
    var preEl = document.getElementsByName('pre')[0];
    var nextEl = document.getElementsByName('next')[0];

    preEl.addEventListener('click',function(){
        selectYearView(targetEl,year-10,cYear)
    },false);
    

    nextEl.addEventListener('click',function(){
        selectYearView(targetEl,year+10,cYear)
    },false);
    
}

/**
 * 年月日日历控件
 * @param {element} el  挂载点 
 * @param {dataString} initValue  初始化日期   可选 
 */
function Calendar(el, initValue) {

    var targetEl=document.createElement('div');
    document.body.appendChild(targetEl);

    // 测试
    selectYearView(targetEl,2020);
}