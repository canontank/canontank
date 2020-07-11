function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2020-07-05 03:32:00";
	taskList.push(new Array(type, "전차격납", "Lv.14", "1700만 골드", 18,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1700만 골드", 18,  0 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-07-06 23:43:00";
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-07-02 22:44:00";
	taskList.push(new Array(type, "방공타워", "Lv. 5", "1060만 골드", 10, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2020-07-03 23:15:00";
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 6", "1220만 골드", 11,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 7", "1400만 골드", 12,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 8", "1500만 골드", 13,  0));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv. 9", "1700만 골드", 14, 12));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskList.push(new Array(type, "방공타워", "Lv.10", "1800만 골드", 16,  6));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-07-11 23:06:00";
    	taskList.push(new Array(type, "무장차량", "Lv. 8", "  25만 석유", 16,  4 )); // 디지털
    	taskList.push(new Array(type, "엠알엘  ", "Lv. 4", "21.5만 석유", 14,  6 ));
    	taskList.push(new Array(type, "엠알엘  ", "Lv. 5", "  24만 석유", 14,  6 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
    var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-07-02 22:41:00";
    	taskList.push(new Array(type, "개틀링건", "Lv.10", "  24만 석유", 14,  7 ));
    	taskList.push(new Array(type, "개틀링건", "Lv.11", "  25만 석유", 16,  4 )); // 예상
    	taskList.push(new Array(type, "개틀링건", "Lv.12", "  25만 석유", 16,  4 )); // 디지털
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
