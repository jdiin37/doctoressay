var ajax_url = function() {
		//return 'servlets/ServletAgent';
		return 'http://172.16.2.189:8080/FangEmrServices/servlets/ServletAgent';
}

var getAjaxData = function (serviceName,pcsParam){
	return{
		serviceName : serviceName,
		parameters : pcsParam
	};
};

function ajax_Post(paramData){			
	return $.ajax({
				method : "POST",
				url : ajax_url(),
				data : paramData,
				dataType : "json",
				error: function(jqXHR, textStatus, errorThrown) {
					if(jqXHR.status==500){  //500 Error
						alert(" 500 Error ");
					}   
				}
			});	
}
