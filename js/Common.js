var common = {

login: function loginActive(account, psw) {
		//判断密码&用户名
		if(account == 'admins' & psw == '123456') {
			mui.openWindow({
				url: 'tab-webview-main.html',
				id: 'index'
			});

		} else {
			mui.alert(' ', '账号或密码错误!', function() {});
		}
		return "12345";

	},
	
	getAjax: function getAjax(action){
		var userdata;
		mui.ajax('http://192.168.1.7:8080/app?'+action,{
				dataType:'json',
				type:'get',
				success:function(data){
				 data = data;			
				},
				error: function(xhr,type,errorThrown){
					
				}
			});
			return userdata;
		
	},
	
	
	//获取楼栋信息;
	getBuildingInfo: function getBuildingInfo() {
		return "getBuildingInfo";
	},
	
	//获取房间信息
	getRoomInfo: function getRoomInfo() {
		return "getRoomInfo";
	},
	changestr: function changeString(data){
				var result =(data == "" || data == undefined || data == null) ? "暂无" : data;
				return result;
			}


}