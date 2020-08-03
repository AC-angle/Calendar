// 选择天的视图
function selectDayView(targetEl, year, month, cYear, cMonth, cDay) {

}

// 选择月的视图
function selectMonthView(targetEl, cYear, cMonth) {

}

// 选择年的视图
function selectYearView(targetEl, year, cYear) {
    var decYears=shinian(year);
    // 头
    var template =
        '<div class="header">' +
        '   <div class="left" name="pre">前十年</div>' +
        '   <div class="title">' + decYears[0] + ' - ' + decYears[9] + '</div>' +
        '   <div class="right" name="next">后十年</div>' +
        '</div>';
    // 内容
    template+="<div class='container'><ul>";
    for(var i=0;i<decYears.length;i++){
        template+='<li>'+decYears[i]+'</li>';
    }
    template += "</ul></div>";
    targetEl.innerHTML = template;

    var beforEl = document.getElementsByName('pre')[0];
    var afterEl = document.getElementsByName('next')[0];

    beforEl.addEventListener('click', function () {
        selectYearView(targetEl, year - 10, cYear)
    }, false);

    afterEl.addEventListener('click', function () {
        selectYearView(targetEl, year + 10, cYear)
    }, false);
}




/**
 * 年月日日历控件
 * @param {element} el 挂载点，必输
 * @param {dateString} initValue 初始化日期，可选
 */
function Calendar(el, initValue) {
    var targetEl=document.createElement('div');
    document.body.appendChild(targetEl);
    // 测试
    selectYearView(targetEl, 2020);
};