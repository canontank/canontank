function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-07-25 03:05:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "조선소  ", "Lv.12", "1200만 골드", 13,  4));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-07-19 10:04:00";
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-07-21 01:36:00";
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명 → 3명)";
	taskMap.startDate = "2020-07-26 14:18:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.14", "1520만 골드", 12, 12));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "미샬격납", "Lv. 9", "  25만 석유", 17,  1));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명 → 3명)";
	taskMap.startDate = "2020-07-28 23:24:00";
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-07-25 03:25:00";
	taskList.push(new Array(type, "보병    ", "Lv. 1", "1350만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "돌격대  ", "Lv. 1", "1300만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "공병    ", "Lv. 1", "1300만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "박격포병", "Lv. 1", "1780만 식량", 14,  7)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-07-23 00:14:00";
	taskList.push(new Array(type, "소총수  ", "Lv. 1", "1350만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "전차    ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "포병    ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "힐마차  ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "강습차량", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
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
	} catch (e){
		alert(e);
	}
});
