function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2024-05-15 16:48:00";
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 14, 10));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 14, 10));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2024-05-16 19:20:00";
	taskList.push(new Array(type, "지뢰네개", "Lv.15", "2800만 골드", 11, 15));
	taskList.push(new Array(type, "지뢰네개", "Lv.16", "3000만 골드", 13,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2024-05-07 18:22:00";
	taskList.push(new Array(type, "타워    ", "Lv.17", "2100만 골드", 14,  0));
	taskList.push(new Array(type, "지뢰네개", "Lv.15", "2800만 골드", 11, 15));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2024-05-11 12:12:00";
	taskList.push(new Array(type, "타워    ", "Lv.17", "2100만 골드", 14,  0));
	taskList.push(new Array(type, "가시철사", "Lv.11", "2100만 골드",  9, 14));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2024-05-03 03:10:00";
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "유정    ", "Lv.17", "2600만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2024-05-02 02:21:00";
	taskList.push(new Array(type, "바주카  ", "Lv. 1", "  20만 석유", 19,  0));
	taskList.push(new Array(type, "보병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "궁병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "전차    ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "포병대  ", "Lv.16", "2350만 식량", 16, 16));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2024-05-08 19:45:00";
	taskList.push(new Array(type, "정찰기  ", "Lv. 6", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "게릴라  ", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "개틀링  ", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "중전차  ", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "무장차량", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "에이피씨", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 1", "  30만 석유", 19,  0));
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
