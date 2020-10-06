function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2020-10-05 00:41:00";
	taskList.push(new Array(type, "타운센터", "Lv. 1", "1850만 골드", 16,  7));
	taskList.push(new Array(type, "도서관  ", "Lv.15", "1800만 골드", 18,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2020-10-05 00:41:00";
	taskList.push(new Array(type, "타운센터", "Lv. 1", "1850만 골드", 16,  7));
	taskList.push(new Array(type, "용병캠프", "Lv.17", "1800만 식량", 18,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2020-10-05 00:41:00";
	taskList.push(new Array(type, "타운센터", "Lv. 1", "1850만 골드", 16,  7));
	taskList.push(new Array(type, "비행장  ", "Lv. 8", "  28만 석유", 18,  0)); // 미확인
	taskList.push(new Array(type, "비행장  ", "Lv. 8", "  28만 석유", 18,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2020-10-04 00:06:00";
	taskList.push(new Array(type, "숲      ", "Lv. 1", " 560만 골드", 14, 17));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2020-10-04 00:06:00";
	taskList.push(new Array(type, "숲      ", "Lv. 1", " 560만 골드", 14, 17));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskList.push(new Array(type, "유정    ", "Lv.12", "1800만 골드", 15, 22));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2020-09-29 22:31:00";
	taskList.push(new Array(type, "개틀링건", "Lv. 5", "  25만 석유", 16,  4 ));	
	taskList.push(new Array(type, "무장차량", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 5", "  25만 석유", 14,  6 ));
	taskList.push(new Array(type, "박격포병", "Lv. 1", "1780만 식량", 14,  7)); // 디지털
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2020-10-06 22:01:00";	
	taskList.push(new Array(type, "에이피씨", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "전술헬기", "Lv. 5", "  25만 석유", 16,  4 ));
	taskList.push(new Array(type, "포병    ", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
	taskList.push(new Array(type, "강습차량", "Lv. 1", "1800만 식량", 14,  7)); // 디지털
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
