function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-05-20 19:41:00";
	taskList.push(new Array(type, "미샬격납", "Lv.11", "  26만 석유", 18,  0));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (6명)";
	taskMap.startDate = "2022-05-26 19:52:00";
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2022-06-01 17:22:00";
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (1명)";
	taskMap.startDate = "2022-06-01 14:48:00";
	taskList.push(new Array(type, "가시함정", "Lv. 7", "  75만 골드",  5,  0));
	taskList.push(new Array(type, "가시함정", "Lv. 8", " 150만 골드",  7,  0));
	taskList.push(new Array(type, "가시함정", "Lv. 9", " 250만 골드",  9,  0));
	taskList.push(new Array(type, "가시함정", "Lv.10", " 300만 골드", 10,  0));
	taskList.push(new Array(type, "가시함정", "Lv.11", " 370만 골드", 10, 12));
	taskList.push(new Array(type, "가시함정", "Lv.12", " 425만 골드", 11,  0));
	taskList.push(new Array(type, "가시함정", "Lv.13", " 505만 골드", 12,  0));
	taskList.push(new Array(type, "가시함정", "Lv.14", " 590만 골드", 13,  0));
	taskList.push(new Array(type, "가시함정", "Lv.15", " 700만 골드", 14, 12));
	taskList.push(new Array(type, "가시함정", "Lv.16", " 840만 골드", 16,  0));
	taskList.push(new Array(type, "가시함정", "Lv.17", " 950만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-06-05 15:30:00";
	taskList.push(new Array(type, "알렉산더", "Lv.28", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "알렉산더", "Lv.29", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "알렉산더", "Lv.30", " 5.5만 석유",  2, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-06-05 15:30:00";
	taskList.push(new Array(type, "클레오  ", "Lv.28", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "클레오  ", "Lv.29", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "클레오  ", "Lv.30", " 5.5만 석유",  2, 20));
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
