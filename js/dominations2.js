function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (2명)";
	taskMap.startDate = "2021-11-29 02:17:00"; 
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
	taskMap.startDate = "2021-12-03 21:36:00";
	taskList.push(new Array(type, "타워    ", "Lv.11", " 760만 골드",  9,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-11-28 21:55:00";
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
	taskMap.startDate = "2021-11-28 02:48:00";
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
	taskMap.startDate = "2021-11-30 01:08:00";
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
	taskMap.startDate = "2021-12-02 20:06:00";
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
	taskMap.startDate = "2021-11-30 20:56:00";
	taskList.push(new Array(type, "고급포병", "Lv. 1", "1800만 식량", 15,  6 ));
	taskList.push(new Array(type, "명예헬기", "Lv. 1", "1780만 식량", 14,  7 ));
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
