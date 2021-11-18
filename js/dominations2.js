function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (2명)";
	taskMap.startDate = "2021-11-12 19:30:00"; 
	taskList.push(new Array(type, "씨지아이", "Lv. 2", "  11만 석유", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 815만 골드", 15,  3));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 815만 골드", 15,  3));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 815만 골드", 15,  3));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 815만 골드", 15,  3));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 815만 골드", 15,  3));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2021-11-15 20:33:00";
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-11-14 12:42:00";
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-11-19 00:08:00";
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2021-11-12 19:30:00";
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-11-19 00:07:00";
	taskList.push(new Array(type, "명예박격", "Lv. 1", "1800만 식량", 14,  7 ));
	taskList.push(new Array(type, "명예호송", "Lv. 1", "1780만 식량", 14,  7 ));
	taskList.push(new Array(type, "고급박격", "Lv. 2", "1800만 식량", 15,  6 ));
	taskList.push(new Array(type, "고급헬기", "Lv. 2", "1800만 식량", 15,  6 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-11-15 20:32:00";
	taskList.push(new Array(type, "고급전차", "Lv. 1", "2150만 식량", 15,  6 ));
	taskList.push(new Array(type, "명예헬기", "Lv. 1", "1780만 식량", 14,  7 ));
	taskList.push(new Array(type, "고급포병", "Lv. 1", "1800만 식량", 15,  6 ));
	taskList.push(new Array(type, "고급호송", "Lv. 1", "1800만 식량", 15,  6 ));
	taskList.push(new Array(type, "강습차량", "Lv. 3", "1800만 식량", 15,  6 ));
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
