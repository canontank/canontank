function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2024-05-11 12:01:00";
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
	taskMap.startDate = "2024-05-03 21:20:00";
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
	taskMap.startDate = "2024-05-07 02:15:00";
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2200만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2024-05-02 02:28:00";
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
	taskMap.startDate = "2024-05-07 02:25:00";
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
	taskMap.startDate = "2024-05-03 21:10:00";
	taskList.push(new Array(type, "사보타주", "Lv.10", "1000만 식량", 10, 19));
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
	taskMap.startDate = "2024-05-10 20:45:00";
	taskList.push(new Array(type, "중전차  ", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "개틀링  ", "Lv. 1", "  30만 석유", 19,  0));
	taskList.push(new Array(type, "무장차량", "Lv. 1", "  30만 석유", 19,  0));
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
