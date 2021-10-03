function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2021-09-18 10:32:00";
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "유정    ", "Lv.13", "2000만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (3명)";
	taskMap.startDate = "2021-10-03 23:10:00";
	taskList.push(new Array(type, "대전차포", "Lv.10", "1600만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2021-09-25 18:20:00";
	taskList.push(new Array(type, "조선소  ", "Lv.13", "1300만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2021-09-26 16:53:00";
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskList.push(new Array(type, "방공타워", "Lv.12", "2000만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2021-09-25 18:44:00";
	taskList.push(new Array(type, "타워    ", "Lv.15", "1710만 골드", 13,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 8", " 525만 골드",  8,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskList.push(new Array(type, "수비대  ", "Lv. 9", " 750만 골드", 10,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2021-10-03 23:00:00";
	taskList.push(new Array(type, "미국    ", "Lv.16", "  14만 석유", 11, 11));
	taskList.push(new Array(type, "러시아  ", "Lv.16", " 900만 골드", 11, 11));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2021-10-03 23:00:00";
	taskList.push(new Array(type, "에티오피", "Lv.16", "  14만 석유", 11, 11));
	taskList.push(new Array(type, "필리핀  ", "Lv.16", "   1만 석유",  1,  0));
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
