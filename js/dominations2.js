function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2021-04-03 08:52:00";
	taskList.push(new Array(type, "전차격납", "Lv.15", "2000만 골드", 18, 12));
	taskList.push(new Array(type, "전차격납", "Lv.15", "2000만 골드", 18, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2021-04-18 23:39:00";
	taskList.push(new Array(type, "공장    ", "Lv.14", "28.5만 석유", 17, 12));
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
	taskMap.startDate = "2021-04-22 10:51:00";
	taskList.push(new Array(type, "골드창고", "Lv.17", "1050만 식량", 11,  0));
	taskList.push(new Array(type, "사령부  ", "Lv. 9", "1100만 식량", 11, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-04-22 10:51:00";
	taskList.push(new Array(type, "식량창고", "Lv.17", "1050만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-04-11 21:50:00";
	taskList.push(new Array(type, "중전차  ", "Lv.12", "  24만 석유", 17,  2 ));
	taskList.push(new Array(type, "게릴라  ", "Lv.13", "  24만 석유", 17,  2 ));
	taskList.push(new Array(type, "개틀링  ", "Lv.14", "  24만 석유", 17,  2 ));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 7", "  26만 석유", 15,  4 ));
	taskList.push(new Array(type, "응급처치", "Lv. 8", " 820만 식량", 10, 22 ));
	taskList.push(new Array(type, "파괴    ", "Lv. 6", " 970만 식량", 10, 22 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-04-05 17:27:00";
	taskList.push(new Array(type, "바주카  ", "Lv.12", "  24만 석유", 17,  2 ));
	taskList.push(new Array(type, "무장차량", "Lv.11", "  26만 석유", 17,  2 ));
	taskList.push(new Array(type, "에이피씨", "Lv. 9", "  26만 석유", 17,  2 ));
	taskList.push(new Array(type, "전술헬기", "Lv. 6", "  26만 석유", 17,  2 ));
	taskList.push(new Array(type, "일제사격", "Lv. 8", " 730만 식량", 10, 22 ));
	taskList.push(new Array(type, "배반    ", "Lv. 5", " 970만 식량", 10, 22 ));
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
