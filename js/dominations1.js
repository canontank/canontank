function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2021-10-21 16:00:00";
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (3명)";
	taskMap.startDate = "2021-10-22 22:55:00";
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
	taskMap.startDate = "2021-10-27 08:24:00";
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-11-01 22:42:00";
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2021-10-27 08:24:00";
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-11-01 16:12:00";
	taskList.push(new Array(type, "알렉산더", "Lv.17", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "알렉산더", "Lv.18", "   4만 석유",  1, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-11-01 16:12:00";
	taskList.push(new Array(type, "필리핀  ", "Lv. 6", "  10만 석유",  9, 12));
	taskList.push(new Array(type, "필리핀  ", "Lv. 7", "  15만 석유", 12,  0)); // 예상
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
