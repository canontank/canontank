function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2023-04-09 00:01:00";
	taskList.push(new Array(type, "협의회  ", "Lv. 5", " 700만 식량",  7,  0));
	taskList.push(new Array(type, "방공시설", "Lv.13", "2200만 골드", 18,  0));
	taskList.push(new Array(type, "방공시설", "Lv.13", "2200만 골드", 18,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-04-08 23:57:00";
	taskList.push(new Array(type, "타워    ", "Lv.16", "1900만 골드", 13, 12));
	taskList.push(new Array(type, "벙커    ", "Lv. 1", "  10만 석유",  5,  0)); // 미확인
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2023-04-09 00:06:00";
	taskList.push(new Array(type, "수비대  ", "Lv.15", "2000만 골드", 17, 12));
	taskList.push(new Array(type, "수비대  ", "Lv.15", "2000만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2023-04-01 19:53:00";
	taskList.push(new Array(type, "대전차포", "Lv. 5", " 450만 골드", 10,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 6", " 600만 골드", 12,  0));
	taskList.push(new Array(type, "대전차포", "Lv. 7", " 725만 골드", 13,  0));
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
	taskMap.startDate = "2023-03-31 02:06:00";
	taskList.push(new Array(type, "미샬포대", "Lv.10", " 850만 골드", 15,  0));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1010만 골드", 15, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-04-08 23:56:00";
	taskList.push(new Array(type, "유인    ", "Lv. 1", " 800만 식량", 10,  8));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-04-01 19:53:00";
	taskList.push(new Array(type, "배반    ", "Lv. 1", " 800만 식량", 10,  8));
	taskList.push(new Array(type, "공격집결", "Lv. 1", " 800만 식량", 10,  8));
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
