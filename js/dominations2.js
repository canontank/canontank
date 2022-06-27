function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2022-06-13 19:23:00";
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
	taskMap.startDate = "2022-06-19 18:45:00";
	taskList.push(new Array(type, "금고    ", "Lv. 8", " 900만 식량", 11,  0));
	taskList.push(new Array(type, "금고    ", "Lv. 9", "1200만 식량", 12, 12));
	taskList.push(new Array(type, "금고    ", "Lv.10", "1400만 식량", 13,  0));
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
	taskMap.startDate = "2022-06-23 20:47:00";
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.11", "1360만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (1명)";
	taskMap.startDate = "2022-06-17 19:30:00";
	taskList.push(new Array(type, "신호탄  ", "Lv. 3", " 6.5만 석유", 12,  0));
	taskList.push(new Array(type, "신호탄  ", "Lv. 3", " 6.5만 석유", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-06-27 19:20:00";
	taskList.push(new Array(type, "아즈텍  ", "Lv. 8", "1000만 식량", 11, 12)); // 미확인
	taskList.push(new Array(type, "몽골    ", "Lv. 8", "1000만 식량", 11, 12)); // 미확인
	taskList.push(new Array(type, "체로키  ", "Lv. 8", "1000만 식량", 11, 12)); // 미확인
	taskList.push(new Array(type, "미국    ", "Lv. 8", "  15만 석유", 11, 12)); // 미확인
	taskList.push(new Array(type, "에티오피", "Lv. 8", "  15만 석유", 11, 12)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-06-27 19:20:00";	
	taskList.push(new Array(type, "필리핀  ", "Lv. 8", "  11만 석유", 11, 12)); // 미확인
	taskList.push(new Array(type, "이집트  ", "Lv. 8", "1000만 골드", 11, 12)); // 미확인
	taskList.push(new Array(type, "마오리  ", "Lv. 8", "1000만 골드", 11, 12)); // 미확인
	taskList.push(new Array(type, "인도    ", "Lv. 8", "1000만 골드", 11, 12)); // 미확인
	taskList.push(new Array(type, "러시아  ", "Lv. 8", "1000만 골드", 11, 12)); // 미확인
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
	} catch (e) {
		alert(e);
	}
});
