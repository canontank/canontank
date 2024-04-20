function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2024-04-12 13:00:00";
	taskList.push(new Array(type, "수비대  ", "Lv.16", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2024-04-21 02:17:00";
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2024-04-20 08:17:00";
	taskList.push(new Array(type, "사령부  ", "Lv.14", "1500만 식량", 16,  0));
	taskList.push(new Array(type, "식량저장", "Lv.19", "1100만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2024-04-14 15:53:00";
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2024-04-17 20:00:00";
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2024-04-18 23:44:00";
	taskList.push(new Array(type, "전차    ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "공병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "박격포병", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "포병대  ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "헬리콥터", "Lv.16", "2350만 식량", 16, 16));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2024-04-11 19:37:00";
	taskList.push(new Array(type, "정찰기  ", "Lv. 4", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 5", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 6", "  20만 석유",  9, 20));
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
