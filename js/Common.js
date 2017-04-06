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
		mui.ajax('http://117.146.77.26:8080/app?'+action,{
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
	
	
	//获取type信息;
	getType: function getType(cmd,actionid,params) {
		var areaStr = '';
		//获取宗教信仰列表
			  mui.ajax('http://124.117.230.75:8080/app?cmd=getdictbytype&dictype='+cmd,{
				dataType:'json',
				type:'get',
				success:function(data){
				area_name = '<option value="">请选择</option>';
				for (i=0;i<data.data.length;i++) {		
					
					area_name +='<option value="'+data.data[i].ids+'" >'+ data.data[i].val+'</option>';
							
				}
				areaStr = area_name;
				document.getElementById(actionid).innerHTML = area_name;
				},
				error: function(xhr,type,errorThrown){
				}
				});
				
				return areaStr;
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