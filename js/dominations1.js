function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2021-08-14 12:40:00";
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (3명)";
	taskMap.startDate = "2021-08-29 02:20:00";
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.10", "1600만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-08-17 03:00:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-08-26 19:48:00";
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2021-08-17 03:20:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-08-29 02:20:00";
	taskList.push(new Array(type, "아즈텍  ", "Lv.16", " 720만 식량", 11, 11));
	taskList.push(new Array(type, "몽골    ", "Lv.16", " 900만 식량", 11, 11));
	taskList.push(new Array(type, "체로키  ", "Lv.16", " 900만 식량", 11, 11));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-08-29 02:20:00";
	taskList.push(new Array(type, "이집트  ", "Lv.16", " 900만 골드", 11, 11));
	taskList.push(new Array(type, "마오라  ", "Lv.16", " 900만 골드", 11, 11));
	taskList.push(new Array(type, "인도    ", "Lv.16", " 900만 골드", 11, 11));
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
