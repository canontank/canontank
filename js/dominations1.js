function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2023-07-09 19:30:00";
	taskList.push(new Array(type, "사령부  ", "Lv.11", "1200만 식량", 13,  0));
	taskList.push(new Array(type, "박격포  ", "Lv.11", "1700만 골드", 17, 12));
	taskList.push(new Array(type, "박격포  ", "Lv.11", "1700만 골드", 17, 12));
	taskList.push(new Array(type, "박격포  ", "Lv.11", "1700만 골드", 17, 12));
	taskList.push(new Array(type, "박격포  ", "Lv.11", "1700만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-07-12 02:22:00";
	taskList.push(new Array(type, "공장    ", "Lv.17", "  31만 석유", 19,  0));
	taskList.push(new Array(type, "공장    ", "Lv.17", "  31만 석유", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2023-07-09 20:00:00";
	taskList.push(new Array(type, "미샬두개", "Lv.12", "2500만 골드", 16,  0));
	taskList.push(new Array(type, "미샬두개", "Lv.12", "2500만 골드", 16,  0));
	taskList.push(new Array(type, "미샬두개", "Lv.13", "3000만 골드", 17, 12));
	taskList.push(new Array(type, "미샬두개", "Lv.13", "3000만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2023-07-18 01:00:00";
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 9", "  30만 석유", 17, 12));
	taskList.push(new Array(type, "보루    ", "Lv. 5", " 850만 골드", 14,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 5", " 850만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명 → 2명)";
	taskMap.startDate = "2023-07-18 00:39:00";
	taskList.push(new Array(type, "대전차포", "Lv.12", "2200만 골드", 18,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.13", "1500만 골드", 17, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.13", "1500만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask16() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민6";
	taskMap.title = "1-6. 국민 (3명 → 1명)";
	taskMap.startDate = "2023-07-18 00:39:00";
	taskList.push(new Array(type, "대전차포", "Lv.12", "2200만 골드", 18,  0));
	taskList.push(new Array(type, "무장매복", "Lv. 1", " 3.5만 석유", 12, 12));
	taskList.push(new Array(type, "무장매복", "Lv. 2", " 4.5만 석유", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-07-18 01:00:00";
	taskList.push(new Array(type, "처칠    ", "Lv.28", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "처칠    ", "Lv.29", " 5.5만 석유",  2, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-07-18 01:00:00";
	taskList.push(new Array(type, "주코프  ", "Lv.27", " 5.5만 석유",  2, 20));
	taskList.push(new Array(type, "주코프  ", "Lv.28", " 5.5만 석유",  2, 20));
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
		setTask16();
		setTask21();
		setTask22();
		setDominations();
	} catch (e){
		alert(e);
	}
});
