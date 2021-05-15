function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2021-05-04 22:30:00";
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (3명)";
	taskMap.startDate = "2021-05-10 12:53:00";
	taskList.push(new Array(type, "대전차포", "Lv. 5", " 450만 골드", 10,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 6", " 600만 골드", 12,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 7", " 725만 골드", 13,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 8", "1070만 골드", 14,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 9", "1250만 골드", 15,  0));
	taskList.push(new Array(type, "대전차포", "Lv.10", "1600만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명 → 5명)";
	taskMap.startDate = "2021-05-12 22:43:00";
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "훈련소  ", "Lv.13", "1800만 식량", 14,  0));
	taskList.push(new Array(type, "훈련소  ", "Lv.13", "1800만 식량", 14,  0));
	taskList.push(new Array(type, "훈련소  ", "Lv.13", "1800만 식량", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-05-15 16:48:00";
	taskList.push(new Array(type, "방공타워", "Lv. 5", "1060만 골드", 10, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  5));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2021-05-12 23:07:00";
	taskList.push(new Array(type, "무기고  ", "Lv.14", "1900만 식량", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskList.push(new Array(type, "방공타워", "Lv.11", "1900만 골드", 16, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-05-25 23:07:00";
	taskList.push(new Array(type, "엠알엘  ", "Lv. 7", "28.5만 석유", 15,  4)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-05-25 23:07:00";
	taskList.push(new Array(type, "보병    ", "Lv.16", "1650만 식량", 16,  0)); // 미확인
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
