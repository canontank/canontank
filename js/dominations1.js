function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2021-01-27 21:33:00";
	taskList.push(new Array(type, "요새    ", "Lv.10", "  29만 석유", 16,  0));
	taskList.push(new Array(type, "미샬격납", "Lv.10", "  26만 석유", 17, 12));
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
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2021-01-27 21:51:00";
	taskList.push(new Array(type, "씨지아이", "Lv. 1", "  10만 석유", 15, 12));
	taskList.push(new Array(type, "정유공장", "Lv. 9", "1050만 골드", 12,  0));
	taskList.push(new Array(type, "의회    ", "Lv. 4", " 600만 골드", 12, 10));
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-01-28 01:25:00";
	taskList.push(new Array(type, "캐러밴  ", "Lv.13", " 200만 식량",  5,  0));
	taskList.push(new Array(type, "캐러밴  ", "Lv.14", " 280만 식량",  6,  0));
	taskList.push(new Array(type, "캐러밴  ", "Lv.14", " 280만 식량",  6,  0));
	taskList.push(new Array(type, "캐러밴  ", "Lv.14", " 280만 식량",  6,  0));
	taskList.push(new Array(type, "캐러밴  ", "Lv.14", " 280만 식량",  6,  0));
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskList.push(new Array(type, "식량창고", "Lv.17", " 945만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-01-23 13:33:00";
	taskList.push(new Array(type, "농장    ", "Lv.13", " 200만 골드",  5,  0));
	taskList.push(new Array(type, "농장    ", "Lv.13", " 200만 골드",  5,  0));
	taskList.push(new Array(type, "농장    ", "Lv.14", " 280만 골드",  6,  0));
	taskList.push(new Array(type, "농장    ", "Lv.14", " 280만 골드",  6,  0));
	taskList.push(new Array(type, "농장    ", "Lv.14", " 280만 골드",  6,  0));
	taskList.push(new Array(type, "농장    ", "Lv.14", " 280만 골드",  6,  0));
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskList.push(new Array(type, "골드창고", "Lv.17", " 945만 식량", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-01-22 23:47:00";
	taskList.push(new Array(type, "정보정찰", "Lv. 3", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "정보정찰", "Lv. 4", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "정보정찰", "Lv. 5", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "정보정찰", "Lv. 6", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "강습차량", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-01-24 12:14:00";
	taskList.push(new Array(type, "정보폭격", "Lv. 4", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "정보폭격", "Lv. 5", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "정보폭격", "Lv. 6", "  20만 석유",  9,  0)); // 정보화
	taskList.push(new Array(type, "전술헬기", "Lv. 5", "  25만 석유", 16,  4 ));
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
