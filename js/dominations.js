var date = new Date(); 
var allTaskMapList = new Array();
var sortTaskList1 = new Array();
var sortTaskList2 = new Array();

$(function() {
	$(window).resize(setHeight);
});

function setDominations() {
	setHeight();
	setTaskObject();
	setSortTaskList1();
	setSortTaskList2();
	show1();
	show2();
	show3();
	show4();
}

function setHeight() {
	$(".task").innerHeight(window.innerHeight - 50);
}

function setTaskObject() {
	for (var taskMap of allTaskMapList) {
		//var startDate = new Date(taskMap.startDate);
		var date = taskMap.startDate.split(" ")[0];
		var time = taskMap.startDate.split(" ")[1];
		var startDate = new Date(date.split("-")[0], date.split("-")[1] - 1, date.split("-")[2], time.split(":")[0], time.split(":")[1], time.split(":")[2]);
		var taskList = taskMap.taskList;
		for (var object of taskList) {
			var finishDate = new Date(startDate);
			finishDate.setDate(finishDate.getDate() + +(object[4]));
			finishDate.setHours(finishDate.getHours() + +(object[5]));
			object.push(startDate);
			object.push(finishDate);
			startDate = finishDate;
		}
	}
}

function setSortTaskList1() {
	for (var taskMap of allTaskMapList) {
		var taskList = taskMap.taskList;
		for (var object of taskList) {
			sortTaskList1.push(object);
		}
	}
	sortTaskList1.sort(function(a, b) {
		if (a[6] < b[6]) {
			return -1;
		} else if (a[6] > b[6]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function setSortTaskList2() {
	for (var taskMap of allTaskMapList) {
		var taskList = taskMap.taskList;
		for (var object of taskList) {
			sortTaskList2.push(object);
		}
	}
	sortTaskList2.sort(function(a, b) {
		if (a[7] < b[7]) {
			return -1;
		} else if (a[7] > b[7]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function show1() {
	var divId = "#task1";
	for (var taskMap of allTaskMapList) {
		$(divId).append($("<h4/>", { text : taskMap.title }));
		var taskList = taskMap.taskList;
		var table = $('<table/>', { class : 'table table-bordered table-striped text-right' });
		setTitle1(table);
		$(divId).append(table);
		for (var object of taskList) {
			setContents1(table, object);
		}
		$(divId).append("<br>");
	}
}

function show2() {
	var divId = "#task2";
	var table1 = $('<table/>', { class : 'table table-bordered table-striped text-right' });
	setTitle1(table1);
	var table2 = $('<table/>', { class : 'table table-bordered table-striped text-right' });
	setTitle1(table2);
	$(divId).append($("<h4/>", { text : "1. 진행 또는 완료" }));
	$(divId).append(table1).append("<br>");
	$(divId).append($("<h4/>", { text : "2. 대기" }));
	$(divId).append(table2).append("<br>");
	for (var object of sortTaskList1) {
		if (isStarted(object[6])) {
			setContents1(table1, object);
		} else {
			setContents1(table2, object);
		}
	}
}

function show3() {
	var divId = "#task3";
	var titleList = new Array("국민", "무기", "도서");
	for (var i = 0; i < titleList.length; i++) {
		var title = titleList[i];
		$(divId).append($("<h4/>", { text : (i + 1) + ". " + title }));
		var table = $('<table/>', { class : 'table table-bordered table-striped' });
		setTitle3(table);
		$(divId).append(table);
		for (var object of sortTaskList2) {
			setContents3(table, object, title);
		}
		$(divId).append("<br>");
	}
}

function show4() {
	var divId = "#task4";
	var table1 = $('<table/>', { class : 'table table-bordered table-striped text-right' });
	setTitle4(table1);
	var table2 = $('<table/>', { class : 'table table-bordered table-striped text-right' });
	setTitle4(table2);
	$(divId).append($("<p/>", { text : "1. 진행 또는 완료" }));
	$(divId).append(table1).append("<br>");
	$(divId).append($("<p/>", { text : "2. 대기" }));
	$(divId).append(table2).append("<br>");
	for (var object of sortTaskList1) {
		if (isStarted(object[6])) {
			setContents4(table1, object);
		} else {
			setContents4(table2, object);
		}
	}
}

function setTitle1(table) {
	table.append($('<tr/>')
		.append($('<th/>', { 'width' : '180' }).append($('<font/>', { text : '시작일' } )))
		.append($('<th/>', { 'width' : '55' }).append($('<font/>', { text : '분류' } )))
		.append($('<th/>', { 'width' : '80' }).append($('<font/>', { text : '명칭' } )))
		.append($('<th/>', { 'width' : '50' }).append($('<font/>', { text : '레벨' } )))
		.append($('<th/>', { 'width' : '110' }).append($('<font/>', { text : '자원' } )))
		.append($('<th/>', { 'width' : '90' }).append($('<font/>', { text : '시간' } )))
		.append($('<th/>', { 'width' : '' }).append($('<font/>', { text : '' } )))
	);
}

function setContents1(table, object) {
	$(table).append($('<tr/>')
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : object[6].format("yyyy-MM-dd (E) HH:mm"), class : getDayClass(object[6].format("E")) } )))
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : object[0] } )))
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : object[1] } )))
		.append($('<td/>', { 'align' :  'right' }).append($('<font/>', { text : object[2] } )))
		.append($('<td/>', { 'align' :  'right' }).append($('<font/>', { text : object[3], class : getPriceClass(object[3]) } )))
		.append($('<td/>', { 'align' :  'right' }).append($('<font/>', { text : object[4] + "일 " + object[5] + "시" } )))
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : getStatusStr(object[6], object[7]) } )))
	);
}

function setTitle3(table) {
	table.append($('<tr/>')
		.append($('<th/>', { 'width' : '70' }).append($('<font/>', { text : '분류' } )))
		.append($('<th/>', { 'width' : '80' }).append($('<font/>', { text : '명칭' } )))
		.append($('<th/>', { 'width' : '' }).append($('<font/>', { text : '남은 시간' } )))
	);
}

function setContents3(table, object, title) {
	if (!getProgress(object[6], object[7]))
		return;
	if (!object[0].startsWith(title))
		return;
	$(table).append($('<tr/>')
		.append($('<td/>', { align : 'center', text : object[0] }))
		.append($('<td/>', { align : 'center', text : object[1] }))
		.append($('<td/>', { align :  'right', text : getDifferentTime(object[7]) }))
	);
}

function setTitle4(table) {
	table.append($('<tr/>')
		.append($('<th/>', {}).append($('<font/>', { text : '시작일' } )))
		.append($('<th/>', {}).append($('<font/>', { text : '명칭' } )))
		.append($('<th/>', {}).append($('<font/>', { text : '레벨' } )))
		.append($('<th/>', {}).append($('<font/>', { text : '자원' } )))
		.append($('<th/>', {}).append($('<font/>', { text : '' } )))
	);
}

function setContents4(table, object) {
	$(table).append($('<tr/>')
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : object[6].format("MM/dd(E) HH:mm"), class : getDayClass(object[6].format("E")) } )))
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : object[1] } )))
		.append($('<td/>', { 'align' :  'right' }).append($('<font/>', { text : object[2] } )))
		.append($('<td/>', { 'align' :  'right' }).append($('<font/>', { text : object[3], class : getPriceClass(object[3]) } )))
		.append($('<td/>', { 'align' : 'center' }).append($('<font/>', { text : getStatusStr(object[6], object[7]) } )))
	);
}

function getStatusStr(startDate, finishDate) {
	if (getProgress(startDate, finishDate))
		return "*";
	return "";
}

function getProgress(startDate, finishDate) {
	if (isStarted(startDate) && !isFinished(finishDate))
		return true;
	return false;
}

function isStarted(startDate) {
	if (date > startDate)
		return true;
	return false;
}

function isFinished(finishDate) {
	if (date > finishDate)
		return true;
	return false;
}

function getDayClass(day) {
	if (day == "토") {
		return "saturday";
	} else if (day == "일") {
		return "sunday";
	} else {
		return "normal";
	}
}

function getPriceClass(price) {
	if (price.endsWith("석유")) {
		return "oil";
	} else if (price.endsWith("골드")) {
		return "gold";
	} else if (price.endsWith("식량")) {
		return "food";
	} else {
		return "normal";
	}
}

function getDifferentTime(finishDate) {
	var diff = finishDate - date;
	if (Math.floor(diff / 24 / 60 / 60 / 1000) != 0) {
		return Math.floor(diff / 1000 / 60 / 60 / 24) + "일 " + Math.floor((diff / 1000 / 60 / 60) % 24) + "시";
	} else if (Math.floor(diff / 60 / 60 / 1000) != 0) {
		return Math.floor(diff / 1000 / 60 / 60) + "시 " + Math.floor((diff / 1000 / 60) % 60) + "분";
	} else if (Math.floor(diff / 60 / 1000) != 0) {
		return Math.floor(diff / 1000 / 60) + "분 " + Math.floor((diff / 1000) % 60) + "초";
	} else {
		return Math.floor(diff / 1000 / 60) + "초";
	}
}

function reload() {
	location.reload();
}

Date.prototype.format = function(f) {
	if (!this.valueOf())
		return " ";
	var weekName = [ "일", "월", "화", "수", "목", "금", "토" ];
	var d = this;
	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
		switch ($1) {
			case "yyyy": return d.getFullYear();
			case "yy": return (d.getFullYear() % 1000).zf(2);
			case "MM": return (d.getMonth() + 1).zf(2);
			case "dd": return d.getDate().zf(2);
			case "E": return weekName[d.getDay()];
			case "HH": return d.getHours().zf(2);
			case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
			case "mm": return d.getMinutes().zf(2);
			case "ss": return d.getSeconds().zf(2);
			case "a/p": return d.getHours() < 12 ? "오전" : "오후";
			default: return $1;
		}
	});
};
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};
