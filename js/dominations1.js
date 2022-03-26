function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-03-20 18:07:00";
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (6명)";
	taskMap.startDate = "2022-03-23 22:21:00";
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2022-03-20 18:07:00";
	taskList.push(new Array(type, "금고    ", "Lv. 7", " 840만 식량", 10,  0));
	taskList.push(new Array(type, "금고    ", "Lv. 8", " 900만 식량", 11,  0));
	taskList.push(new Array(type, "금고    ", "Lv. 9", "1200만 식량", 12, 12));
	taskList.push(new Array(type, "금고    ", "Lv.10", "1400만 식량", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (1명)";
	taskMap.startDate = "2022-03-22 07:50:00";
	taskList.push(new Array(type, "클레모어", "Lv. 3", " 550만 골드", 11,  0));
	taskList.push(new Array(type, "유인함정", "Lv. 4", " 500만 골드", 11,  0));
	taskList.push(new Array(type, "유인함정", "Lv. 4", " 500만 골드", 11,  0));
	taskList.push(new Array(type, "유인함정", "Lv. 4", " 500만 골드", 11,  0));
	taskList.push(new Array(type, "신호탄  ", "Lv. 3", " 6.5만 석유", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-03-26 21:33:00";
	taskList.push(new Array(type, "손자    ", "Lv.13", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "손자    ", "Lv.14", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "페트라  ", "Lv.14", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "페트라  ", "Lv.15", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "페트라  ", "Lv.16", "   4만 석유",  1, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-03-26 21:33:00";
	taskList.push(new Array(type, "페트라  ", "Lv.13", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "주코프  ", "Lv.13", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "주코프  ", "Lv.14", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "주코프  ", "Lv.15", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "손자    ", "Lv.15", "   4만 석유",  1, 22));
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
