function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2023-05-05 02:54:00";
	taskList.push(new Array(type, "방공시설", "Lv.13", "2200만 골드", 18,  0));
	taskList.push(new Array(type, "의회    ", "Lv. 7", "2100만 골드", 17,  0));
	taskList.push(new Array(type, "사령부  ", "Lv.10", "1100만 식량", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-05-17 21:15:00";
	taskList.push(new Array(type, "벙커    ", "Lv. 4", "  23만 석유", 12,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 5", "25.5만 석유", 13,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 6", "26.5만 석유", 14,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 7", "  27만 석유", 15, 12));
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 9", "  30만 석유", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2023-05-15 21:50:00";
	taskList.push(new Array(type, "미샬세개", "Lv.11", "3030만 골드", 15, 12));
	taskList.push(new Array(type, "미샬세개", "Lv.12", "3600만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2023-05-07 18:38:00";
	taskList.push(new Array(type, "대전차포", "Lv. 8", "1070만 골드", 14,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 9", "1250만 골드", 15,  0));
	taskList.push(new Array(type, "대전차포", "Lv.10", "1600만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.12", "2200만 골드", 18,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명)";
	taskMap.startDate = "2023-05-17 21:30:00";
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1250만 골드", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1250만 골드", 16,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.12", "1250만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-05-22 22:40:00";
	taskList.push(new Array(type, "노부나가", "Lv.28", "   7만 석유",  2, 20));
	taskList.push(new Array(type, "맥아더  ", "Lv.29", "   7만 석유",  2, 20));
	taskList.push(new Array(type, "맥아더  ", "Lv.30", "   7만 석유",  2, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-05-22 22:40:00";
	taskList.push(new Array(type, "나폴레옹", "Lv.28", "   7만 석유",  2, 20));
	taskList.push(new Array(type, "잔다르크", "Lv.29", "   7만 석유",  2, 20));
	taskList.push(new Array(type, "잔다르크", "Lv.30", "   7만 석유",  2, 20));
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
