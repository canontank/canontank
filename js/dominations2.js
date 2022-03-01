function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2022-02-14 11:32:00";
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2022-02-23 12:55:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2022-03-02 00:00:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2022-02-27 16:01:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2022-03-02 00:17:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-02-19 06:19:00";
	taskList.push(new Array(type, "유명헬기", "Lv. 9", "  26만 석유", 17, 14));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 8", "  26만 석유", 17, 14));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-03-01 11:30:00";
	taskList.push(new Array(type, "강습차량", "Lv. 3", "1800만 식량", 15,  6 ));
	taskList.push(new Array(type, "고급헬기", "Lv. 2", "1800만 식량", 15,  6 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

$(document).ready(function() {
	try {
		setTask11();
		setTask12();
		setTask13();
		setTask14();
		setTask15();
		setTask21();
		setTask22();
		setDominations();
	} catch (e) {
		alert(e);
	}
});
