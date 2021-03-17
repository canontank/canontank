function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2021-03-17 21:17:00";
	taskList.push(new Array(type, "전차격납", "Lv.15", "2000만 골드", 18, 12));
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
	taskMap.startDate = "2021-03-16 14:50:00";
	taskList.push(new Array(type, "수비대  ", "Lv. 7", " 300만 골드",  3,  4));
	taskList.push(new Array(type, "비행장  ", "Lv. 8", "  28만 석유", 17,  0));
	taskList.push(new Array(type, "공장    ", "Lv.14", "28.5만 석유", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-03-15 17:40:00";
	taskList.push(new Array(type, "골드창고", "Lv.13", " 320만 식량",  7,  0));
	taskList.push(new Array(type, "골드창고", "Lv.14", " 470만 식량",  8,  0));
	taskList.push(new Array(type, "골드창고", "Lv.15", " 600만 식량",  9,  0));
	taskList.push(new Array(type, "골드창고", "Lv.16", " 850만 식량", 10, 12));
	taskList.push(new Array(type, "골드창고", "Lv.17", "1050만 식량", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-03-15 17:40:00";
	taskList.push(new Array(type, "식량창고", "Lv.13", " 320만 골드",  7,  0));
	taskList.push(new Array(type, "식량창고", "Lv.14", " 470만 골드",  8,  0));
	taskList.push(new Array(type, "식량창고", "Lv.15", " 600만 골드",  9,  0));
	taskList.push(new Array(type, "식량창고", "Lv.16", " 850만 골드", 10, 12));
	taskList.push(new Array(type, "식량창고", "Lv.17", "1050만 골드", 11,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-03-14 00:08:00";
	taskList.push(new Array(type, "정보폭격", "Lv. 4", "  19만 석유",  9,  0 ));
	taskList.push(new Array(type, "정보폭격", "Lv. 5", "  19만 석유",  9,  0 ));
	taskList.push(new Array(type, "정보폭격", "Lv. 6", "  19만 석유",  9,  0 ));
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
	taskMap.startDate = "2021-03-17 21:09:00";
	taskList.push(new Array(type, "정보정찰", "Lv. 5", "  19만 석유",  9,  0 ));
	taskList.push(new Array(type, "정보정찰", "Lv. 6", "  19만 석유",  9,  0 ));
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
