var common = {
getSheQu: function getSheQu(callback) {
//获取社区列表
			var resultStr = ''; 
			mui.ajax('http://124.117.230.75:8080/app?cmd=getcommunitylist',{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name ='<option value="">请选择</option>';
				for (i=0;i<data.data.length;i++) {

					if (data.data.length  > 1) {
						area_name +=
						'<option value="'+
						data.data[i].area_id	
						+'">'+ data.data[i].area_name+'</option>';
					} else{
						
						area_name +=
						'<option value="'+
						data.data[i].area_id
						+'" selected = selected>'+ data.data[i].area_name+'</option>';
					}
				}
				resultStr = area_name;
				callback(resultStr);		
				},
				error: function(xhr,type,errorThrown){
				}
			});
	},
	
getXiaoqu: function getXiaoqqu(params,callback){
				mui.ajax('http://124.117.230.75:8080/app?cmd=getvillagebycommunityid&communityid='+params,{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name = '<option >请选择</option>';
				
				for (i=0;i<data.data.length;i++) {
					if (data.data.length  > 1) {
						area_name +=
						'<option value="'+
						data.data[i].area_id	
						+'">'+ data.data[i].area_name+'</option>';
					} else{
						area_name +=
						'<option value="'+
						data.data[i].area_id
						+'" selected = selected>'+ data.data[i].area_name+'</option>';
					}
				}
				callback(area_name);
				},
				error: function(xhr,type,errorThrown){}});
},
getLoudong: function getloudong(params,callback){
		mui.ajax('http://124.117.230.75:8080/app?cmd=getbuildingbyvillageid&villageid='+params,{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name = '<option  >请选择</option>';
				for (i=0;i<data.data.length;i++) {
					if (data.data.length  > 1) {
						area_name +=
						'<option value="'+
						data.data[i].area_id	
						+'">'+ data.data[i].area_name+'</option>';
					} else{
						area_name +=
						'<option value="'+
						data.data[i].area_id
						+'" selected = selected>'+ data.data[i].area_name+'</option>';
					}
				}
				callback(area_name);
				},
				error: function(xhr,type,errorThrown){
				}
			});

},
getRoomList: function getRoomList(params,callback){
			if (params == null || params ==undefined || params == '') {
					mui.toast('请选择楼栋');
			}
				mui.ajax('http://124.117.230.75:8080/app?cmd=gethousebybuildingid&buildingid='+params,{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name = '<option >请选择</option>';
				for (i=0;i<data.data.length;i++) {
					if (data.data.length  > 1) {
							area_name += 
							'<option value="'+
							data.data[i].house_num_id
							+'">'+ data.data[i].house_num+'</option>';
					} else{
						area_name += 
							'<option value="'+
							data.data[i].house_num_id
							+'" selected = selected>'+ data.data[i].house_num+'</option>';
					}
				}
				callback(area_name);			
				},
				error: function(xhr,type,errorThrown){
				}
			});	
},
	getAjax: function getAjax(action){
		var userdata;
		mui.ajax('http://124.117.230.75:8080/app?'+action,{
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
			  mui.ajax('http://1124.117.230.75:8080/app?cmd=getdictbytype&dictype='+cmd,{
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
	//获取兵役设置初始化信息;
	getBingyi: function getBingyi(cmd,actionid,params) {
		//获取兵役状况
			  mui.ajax('http://124.117.230.75:8080/app?cmd=getdictbytype&dictype='+cmd,{
				dataType:'json',
				type:'get',
				success:function(data){
				area_name = '<option value="">请选择</option>';
			
				for (i=0;i<data.data.length;i++) {
						if(params == data.data[i].val || params == data.data[i].ids  ) {
						
						if(params == data.data[i].val   ) {
							area_name +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
					
						if(params == data.data[i].ids ) {
							area_name +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
						
					}else{
						area_name +='<option value="'+data.data[i].ids+'">'+ data.data[i].val+'</option>';
					}					
				}
				document.getElementById(actionid).innerHTML = area_name;
				},
				error: function(xhr,type,errorThrown){
					
				}
				});
				
	},
	//获初始化信息;
	getReligion: function getReligion(cmd,actionid,params) {
		
			  mui.ajax('http://124.117.230.75:8080/app?cmd=getdictbytype&dictype='+cmd,{
				dataType:'json',
				type:'get',
				success:function(data){
				area_name = '<option value="">请选择</option>';
			
				for (i=0;i<data.data.length;i++) {
					
					if(params == data.data[i].val || params == data.data[i].ids  ) {
						
						if(params == data.data[i].val   ) {
							area_name +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
					
						if(params == data.data[i].ids ) {
							area_name +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
						
					}else{
						area_name +='<option value="'+data.data[i].ids+'">'+ data.data[i].val+'</option>';
					}
					
					
//					area_name +='<option value="'+data.data[i].ids+'" >'+ data.data[i].val+'</option>';
					
				}
				document.getElementById(actionid).innerHTML = area_name;
				},
				error: function(xhr,type,errorThrown){
				}
				});
				
	},

	changestr: function changeString(data){
				var result =(data == "" || data == undefined || data == null) ? "暂无" : data;
				return result;
			}

}