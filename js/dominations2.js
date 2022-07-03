function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명 → 5명)";
	taskMap.startDate = "2022-06-28 21:45:00";
	taskList.push(new Array(type, "비행장  ", "Lv. 9", "  30만 석유", 18,  0));
	taskList.push(new Array(type, "요새    ", "Lv.11", "  15만 석유", 17,  0));
	taskList.push(new Array(type, "정유공장", "Lv.10", "1100만 골드", 12, 12));
	taskList.push(new Array(type, "훈련소  ", "Lv.14", "1900만 식량", 14, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명 → 3명)";
	taskMap.startDate = "2022-06-28 19:40:00";
	taskList.push(new Array(type, "공장    ", "Lv.16", "  30만 석유", 18, 12));
	taskList.push(new Array(type, "요새    ", "Lv.11", "  15만 석유", 17,  0));
	taskList.push(new Array(type, "성채    ", "Lv. 7", "1200만 식량",  7,  0));
	taskList.push(new Array(type, "길드관문", "Lv. 8", " 770만 식량",  8,  1));
	taskList.push(new Array(type, "대전차포", "Lv.12", "2200만 골드", 18,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2022-06-28 21:45:00";
	taskList.push(new Array(type, "용병캠프", "Lv.15", "1800만 식량", 16, 12));
	taskList.push(new Array(type, "비행장  ", "Lv. 9", "  30만 석유", 18,  0));
	taskList.push(new Array(type, "공장    ", "Lv.16", "  30만 석유", 18, 12));
	taskList.push(new Array(type, "무기고  ", "Lv.16", "2200만 식량", 13, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (6명)";
	taskMap.startDate = "2022-06-23 20:47:00";
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "미샬격납", "Lv.12", "27.2만 석유", 18, 12));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskList.push(new Array(type, "전차격납", "Lv.16", "2250만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-06-27 19:20:00";
	taskList.push(new Array(type, "아즈텍  ", "Lv. 8", "1000만 식량", 11, 12));
	taskList.push(new Array(type, "몽골    ", "Lv. 8", "1000만 식량", 11, 12));
	taskList.push(new Array(type, "선봉수송", "Lv. 1", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉수송", "Lv. 2", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉수송", "Lv. 3", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉수송", "Lv. 4", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉수송", "Lv. 5", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉수송", "Lv. 6", "  25만 석유", 15,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-06-27 19:20:00";	
	taskList.push(new Array(type, "필리핀  ", "Lv. 8", "  11만 석유", 11, 12));
	taskList.push(new Array(type, "이집트  ", "Lv. 8", "1000만 골드", 11, 12));
	taskList.push(new Array(type, "선봉전투", "Lv. 1", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉전투", "Lv. 2", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉전투", "Lv. 3", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉전투", "Lv. 4", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉전투", "Lv. 5", "  25만 석유", 15,  0)); // 미확인
	taskList.push(new Array(type, "선봉전투", "Lv. 6", "  25만 석유", 15,  0)); // 미확인
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
