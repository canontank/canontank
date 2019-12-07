var date = new Date();
var allTaskMapList = new Array();
var sortTaskList1 = new Array();
var sortTaskList2 = new Array();

function setDominations() {
	init();
	setTaskObject();
	setSortTaskList1();
	setSortTaskList2();
	show1();
	show2();
	show3();
	show4();
}

function init() {
	$("#banner").click(function() {
		location.reload();
	});
}

function setTaskObject() {
	for (var taskMap of allTaskMapList) {
		var startDate = new Date(taskMap.startDate);
		var taskList = taskMap.taskList;
		for (var object of taskList) {
			var finishDate = new Date(startDate);
			finishDate.setDate(finishDate.getDate() + object[4]);
			finishDate.setHours(finishDate.getHours() + object[5]);
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
	$(divId).append("<b>========== [ 국민별 일정 ] ==========</b><br><br>");
	for (var taskMap of allTaskMapList) {
		$(divId).append(taskMap.title + "<br>");
		var taskList = taskMap.taskList;
		var table = $('<table/>');
		$(divId).append(table);
		for (var object of taskList) {
			print1(table, object);
		}
		$(divId).append("<br>");
	}
}

function show2() {
	var divId = "#task2";
	var table1 = $('<table/>');
	var table2 = $('<table/>');
	$(divId).append("<b>========== [ 전체 일정 ] ==========</b><br><br>");
	$(divId).append("1. 진행 또는 완료<br>");
	$(divId).append(table1).append("<br>");
	$(divId).append("2. 대기<br>");
	$(divId).append(table2).append("<br>");
	for (var object of sortTaskList1) {
		if (isStarted(object[6])) {
			print2(table1, object);
		} else {
			print2(table2, object);
		}
	}
}

function show3() {
	var divId = "#task3";
	$(divId).append("<b>===== [ 대기 일정 (클라우드) ] =====</b><br><br>");
	for (var object of sortTaskList1) {
		print3(divId, object);
	}
}

function show4() {
	var divId = "#task4";
	var titleList = new Array("국민", "무기", "도서");
	$(divId).append("<b>===== [ 진행 일정 ] =====</b><br><br>");
	for (var i = 0; i < titleList.length; i++) {
		var title = titleList[i];
		$(divId).append((i + 1) + ". " + title + "<br>");
		var table = $('<table/>');
		$(divId).append(table);
		for (var object of sortTaskList2) {
			print4(table, object, title);
		}
		$(divId).append("<br>");
	}
}

function print1(table, object) {
	$(table).append($('<tr/>')
		.append($('<td/>', { width : ' 10px', align :  'right'}).append($('<font/>', { text : '- ' } )))
		.append($('<td/>', { width : ' 80px', align : 'center'}).append($('<font/>', { text : object[6].format("yyyy-MM-dd") } )))
		.append($('<td/>', { width : ' 20px', align : 'center'}).append($('<font/>', { text : object[6].format(" (E) "), class : getDayClass(object[6].format("E")) } )))
		.append($('<td/>', { width : ' 40px', align : 'center'}).append($('<font/>', { text : object[6].format("HH:mm") } )))
		.append($('<td/>', { width : ' 50px', align : 'center'}).append($('<font/>', { text : object[0] } )))
		.append($('<td/>', { width : ' 60px', align : '  left'}).append($('<font/>', { text : object[1] } )))
		.append($('<td/>', { width : ' 40px', align : ' right'}).append($('<font/>', { text : object[2] } )))
		.append($('<td/>', { width : ' 15px', align : 'center'}).append($('<font/>', { text : ':' } )))
		.append($('<td/>', { width : ' 80px', align : ' right'}).append($('<font/>', { text : object[3], class : getPriceClass(object[3]) } )))
		.append($('<td/>', { width : ' 40px', align : ' right'}).append($('<font/>', { text : "(" + object[4] + "일" } )))
		.append($('<td/>', { width : ' 40px', align : ' right'}).append($('<font/>', { text : object[5] + "시)" } )))
		.append($('<td/>', { width : ' 15px', align : 'center'}).append($('<font/>', { text : getStatusStr(object[6], object[7]) } )))
		.append($('<td/>', { text : '' }))
	);
}

function print2(table, object) {
	$(table).append($('<tr/>')
	.append($('<td/>', { width : ' 10px', align :  'right'}).append($('<font/>', { text : '- ' } )))
	.append($('<td/>', { width : ' 80px', align : 'center'}).append($('<font/>', { text : object[6].format("yyyy-MM-dd") } )))
	.append($('<td/>', { width : ' 20px', align : 'center'}).append($('<font/>', { text : object[6].format(" (E) "), class : getDayClass(object[6].format("E")) } )))
	.append($('<td/>', { width : ' 40px', align : 'center'}).append($('<font/>', { text : object[6].format("HH:mm") } )))
	.append($('<td/>', { width : ' 50px', align : 'center'}).append($('<font/>', { text : object[0] } )))
	.append($('<td/>', { width : ' 60px', align : '  left'}).append($('<font/>', { text : object[1] } )))
	.append($('<td/>', { width : ' 40px', align : ' right'}).append($('<font/>', { text : object[2] } )))
	.append($('<td/>', { width : ' 15px', align : 'center'}).append($('<font/>', { text : ':' } )))
	.append($('<td/>', { width : ' 80px', align : ' right'}).append($('<font/>', { text : object[3], class : getPriceClass(object[3]) } )))
	.append($('<td/>', { width : ' 15px', align : 'center'}).append($('<font/>', { text : getStatusStr(object[6], object[7]) } )))
	.append($('<td/>', { text : '' }))
	);
}

function print3(divId, object) {
	if (getProgress(object[6], object[7]))
		return;
	$(divId).append(object[6].format("MM/dd(E) HH:mm"));
	$(divId).append("&nbsp;" + object[0]);
	$(divId).append("&nbsp;" + object[1]);
	$(divId).append("&nbsp;" + object[2]);
	$(divId).append("&nbsp;" + object[3]);
	$(divId).append("&nbsp;" + getStatusStr(object[6], object[7]));
	$(divId).append("<br>");
}

function print4(table, object, title) {
	if (!getProgress(object[6], object[7]))
		return;
	if (!object[0].startsWith(title))
		return;
	$(table).append($('<tr/>')
		.append($('<td/>', { width : ' 10px', align :  'right', text : '- ' }))
		.append($('<td/>', { width : ' 50px', align : 'center', text : object[0] }))
		.append($('<td/>', { width : ' 60px', align :   'left', text : object[1] }))
		.append($('<td/>', { width : ' 10px', align : 'center', text : ':' }))
		.append($('<td/>', { width : ' 85px', align :  'right', text : '[ ' + getDifferentTime(object[7]) + ' ]' }))
		.append($('<td/>'))
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