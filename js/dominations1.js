function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-06-26 23:10:00";
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
	taskMap.startDate = "2022-06-23 23:08:00";
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
	taskMap.startDate = "2022-06-16 16:57:00";
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
	taskMap.startDate = "2022-06-24 01:38:00";
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
	taskMap.startDate = "2022-06-26 22:50:00";
	taskList.push(new Array(type, "노부나가", "Lv.26", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "노부나가", "Lv.27", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "노부나가", "Lv.28", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "노부나가", "Lv.29", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "노부나가", "Lv.30", "   9만 석유",  2, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-06-26 22:50:00";
	taskList.push(new Array(type, "나폴레옹", "Lv.26", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "나폴레옹", "Lv.27", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "나폴레옹", "Lv.28", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "나폴레옹", "Lv.29", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "나폴레옹", "Lv.30", "   9만 석유",  2, 20));
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
