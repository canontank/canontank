function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명 → 4명)";
	taskMap.startDate = "2021-11-06 23:00:00";
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (3명 → 2명)";
	taskMap.startDate = "2021-11-10 22:18:00";
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 810만 골드", 15,  2));
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 810만 골드", 15,  2));
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 810만 골드", 15,  2));
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 810만 골드", 15,  2));
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 810만 골드", 15,  2));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-11-06 10:23:00";
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
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
	taskMap.startDate = "2021-11-14 12:36:00";
	taskList.push(new Array(type, "저격타워", "Lv. 5", " 950만 골드", 10,  0));
	taskList.push(new Array(type, "저격타워", "Lv. 6", "1100만 골드", 11,  0));
	taskList.push(new Array(type, "저격타워", "Lv. 7", "1160만 골드", 11, 12));
	taskList.push(new Array(type, "저격타워", "Lv. 8", "1270만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-11-14 12:32:00";
	taskList.push(new Array(type, "클레오  ", "Lv.16", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "클레오  ", "Lv.17", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "클레오  ", "Lv.18", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "클레오  ", "Lv.19", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "클레오  ", "Lv.20", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "클레오  ", "Lv.21", "   4만 석유",  1, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-11-10 12:11:00";
	taskList.push(new Array(type, "필리핀  ", "Lv. 7", "  10만 석유", 10, 11));
	taskList.push(new Array(type, "필리핀  ", "Lv. 8", "  15만 석유", 12,  0)); // 예상
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
