function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-04-30 11:36:00";
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16, 12)); // 미확인
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16, 12)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-05-02 12:51:00";
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16, 12)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-05-03 10:42:00";
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16, 12)); // 미확인
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16, 12)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (6명)";
	taskMap.startDate = "2020-04-27 11:12:00";
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-05-04 20:08:00";
	taskList.push(new Array(type, "사보타주", "Lv. 3", " 900만 식량",  9, 22));
	taskList.push(new Array(type, "보호    ", "Lv. 3", " 650만 식량",  9, 22));
	taskList.push(new Array(type, "일제사격", "Lv. 3", " 730만 식량",  9, 22));
	taskList.push(new Array(type, "응급처치", "Lv. 3", " 820만 식량",  9, 22));
	taskList.push(new Array(type, "파괴    ", "Lv. 3", "1000만 식량",  9, 22));
	taskList.push(new Array(type, "배반    ", "Lv. 3", "1000만 식량",  9, 22));
	taskList.push(new Array(type, "유인    ", "Lv. 3", "1000만 식량",  9, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-05-04 20:19:00";
	taskList.push(new Array(type, "엠알엘  ", "Lv. 5", "  24만 석유", 14,  6)); // 디지털 (예상)
	taskList.push(new Array(type, "우주포병", "Lv. 1", "1500만 식량", 13,  8)); // 우주
	taskList.push(new Array(type, "우주야전", "Lv. 1", "1500만 식량", 13,  8)); // 우주
	taskList.push(new Array(type, "우주마차", "Lv. 1", "1500만 식량", 13,  8)); // 우주
	taskList.push(new Array(type, "우주헬기", "Lv. 1", "1500만 식량", 13,  8)); // 우주
	taskList.push(new Array(type, "우주강습", "Lv. 1", "1500만 식량", 13,  8)); // 우주
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
