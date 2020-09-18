function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-09-19 00:05:00";
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 360만 골드",  4,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-09-19 00:05:00";
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 360만 골드",  4,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-09-13 18:45:00";
	taskList.push(new Array(type, "조선소  ", "Lv.12", "1200만 골드", 13,  4));
	taskList.push(new Array(type, "보루    ", "Lv. 3", " 560만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2020-09-15 02:15:00";
	taskList.push(new Array(type, "미샬격납", "Lv. 9", "  25만 석유", 17,  1));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2020-09-15 02:15:00";
	taskList.push(new Array(type, "미샬격납", "Lv. 9", "  25만 석유", 17,  1));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-09-13 18:49:00";
	taskList.push(new Array(type, "개틀링건", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "중전차  ", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "무장차량", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 5", "  25만 석유", 14,  6 ));
	taskList.push(new Array(type, "박격포병", "Lv. 1", "1780만 식량", 14,  7)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-09-05 01:40:00";
	taskList.push(new Array(type, "바주카  ", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "게릴라  ", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "에이피씨", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "전술헬기", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "포병    ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "강습차량", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
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
