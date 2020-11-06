function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-11-06 21:45:00";
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-11-06 21:45:00";
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-11-06 22:23:00";
	taskList.push(new Array(type, "금고    ", "Lv. 4", " 250만 식량",  5,  0));
	taskList.push(new Array(type, "비행장  ", "Lv. 8", "  28만 석유", 17,  0));
	taskList.push(new Array(type, "공장    ", "Lv.14", "28.5만 석유", 17, 12));
	taskList.push(new Array(type, "공장    ", "Lv.14", "28.5만 석유", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2020-10-18 21:28:00";
	taskList.push(new Array(type, "의회    ", "Lv. 3", " 250만 골드",  3,  5));
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
	taskMap.startDate = "2020-11-06 22:20:00";
	taskList.push(new Array(type, "숲      ", "Lv. 1", " 560만 골드", 14, 17));
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
	taskMap.startDate = "2020-10-31 12:09:00";
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
	taskMap.startDate = "2020-10-24 11:40:00";
	taskList.push(new Array(type, "포병    ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "전술헬기", "Lv. 5", "  25만 석유", 16,  4 ));
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
