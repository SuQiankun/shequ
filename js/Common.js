var common = {
	
login: function loginActive(account, psw) {
		//判断密码&用户名
		if(account == 'admins' & psw == '123456') {
			mui.openWindow({
				url: 'index.html',
				id: 'index'
			});

		} else {
			mui.alert(' ', '账号或密码错误!', function() {});
		}
		return "12345";

	},
	//获取楼栋信息;
	getBuildingInfo: function getBuildingInfo() {
		return "getBuildingInfo";
	},
	
	//获取房间信息
	getRoomInfo: function getRoomInfo() {
		return "getRoomInfo";
	}


}