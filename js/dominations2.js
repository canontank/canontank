function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2020-04-30 10:16:00";
	taskList.push(new Array(type, "전차격납", "Lv.13", "1380만 골드", 16,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.13", "1380만 골드", 16,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (6명)";
	taskMap.startDate = "2020-04-26 19:23:00";
	taskList.push(new Array(type, "전차격납", "Lv.13", "1380만 골드", 16,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.13", "1380만 골드", 16,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0 ));
	taskList.push(new Array(type, "전차격납", "Lv.14", "1600만 골드", 18,  0 ));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (3명)";
	taskMap.startDate = "2020-05-05 00:30:00";
	taskList.push(new Array(type, "유정    ", "Lv.11", "1600만 골드", 14, 12)); // 디지털
	taskList.push(new Array(type, "유정    ", "Lv.11", "1600만 골드", 14, 12)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2020-05-07 10:53:00";
	taskList.push(new Array(type, "유정    ", "Lv.11", "1600만 골드", 14, 12)); // 디지털
	taskList.push(new Array(type, "유정    ", "Lv.11", "1600만 골드", 14, 12)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (1명)";
	taskMap.startDate = "2020-05-07 11:03:00";
	taskList.push(new Array(type, "유인함정", "Lv. 2", " 365만 골드",  9,   0));
	taskList.push(new Array(type, "유인함정", "Lv. 3", " 432만 골드", 10,   0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-04-29 16:15:00";
	taskList.push(new Array(type, "선진폭격", "Lv. 5", "  18만 석유",  8, 14 )); // 디지털
	taskList.push(new Array(type, "선진폭격", "Lv. 6", "  18만 석유",  8, 14 )); // 디지털
	taskList.push(new Array(type, "개틀링건", "Lv. 7", "14.5만 석유", 11, 10 ));
	taskList.push(new Array(type, "개틀링건", "Lv. 8", "  20만 석유", 12,  9 )); // 예상
	taskList.push(new Array(type, "개틀링건", "Lv. 9", "  23만 석유", 13, 10 )); // 예상
	taskList.push(new Array(type, "개틀링건", "Lv.10", "  24만 석유", 14,  8 )); // 예상
	taskList.push(new Array(type, "개틀링건", "Lv.11", "  25만 석유", 16,  4 )); // 예상
	taskList.push(new Array(type, "개틀링건", "Lv.12", "  25만 석유", 16,  4 )); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-04-29 18:00:00";
	taskList.push(new Array(type, "사보타주", "Lv. 8", " 900만 식량", 10, 22 ));
	taskList.push(new Array(type, "전술헬기", "Lv. 6", "  25만 석유", 16,  4 )); // 디지털
	taskList.push(new Array(type, "엠알엘  ", "Lv. 4", "21.5만 석유", 14,  6 ));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 5", "  24만 석유", 14,  6 ));
	taskList.push(new Array(type, "무장차량", "Lv. 5", "  23만 석유", 13, 10 )); // 예상
	taskList.push(new Array(type, "무장차량", "Lv. 6", "  24만 석유", 14,  8 )); // 예상
	taskList.push(new Array(type, "무장차량", "Lv. 7", "  25만 석유", 16,  4 )); // 예상
	taskList.push(new Array(type, "무장차량", "Lv. 8", "  25만 석유", 16,  4 )); // 디지털
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
	} catch (e){
		alert(e);
	}
});
