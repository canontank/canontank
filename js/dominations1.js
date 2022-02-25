function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-02-19 05:43:00";
	taskList.push(new Array(type, "유정두개", "Lv.14", "4500만 골드", 17,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
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
	taskMap.title = "1-2. 국민 (4명 → 6명)";
	taskMap.startDate = "2022-02-22 14:12:00";
	taskList.push(new Array(type, "박격포  ", "Lv.10", "1530만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
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
	taskMap.title = "1-3. 국민 (4명 → 6명)";
	taskMap.startDate = "2022-02-25 13:22:00";
	taskList.push(new Array(type, "저격타워", "Lv. 9", "1400만 골드", 13,  0));
	taskList.push(new Array(type, "금고    ", "Lv. 6", " 575만 식량",  9,  0));
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
	taskMap.title = "1-4. 국민 (4명 → 0명)";
	taskMap.startDate = "2022-02-22 14:12:00";
	taskList.push(new Array(type, "금고    ", "Lv. 5", " 400만 식량",  7,  0));
	taskList.push(new Array(type, "도로    ", "Lv. 9", " 650만 식량",  7,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (1명)";
	taskMap.startDate = "2022-02-19 05:43:00";
	taskList.push(new Array(type, "클레모어", "Lv. 2", " 490만 골드", 10,  0));
	taskList.push(new Array(type, "클레모어", "Lv. 3", " 550만 골드", 11,  0));
	taskList.push(new Array(type, "클레모어", "Lv. 3", " 550만 골드", 11,  0));
	taskList.push(new Array(type, "클레모어", "Lv. 3", " 550만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-02-14 13:16:00";
	taskList.push(new Array(type, "엠알엘  ", "Lv. 8", "  26만 석유", 17, 14));
	taskList.push(new Array(type, "페트라  ", "Lv. 2", "   1만 석유",  0,  8));
	taskList.push(new Array(type, "페트라  ", "Lv. 3", "   1만 석유",  0,  8));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-02-25 13:22:00";
	taskList.push(new Array(type, "노부나가", "Lv.21", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "주코프  ", "Lv. 2", "  23만 식량",  0,  8));
	taskList.push(new Array(type, "주코프  ", "Lv. 3", "  50만 식량",  0,  8));
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
