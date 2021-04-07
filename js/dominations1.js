function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2021-03-31 07:23:00";
	taskList.push(new Array(type, "전차격납", "Lv.15", "2000만 골드", 18, 12));
	taskList.push(new Array(type, "전차격납", "Lv.15", "2000만 골드", 18, 12));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2021-04-03 09:12:00";
	taskList.push(new Array(type, "식량창고", "Lv.14", " 470만 골드",  8,  0));
	taskList.push(new Array(type, "식량창고", "Lv.15", " 600만 골드",  9,  0));
	taskList.push(new Array(type, "식량창고", "Lv.16", " 850만 골드", 10, 12));
	taskList.push(new Array(type, "식량창고", "Lv.17", "1050만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-04-06 16:23:00";
	taskList.push(new Array(type, "의회    ", "Lv. 5", "1200만 골드", 14,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 2", " 550만 골드",  7,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 3", " 700만 골드",  8,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 4", " 860만 골드", 10,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 5", "1060만 골드", 10, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  5));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-04-02 14:29:00";
	taskList.push(new Array(type, "골드창고", "Lv.14", " 470만 식량",  8,  0));
	taskList.push(new Array(type, "골드창고", "Lv.15", " 600만 식량",  9,  0));
	taskList.push(new Array(type, "골드창고", "Lv.16", " 850만 식량", 10, 12));
	taskList.push(new Array(type, "골드창고", "Lv.17", "1050만 식량", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-03-30 12:15:00";
	taskList.push(new Array(type, "개틀링  ", "Lv.14", "  24만 석유", 17,  3 )); // 정보화
	taskList.push(new Array(type, "엠알엘  ", "Lv. 6", "  25만 석유", 17,  3 )); // 정보화
	taskList.push(new Array(type, "강습차량", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-03-25 11:55:00";
	taskList.push(new Array(type, "전술헬기", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "무장차량", "Lv.11", "  27만 석유", 17,  3 )); // 정보화
	taskList.push(new Array(type, "전술헬기", "Lv. 6", "  25만 석유", 17,  3 )); // 정보화
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

$(document).ready(function() {
	try {
		setTask11();
		setTask12();
		setTask13();
		setTask14();
		setTask21();
		setTask22();
		setDominations();
	} catch (e){
		alert(e);
	}
});
