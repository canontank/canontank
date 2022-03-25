function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2022-03-19 19:25:00";
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2022-03-19 19:52:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2022-03-14 20:09:00";
	taskList.push(new Array(type, "타워    ", "Lv.14", "1600만 골드", 12, 12));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2022-03-23 23:10:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2022-03-25 22:01:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-03-25 22:00:00";
	taskList.push(new Array(type, "미국    ", "Lv. 4", "   6만 석유",  3, 20));
	taskList.push(new Array(type, "에티오피", "Lv. 4", "   6만 석유",  3, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-03-17 08:10:00";
	taskList.push(new Array(type, "고급헬기", "Lv. 2", "1800만 식량", 15,  6));
	taskList.push(new Array(type, "필리핀  ", "Lv. 2", "   1만 석유",  0, 23));
	taskList.push(new Array(type, "필리핀  ", "Lv. 3", "   1만 석유",  0, 23)); // 미확인
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
