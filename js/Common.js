
//var urlforapp =  'http://124.117.230.75';
//var urlforapp =  'http://192.168.1.7';
var urlforapp =  'http://117.146.77.26';
var peoListData;
var houseData;
var birth;
var visitParams = new Array();

var idcardPicAdd;
var sociaPicAdd;
var disablePicAdd
var singlPicAdd;

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
						if (data.code == 200) {
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
					} else{
						mui.alert('请求失败:'+data.data);
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
				
				if (data.code == 200) {
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
				} else{
					mui.alert(data.data);
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
					if (data.code == 200) {
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
					} else{
						mui.alert(data.data);
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
					if (data.code == 200) {
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
					}else{
						mui.alert(data.data);
					}
		
				callback(area_name);			
				},
				error: function(xhr,type,errorThrown){
					
				}
			});	
},

getDictTypeInfo: function getDictTypeInfo(params,type,callback){
	mui.ajax(urlforapp+':8080/app?cmd=getdictbytype&dictype='+params,{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				var htmlStr = '<option value="">请选择</option>';
				for (var i=0;i<data.data.length;i++) {
				if(type == data.data[i].val || type == data.data[i].ids  ) {
						if(type == data.data[i].val   ) {
							htmlStr +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
						if(type == data.data[i].ids ) {
							htmlStr +='<option value="'+data.data[i].ids+'" selected = selected>'+ data.data[i].val+'</option>';
						}
					}else{
						htmlStr +='<option value="'+data.data[i].ids+'">'+ data.data[i].val+'</option>';
					}					
						
				}
				callback(htmlStr);
			},
			error:function(xhr,type,errorThrown){
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
	},
	//模糊搜索
	searchWithName: function(){
					var waitTip = plus.nativeUI.showWaiting();
		 	var NameStr = document.getElementById("searchName").value;
		 	
			mui.ajax(urlforapp+':8080/app?cmd=getlivepeoplebyname&peo_name='+NameStr,{
				dataType:'json',//服务器返回json格式数据
				type:'get',
				timeout:10000,
				success:function(data){
				peoListData = data;
				var area_name='' ;
				//判断状态码
				if (data.code == '200') {
					if (data.data.length > 0) {
					for (i=0;i<data.data.length;i++) {
						
					//判断数据是否为空,如果为空,设置默认值;
					 var name = common.changestr(data.data[i].peo_name);
					 var sex = common.changestr(data.data[i].peo_sex);
					 var nation = common.changestr(data.data[i].peo_nation_id);
					 var relation = common.changestr(data.data[i].peo_yz_relation);
					 var idcard = common.changestr(data.data[i].peo_card_num);
					 var jg =common.changestr(data.data[i].peo_jg_id);
					 var phone =common.changestr(data.data[i].peo_phone);
					 var birth = common.changestr(data.data[i].peo_birthday);
					 var username = common.changestr(data.data[i].bhr_username);
					 var names =   common.changestr(data.data[i].bhr_names);
					 
					 var att = common.changestr(data.data[i].peo_attr_id);
					//重点人员标记
					var resultstr = checkPersonInfo(data.data[i].peo_attr_id,data.data[i].peoid,att,data.data[i].peo_inhome_id);
					area_name
					+=
					'<div class="mui-card"><div class="mui-card-header"><h4 style="font-weight: normal;"><span style="font-size: 20px;" class="mui-icon mui-icon-map"></span><span style="font-size: 12px;">&nbsp&nbsp'
					+data.data[i].peo_xq_id
					+'</span><span class="mui-icon mui-icon-arrowright" style="font-size: 20px; color: #888;" ></span><span style="font-size: 12px;">'
					+data.data[i].peo_ld_id
					+'</span><span class="mui-icon mui-icon-arrowright" style="font-size: 20px; color: #888;" ></span><span style="font-size: 12px;">'
					+data.data[i].peo_hs_num
					+'</span></div><div class="mui-card-content"><form class="mui-input-group"><div class="mui-input-row">'
					+'<label style="width: 35%;">姓名</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'name'
					+'">'
					+ name
					+'</p>'+'</div><div class="mui-input-row"><label style="width: 35%;">性别</label>'+'<p class="yl_txt" id="'
					+data.data[i].peo_id+'sex'
					+'">'
					+sex
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">族别</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'nation'
					+'">'
					+nation
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">与业主关系</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'relation'
					+'">'
					+relation
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">身份证</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'idcard'
					+'">'
					+idcard
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">籍贯</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'jg'
					+'">'
					+jg
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">电话</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'phone'
					+'">'
					+phone
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">出生日期</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'birth'
					+'">'
					+birth
//					+ resultstr
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">网格员</label><p class="yl_txt">'
//					+username+':'
					+ names
					+'</p></div></form></div><div class="mui-card-footer"><div class="mui-button-row" style="margin: 0 auto;">'
					+'<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined"  id="'
					+data.data[i].peo_id
					+'" onclick="changeResultPersonInfo(this.id)">修改</button>&nbsp;&nbsp;</div></div></div>'
					;
				}
						//插入数据内容;
						waitTip.close();
						document.getElementById("serpersonList").innerHTML = area_name;
					}else{
						waitTip.close();
						document.getElementById("serpersonList").innerHTML = '<div class="mui-card-footer">暂无人员</div>';
					}
				}//判断状态码结尾
					
				},
				error:function(xhr,type,errorThrown){
					console.log('请求失败');
				}
			});		
	},
	//根据房间号搜索人员列表
	searchPersonInfo: function(){
		var selected_val = document.getElementById('FangHaoID').value;
				if (selected_val == null || selected_val ==undefined || selected_val == '') {
					mui.toast('请选择房间号');
					return false;
				}
				getHouseInfo(selected_val);
				
				mui.ajax(urlforapp+':8080/app?cmd=getlivepeoplebyhouseid&houseid='+selected_val,{
						dataType:'json',
						type:'get',
						success:function(data){
						peoListData = data;
						var area_name='' ;
						$('#addbuttonDiv').show();
						
						if(data.data.length<1){
							mui.toast('暂无人员');
							//如果没有列表,插入空内容
							document.getElementById("personList").innerHTML = '';
							return;}
					// 拼接插入的 html
					for (i=0;i<data.data.length;i++) {
						
					//判断数据是否为空,如果为空,设置默认值;
					 var name = common.changestr(data.data[i].peo_name);
					 var sex = common.changestr(data.data[i].peo_sex);
					 var nation = common.changestr(data.data[i].peo_nation_id);
					 var relation = common.changestr(data.data[i].peo_yz_relation);
					 var idcard = common.changestr(data.data[i].peo_card_num);
					 var jg =common.changestr(data.data[i].peo_jg_id);
					 var phone =common.changestr(data.data[i].peo_phone);
					 var birth = common.changestr(data.data[i].peo_birthday);
					 var username = common.changestr(data.data[i].bhr_username);
					 var names =   common.changestr(data.data[i].bhr_names);
					 var att = common.changestr(data.data[i].peo_attr_id);
					//重点人员标记
					var resultstr = checkPersonInfo(data.data[i].peo_attr_id,data.data[i].peoid,att,data.data[i].peo_inhome_id);
					var titleStr =  creattitleStr(data.data[i].peo_attr_id);
					area_name
					+=
					titleStr
					+'<label style="width: 35%;">姓名</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'name'
					+'">'
					+ name
					+'</p>'+'</div><div class="mui-input-row"><label style="width: 35%;">性别</label>'+'<p class="yl_txt" id="'
					+data.data[i].peo_id+'sex'
					+'">'
					+sex
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">族别</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'nation'
					+'">'
					+nation
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">与业主关系</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'relation'
					+'">'
					+relation
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">身份证</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'idcard'
					+'">'
					+idcard
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">籍贯</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'jg'
					+'">'
					+jg
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">电话</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'phone'
					+'">'
					+phone
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">出生日期</label><p class="yl_txt" id="'
					+data.data[i].peo_id+'birth'
					+'">'
					+birth
//					+ resultstr
					+'</p></div><div class="mui-input-row"><label style="width: 35%;">网格员</label><p class="yl_txt">'
//					+username+':'
					+ names
					+'</p></div></form></div><div class="mui-card-footer"><div class="mui-button-row" style="margin: 0 auto;">'
					+'<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined"  id="'
					+data.data[i].peo_id
					+'" onclick="changePersonInfo(this.id)">修改</button>&nbsp;&nbsp;</div></div></div>'
					;
				}
		
				//插入数据内容;
				document.getElementById("personList").innerHTML = area_name;
				},
				error: function(xhr,type,errorThrown){
				}
			});	
	},
	insertSplit: function(value,idStr){
	    if(value.length == 4){
	        document.getElementById(idStr).value += '-';
	    }
	    if(value.length == 7){
	        document.getElementById(idStr).value += '-';
	    }
	},
	checkDateFormat: function (params,tip){
			var sfz=$(params).val();
			var d=Date.parse(sfz);
		    if(isNaN(d)){
		     mui.alert(tip+'格式不正确,请核查! 例如: 2000-01-01,即 yyyy(四位年份)-mm(两位月份)-dd(两位天份)的格式');
		     return false;
		    }else{
		    	 $(params).val(sfz);
		    }
	},
}