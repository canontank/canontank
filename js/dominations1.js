function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-04-12 19:59:00";
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (6명)";
	taskMap.startDate = "2022-04-17 19:11:00";
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2022-04-10 01:25:00";
	taskList.push(new Array(type, "금고    ", "Lv. 9", "1200만 식량", 12, 12));
	taskList.push(new Array(type, "금고    ", "Lv.10", "1400만 식량", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (1명)";
	taskMap.startDate = "2022-04-12 19:37:00";
	taskList.push(new Array(type, "유인함정", "Lv. 4", " 500만 골드", 11,  0));
	taskList.push(new Array(type, "유인함정", "Lv. 4", " 500만 골드", 11,  0));
	taskList.push(new Array(type, "신호탄  ", "Lv. 3", " 6.5만 석유", 12,  0));
	taskList.push(new Array(type, "가시함정", "Lv. 6", "  40만 골드",  2,  9));
	taskList.push(new Array(type, "매복함정", "Lv.11", " 650만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-04-18 19:43:00";
	taskList.push(new Array(type, "페트라  ", "Lv.20", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "페트라  ", "Lv.21", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "페트라  ", "Lv.22", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "페트라  ", "Lv.23", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "페트라  ", "Lv.24", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "페트라  ", "Lv.25", "   5만 석유",  2, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-04-18 19:43:00";
	taskList.push(new Array(type, "주코프  ", "Lv.20", "   4만 석유",  1, 22));
	taskList.push(new Array(type, "손자    ", "Lv.21", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "손자    ", "Lv.22", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "손자    ", "Lv.23", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "손자    ", "Lv.24", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "손자    ", "Lv.25", "   5만 석유",  2, 20));
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
