function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2023-09-06 00:09:00";
	taskList.push(new Array(type, "전차격납", "Lv.17", "2500만 골드", 19, 12));
	taskList.push(new Array(type, "전차격납", "Lv.17", "2500만 골드", 19, 12));
	taskList.push(new Array(type, "전차격납", "Lv.17", "2500만 골드", 19, 12));
	taskList.push(new Array(type, "전차격납", "Lv.17", "2500만 골드", 19, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-09-20 05:30:00";
	taskList.push(new Array(type, "사령부  ", "Lv.13", "1300만 식량", 15,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 400만 골드",  3,  4));
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 400만 골드",  3,  4));
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 400만 골드",  3,  4));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2023-09-20 06:10:00";
	taskList.push(new Array(type, "보루    ", "Lv. 2", " 400만 골드",  3,  4));
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 9", "  30만 석유", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2023-08-29 06:15:00";
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명)";
	taskMap.startDate = "2023-09-20 05:30:00";
	taskList.push(new Array(type, "미샬포대", "Lv. 7", " 500만 골드", 10, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1020만 골드", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1020만 골드", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1020만 골드", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1020만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-09-16 02:35:00";
	taskList.push(new Array(type, "중전차  ", "Lv.16", "  28만 석유", 18, 12));
	taskList.push(new Array(type, "무장차량", "Lv.16", "  28만 석유", 18, 12));
	taskList.push(new Array(type, "엠알엘  ", "Lv.16", "  28만 석유", 18, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-09-20 06:10:00";
	taskList.push(new Array(type, "바주카  ", "Lv.16", "  28만 석유", 18, 12));
	taskList.push(new Array(type, "에이피씨", "Lv.16", "  28만 석유", 18, 12));
	taskList.push(new Array(type, "헬리곱터", "Lv.16", "  28만 석유", 18, 12));
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
	} catch (e) {
		alert(e);
	}
});
