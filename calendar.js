
// 选择天的视图
function selectDayView(el, targetEl, year, month, cYear, cMonth, cDay) {

    var today = new Date();
    var tYear = today.getFullYear();
    var tMonth = today.getMonth() + 1;
    var tDay = today.getDate();

    // 头部分
    var template =
        '<div class="header">' +
        '   <div class="left" name="pre">&lt;</div>' +
        '   <div class="title" name="title">' + year + '年' + month + '月</div>' +
        '   <div class="right" name="next">&gt;</div>' +
        '</div>';

    template += "<div class='container day-view'><ul>";

    ['日', '一', '二', '三', '四', '五', '六'].forEach(function (val) {
        template += "<li class='none item'>" + val + "</li>";
    });

    // 前置灰色
    var preDayArray = getPreDayArray(year, month);
    preDayArray.forEach(function (val) {
        template += "<li class='none item gray'>" + val + "</li>";
    });

    // 内容主体部分
    var days = getMonthDays(year, month);
    for (var i = 1; i <= days; i++) {
        var clazz = 'click item';
        if (year == cYear && month == cMonth && i == cDay) {
            clazz += " selected";
        }
        if (year == tYear && month == tMonth && i == tDay) {
            clazz += " today";
        }
        template += "<li class='" + clazz + "' name='item-click' val='" + i + "'>" + i + "</li>";
    }

    // 后置灰色
    var nextDayArray = getNextDayArray(year, month);
    nextDayArray.forEach(function (val) {
        template += "<li class='none item gray'>" + val + "</li>";
    });

    template += "</ul></div>";

    targetEl.innerHTML = template;

    var preEl = document.getElementsByName('pre')[0];
    var titleEl = document.getElementsByName('title')[0];
    var nextEl = document.getElementsByName('next')[0];

    preEl.addEventListener('click', function () {
        if (month == 1) { month = 12; year -= 1; } else { month -= 1; }
        selectDayView(el, targetEl, year, month, cYear, cMonth, cDay);
    }, false);

    titleEl.addEventListener('click', function () {
        selectMonthView(el, targetEl, year, cYear, cMonth);
    }, false);

    nextEl.addEventListener('click', function () {
        if (month == 12) { year -= -1; month = 1; } else { month = parseInt(month) + 1; }
        selectDayView(el, targetEl, year, month, cYear, cMonth, cDay);
    }, false);

    // 点击小条目的事件
    document.getElementsByName('item-click').forEach(function (itemNode) {
        itemNode.addEventListener('click', function () {
            el.value = year + '/' + month + '/' + itemNode.getAttribute('val');
            targetEl.innerHTML = '';
        }, false);
    });

}

// 选择月的视图
function selectMonthView(el, targetEl, year, cYear, cMonth, cDay) {

    // 头部分
    var template =
        '<div class="header">' +
        '   <div class="left" name="pre">&lt;</div>' +
        '   <div class="title" name="title">' + year + '年</div>' +
        '   <div class="right" name="next">&gt;</div>' +
        '</div>';

    template += "<div class='container month-view'><ul>";

    // 内容部分
    for (var i = 1; i <= 12; i++) {
        var clazz = 'click item';
        if (year == cYear && i == cMonth) {
            clazz += " selected";
        }
        template += "<li class='" + clazz + "' name='item-click' val='" + i + "'>" + i + "</li>";
    }

    template += "</ul></div>";

    targetEl.innerHTML = template;

    var preEl = document.getElementsByName('pre')[0];
    var titleEl = document.getElementsByName('title')[0];
    var nextEl = document.getElementsByName('next')[0];

    preEl.addEventListener('click', function () {
        selectMonthView(el, targetEl, year - 1, cYear, cMonth, cDay)
    }, false);

    titleEl.addEventListener('click', function () {
        selectYearView(el, targetEl, year, cYear, cMonth, cDay);
    }, false);

    nextEl.addEventListener('click', function () {
        selectMonthView(el, targetEl, year - -1, cYear, cMonth, cDay)
    }, false);

    // 点击小条目的事件
    document.getElementsByName('item-click').forEach(function (itemNode) {
        itemNode.addEventListener('click', function () {
            selectDayView(el, targetEl, year, itemNode.getAttribute('val'), cYear, cMonth, cDay);
        }, false);
    });
}

// 选择年的视图
function selectYearView(el, targetEl, year, cYear, cMonth, cDay) {
    var decYears = getDecYears(year);

    // 头部分
    var template =
        '<div class="header">' +
        '   <div class="left" name="pre">&lt;</div>' +
        '   <div class="title">' + decYears[0] + ' - ' + decYears[9] + '</div>' +
        '   <div class="right" name="next">&gt;</div>' +
        '</div>';

    // 内容部分
    template += "<div class='container year-view'><ul>";

    template += "<li class='none item gray'>" + (decYears[0] - 1) + "</li>";
    for (var i = 0; i < decYears.length; i++) {
        var clazz = 'click item';
        if (decYears[i] == cYear) {
            clazz += " selected";
        }
        template += "<li class='" + clazz + "' name='item-click' val='" + decYears[i] + "'>" + decYears[i] + "</li>";
    }
    template += "<li class='none item gray'>" + (decYears[9] + 1) + "</li>";

    template += "</ul></div>";

    targetEl.innerHTML = template;

    var preEl = document.getElementsByName('pre')[0];
    var nextEl = document.getElementsByName('next')[0];

    preEl.addEventListener('click', function () {
        selectYearView(el, targetEl, year - 10, cYear, cMonth, cDay);
    }, false);

    nextEl.addEventListener('click', function () {
        selectYearView(el, targetEl, year - -10, cYear, cMonth, cDay);
    }, false);

    // 点击小条目的事件
    document.getElementsByName('item-click').forEach(function (itemNode) {
        itemNode.addEventListener('click', function () {
            selectMonthView(el, targetEl, itemNode.getAttribute('val'), cYear, cMonth, cDay);
        }, false);
    });
}

/**
 * 年月日日历控件
 * @param {element} el 挂载点，必输
 */
function Calendar(el) {

    var targetEl = document.createElement('div');
    targetEl.setAttribute('class', 'calendar-view');

    document.body.appendChild(targetEl);

    // 初始化挂载点击打开方法
    el.addEventListener('click', function () {

        var cDate = new Date(el.value);
        if (cDate == 'Invalid Date') {
            var todayDate = new Date();
            selectDayView(el, targetEl, todayDate.getFullYear(), todayDate.getMonth() + 1, -1, -1, -1);
        } else {
            selectDayView(el, targetEl, cDate.getFullYear(), cDate.getMonth() + 1, cDate.getFullYear(), cDate.getMonth() + 1, cDate.getDate());
        }

    });

};