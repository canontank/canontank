function loadDataList() {
	$.ajax({
        type : "GET",
		url : "https://script.google.com/macros/s/AKfycbxXYhoB2GlN-BvywHI0rsMWHKcm1QObCyohabLsoZTte2Wf-zhEAZKWpJq3njgmjKkR/exec",
        data : {
            "cmd" : "get1"
        },
        success : function(rows) {
			setDominations(rows);
        },
        error : function() {
            loadDataList();
        }
    });
}

$(document).ready(function() {
	try {
		loadDataList();
	} catch (e) {
		alert(e);
	}
});
