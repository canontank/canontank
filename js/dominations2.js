function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2022-04-05 20:24:00";
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
	taskMap.startDate = "2022-04-01 19:52:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "대학    ", "Lv. 9", "1000만 골드", 12, 12));
	taskList.push(new Array(type, "대학    ", "Lv.10", "1000만 골드", 13,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2022-03-26 21:56:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "의회    ", "Lv. 5", "1200만 골드", 14,  0));
	taskList.push(new Array(type, "의회    ", "Lv. 6", "1300만 골드", 15,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2022-04-05 20:49:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "조선소  ", "Lv.13", "1300만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2022-04-07 19:50:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1800만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-04-02 17:57:00";
	taskList.push(new Array(type, "미국    ", "Lv. 5", "   6만 석유",  7, 14));
	taskList.push(new Array(type, "에티오피", "Lv. 5", "   6만 석유",  7, 14)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-04-04 23:47:00";
	taskList.push(new Array(type, "필리핀  ", "Lv. 4", "   6만 석유",  3, 20)); // 미확인
	taskList.push(new Array(type, "필리핀  ", "Lv. 5", "   6만 석유",  7, 14)); // 미확인
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
