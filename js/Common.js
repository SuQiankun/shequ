
var urlforapp =  'http://124.117.230.75';
var peoListData;
var common = {

getSheQu: function getSheQu(callback) {
			//获取社区列表
			var resultStr = ''; 
			mui.ajax(urlforapp+':8080/app?cmd=getcommunitylist',{
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
	
getWangge: function getWangge(params,callback){
	if (params == 'null' || params == undefined || params == '') {return false;}
	//URL未定义 
	mui.ajax(urlforapp+':8080/app?cmd=getgridlistbycommunityid&communityid='+params,{
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			var area_name = '<option value="" >请选择</option>';
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
		error:function(xhr,type,errorThrown){
		}
	});
},
	
getXiaoqu: function getXiaoqqu(params,callback){
			if (params == 'null' || params == undefined || params == '') {
				return false;
			}
			mui.ajax(urlforapp+':8080/app?cmd=getvillagebygridid&gridid='+params,{
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
	
			if (params == null || params == undefined || params=='') {
				return false;
			}
		
		mui.ajax(urlforapp+':8080/app?cmd=getbuildingbyvillageid&villageid='+params,{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name = '<option value="" >请选择</option>';
				
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
		if (params == 'null' || params == undefined || params == '') {
				return false;
			}
				mui.ajax(urlforapp+':8080/app?cmd=gethousebybuildingid&buildingid='+params,{
				dataType:'json',
				type:'get',
				success:function(data){
				var area_name = '<option value ="">请选择</option>';
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
	
	//获取type信息;
getType: function getType(cmd,actionid,params) {
		var areaStr = '';
		//获取宗教信仰列表
			  mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+cmd,{
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
				error: function(xhr,type,errorThrown){}});
				return areaStr;
	},
	//获取兵役设置初始化信息;
	getBingyi: function getBingyi(cmd,actionid,params) {
		//获取兵役状况
			  mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+cmd,{
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
				error: function(xhr,type,errorThrown){}});
				
	},
		//获取兵役设置初始化信息;
getdaogaoAdress: function getdaogaoAdress(cmd,actionid,params,callback) {
		//获取兵役状况
			  mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+cmd,{
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
				callback(area_name);
				},
				error: function(xhr,type,errorThrown){}});
				
	},
			//获取兵役设置初始化信息;
getDaogaoList: function getDaogaoList(cmd,actionid,params,callback) {
			  //获取兵役状况
			  mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+cmd,{
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
				callback(area_name);
				},
				error: function(xhr,type,errorThrown){}});
				
	},
		//获初始化信息;
	getReligion: function getReligion(cmd,actionid,params) {
		
			  mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+cmd,{
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
		},
		//设置入党时间,如果为空,设置为 null
	jointime: function jointime(data){
		var result =(data == "" || data == undefined || data == null || data == '暂无') ? null : data;
		return result;
	},
	jzryInfo: function jzryInfo(params,callback){
		var area_name = '';							
			switch (params){
					case '是':
					area_name = '<option value=null>请选择</option><option selected="selected" value="084500e2b1384e809d49b2db44923fd0">是</option><option value="43420be04461467d963b8936d23a591a">否</option><option value="6e942eb47c67469db061c86fa65d0025">其他</option>'
						break;
					case '否':
					area_name = '<option value=null>请选择</option><option value="084500e2b1384e809d49b2db44923fd0">是</option><option selected="selected" value="43420be04461467d963b8936d23a591a">否</option><option value="6e942eb47c67469db061c86fa65d0025">其他</option>'
						break;
					case '其他':
					area_name = '<option value=null>请选择</option><option value="084500e2b1384e809d49b2db44923fd0">是</option><option value="43420be04461467d963b8936d23a591a">否</option><option  selected="selected" value="6e942eb47c67469db061c86fa65d0025">其他</option>'
						break;
					default:
					 area_name = '<option value=null selected="selected">请选择</option><option  value="084500e2b1384e809d49b2db44923fd0">是</option><option value="43420be04461467d963b8936d23a591a">否</option><option value="6e942eb47c67469db061c86fa65d0025">其他</option>'
						break;
			}
			callback(area_name);
	},
	peoattid: function peoattid(params,callback){
			var area_name = '';							
			switch (params){
					case '基本户':
						area_name = '<option value="">请选择</option><option value="22f9fd80b30f4f11991d5d0df9ab95c0" selected = selected>基本户</option><option value="28a7a1d48537487d99ebb7a67d369216">流动户</option><option value="b42a34d54f7747b491b265d005ba0b46">放心户</option><option value="ba77736b73374a44811d76d3d496d30a">重点户</option>'
						break;
					case '流动户':
						area_name = '<option value="">请选择</option><option value="22f9fd80b30f4f11991d5d0df9ab95c0" >基本户</option><option value="28a7a1d48537487d99ebb7a67d369216" selected="selected" >流动户</option><option value="b42a34d54f7747b491b265d005ba0b46">放心户</option><option value="ba77736b73374a44811d76d3d496d30a">重点户</option>'
						break;
					case '放心户':
						area_name ='<option value="">请选择</option><option value="22f9fd80b30f4f11991d5d0df9ab95c0" >基本户</option><option value="28a7a1d48537487d99ebb7a67d369216" >流动户</option><option value="b42a34d54f7747b491b265d005ba0b46" selected="selected"  >放心户</option><option value="ba77736b73374a44811d76d3d496d30a">重点户</option>'
						break;
					case '重点户':
					area_name = '<option value="">请选择</option><option value="22f9fd80b30f4f11991d5d0df9ab95c0" >基本户</option><option value="28a7a1d48537487d99ebb7a67d369216" >流动户</option><option  value="b42a34d54f7747b491b265d005ba0b46" >放心户</option><option selected="selected" value="ba77736b73374a44811d76d3d496d30a"  >重点户</option>'
						break;
					default:
					 area_name = '<option selected="selected" value="">请选择</option><option value="22f9fd80b30f4f11991d5d0df9ab95c0" >基本户</option><option value="28a7a1d48537487d99ebb7a67d369216" >流动户</option><option value="b42a34d54f7747b491b265d005ba0b46"   >放心户</option><option value="ba77736b73374a44811d76d3d496d30a">重点户</option>'
						break;
			}
			callback(area_name);						
	},
	housetype: function housetype(params,callback){
			var area_name = '';	
			switch (params){
					case '基本户':
						area_name = '<option value=""  >请选择</option><option selected="selected" value="af6ed92fe96a46df90964ffd21299733">基本户</option><option  value="3e8c6383eff548f99f7d79fa9e7089ad">流动户</option><option value="de7284ead8354c3885210a383de91e54">放心户</option><option  value="4dc937ab3822453984e0f3daa23f1609">重点户</option>' 
						break;
					case '流动户':
						area_name = '<option value=""  >请选择</option><option  value="af6ed92fe96a46df90964ffd21299733">基本户</option><option selected="selected" value="3e8c6383eff548f99f7d79fa9e7089ad">流动户</option><option value="de7284ead8354c3885210a383de91e54">放心户</option><option  value="4dc937ab3822453984e0f3daa23f1609">重点户</option>'
						break;
					case '放心户':
						area_name = '<option value=""  >请选择</option><option value="af6ed92fe96a46df90964ffd21299733">基本户</option><option value="3e8c6383eff548f99f7d79fa9e7089ad">流动户</option><option selected="selected"  value="de7284ead8354c3885210a383de91e54">放心户</option><option  value="4dc937ab3822453984e0f3daa23f1609">重点户</option>' 
						break;
					case '重点户':
						area_name = '<option value=""  >请选择</option><option value="af6ed92fe96a46df90964ffd21299733">基本户</option><option value="3e8c6383eff548f99f7d79fa9e7089ad">流动户</option><option value="de7284ead8354c3885210a383de91e54">放心户</option><option selected="selected"  value="4dc937ab3822453984e0f3daa23f1609">重点户</option>'
						break;
					default:
						 area_name = '<option selected="selected"  value=""  >请选择</option><option value="af6ed92fe96a46df90964ffd21299733">基本户</option><option value="3e8c6383eff548f99f7d79fa9e7089ad">流动户</option><option value="de7284ead8354c3885210a383de91e54">放心户</option><option  value="4dc937ab3822453984e0f3daa23f1609">重点户</option>'
						break;
			}
			callback(area_name);						
	},
	pinkunyuanyin: function pinkunyuanyin(params,callback){
			var area_name = '';	
			switch (params){
					case '没有劳动力收入':
						area_name = '<option  value="">请选择</option><option selected="selected" value="06c2a66cb5cd481c915df93fa14998bb">没有劳动力收入</option><option  value="5dfbe45a6861442e8a58dfde0a5c549a">没有收入</option><option  value="e401303df0be4e44831f235f678ad70f">因病致贫</option>' 
						break;
					case '没有收入':
						area_name = '<option  value="">请选择</option><option value="06c2a66cb5cd481c915df93fa14998bb">没有劳动力收入</option><option selected="selected" value="5dfbe45a6861442e8a58dfde0a5c549a">没有收入</option><option  value="e401303df0be4e44831f235f678ad70f">因病致贫</option>' 
						break;
					case '因病致贫':
						area_name ='<option  value="">请选择</option><option value="06c2a66cb5cd481c915df93fa14998bb">没有劳动力收入</option><option value="5dfbe45a6861442e8a58dfde0a5c549a">没有收入</option><option selected="selected" value="e401303df0be4e44831f235f678ad70f">因病致贫</option>' 
						break;
					default:
						 area_name ='<option selected="selected"  value="">请选择</option><option value="06c2a66cb5cd481c915df93fa14998bb">没有劳动力收入</option><option value="5dfbe45a6861442e8a58dfde0a5c549a">没有收入</option><option value="e401303df0be4e44831f235f678ad70f">因病致贫</option>' 
						 break;
			}
			callback(area_name);	
		
	},
	showTip: function showTip(params,description){
		
		if (params == '' || params == null || params == undefined) {
				mui.alert(description);
				return;
		}		
	}
}