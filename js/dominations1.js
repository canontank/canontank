function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-06-28 18:35:00";
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-06-21 23:30:00";
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-06-29 23:41:00";
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2020-06-20 01:14:00";
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskList.push(new Array(type, "타워    ", "Lv.13", "1330만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명)";
	taskMap.startDate = "2020-06-20 01:30:00";
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskList.push(new Array(type, "미샬포대", "Lv. 9", " 650만 골드", 13, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-06-23 02:13:00";
	taskList.push(new Array(type, "배반    ", "Lv. 3", "1000만 식량",  9, 22));
	taskList.push(new Array(type, "유인    ", "Lv. 3", "1000만 식량",  9, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-06-27 12:52:00";
	taskList.push(new Array(type, "우주헬기", "Lv. 1", "1500만 식량", 13,  8)); // 우주
	taskList.push(new Array(type, "우주강습", "Lv. 1", "1500만 식량", 13,  8)); // 우주
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
