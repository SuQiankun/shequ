		//定义全局变量, 用来设置初始值;
		var bingyi ='';       // 兵役
		var daogao = '';    	 // 祷告地址
		var attrid = '';    	//人员属性
		var zhiye ='';	     // 职业
		var hkxz = '';       // 户口类型
		var workunit = '';   // 工作单位
		var religion = '';   //宗教信仰
		var hyzk = '';     	//婚姻状况
		var zzmm = '';   	//政治面貌
		var xueli = '';		//学历
		var jingji = '';		//经济状况
		var xuexing = '';	//血型
		var jiankang = '';   //健康状况
		var inhome = ''; 	//是否在家居住
		var partydate = '';  // 入党时间
		var partyzw = '';   //党内职务
		var retiredate = ''; //退休时间
		var discard = '';  //残疾证号
		var yiliao = ''; 	//医疗情况
		var scid = '';		//光荣证类型
		var scnumber;		// 光荣证编号
		var scenjoy;			// 光荣证享受情况
		var hkdz = '';		//户口地址
		var inhome = '';  //是否在家居住
		var jzry = '';  		//矫正人员
		var  lcrk = ''; 		//流出人口
		var housetype = ''; 	//房户类型;
		var socialmumber =''; //低保证号
		var pinkunyuanyin = ''; //贫困原因;
		var jblx; //疾病类型
		var zdry; //重点四地州
		
var changePeoInfo = {
	setInitData: function(data,peoid){
					//循环遍历,如果是当前人员 取出数据
					for (i=0;i<data.data.length;i++) {
						if (data.data[i].peo_id == peoid) {
								//兵役状况
								bingyi = data.data[i].peo_by_id;
								common.getBingyi('military','military',bingyi);
								if(bingyi == '请选择' || bingyi == '未服' ){
									$('#div_by_org').hide();
									$('#div_by_indate').hide();
									$('#div_by_outdate').hide();
								}else{
									$('#div_by_org').show();
									$('#div_by_indate').show();
									$('#div_by_outdate').show();
								}
								
				document.getElementById("xiaoquname").textContent = data.data[i].peo_xq_id;
				document.getElementById("loudongname").textContent = data.data[i].peo_ld_id;
				document.getElementById("fanghaoname").textContent =  data.data[i].peo_hs_num;
			
								//部队名称
								document.getElementById("peo_by_org").value = common.changestr(data.data[i].peo_by_org);
								//入伍时间
								document.getElementById("peo_by_indate").value = common.changestr(data.data[i].peo_by_indate);
								//退伍时间
								document.getElementById("peo_by_outdate").value = common.changestr(data.data[i].peo_by_outdate);
								
								//与业主关系
								var relation = data.data[i].peo_yz_relation;
								common.getReligion('ownRealt','ownRealt',relation);
								//职业
								zhiye = data.data[i].peo_zy_id;
								common.getReligion('career','career',zhiye);
								//户口性质
								hkxz = data.data[i].peo_hk_xz_id;
								common.getReligion('popuInfo','popuInfo',hkxz);
								//宗教信仰 联动祷告地址
								religion =data.data[i].peo_religion_id;
								daogao = data.data[i].peo_dao_gao_id;								
								common.getdaogaoAdress('RELIGION','RELIGION',religion,function(result){
								
								document.getElementById("RELIGION").innerHTML = result;
												var reID =  document.getElementById("RELIGION").value;
												var numberStr = '';
												switch (reID){
													case 'e4923f8a70564780876e6f63a5b8a6a0':numberStr = 'yisilanjiao';break;
													case 'f125a8ddcb9b4e7bb00c7408b1230893':numberStr = 'fojiao';break;
													case '61d2dea8ac1948dd836a404837e50aef':numberStr = 'jidujiao';break;
													case '695f4ceabd674839b8847b447daded8d':numberStr = '12345';break;
													default:break;}
									common.getReligion(numberStr,'daogaoAdress',daogao);
								});
								
								//流出人口
								lcrk = data.data[i].peo_is_lcrk;
								common.jzryInfo(lcrk,function(result){
									document.getElementById("peo_is_lcrk").innerHTML = result;
								});
							
								//人员属性
								attrid = data.data[i].peo_attr_id;
								common.getDictTypeInfo(plus.storage.getItem('人员属性'),data.data[0].peo_attr_id,function(result){
									document.getElementById("peo_attr_id").innerHTML = result;
								});
								//重点四地州
								zdry = data.data[i].peo_zdry_id;
								common.getDictTypeInfo(plus.storage.getItem('重点地州'),data.data[0].peo_zdry_id,function(result){
									document.getElementById("peo_zdry_id").innerHTML = result;
								});
								//结亲情况								
								var kinsmanName = data.data[i].kinsman_name;
								document.getElementById("kinsman_name").value = common.changestr(kinsmanName);
								var kinsmanPhone = data.data[i].kinsman_phone;
								document.getElementById("kinsman_phone").value = common.changestr(kinsmanPhone);
								var kinsmanUnit = data.data[i].kinsman_unit;
								document.getElementById("kinsman_unit").value = common.changestr(kinsmanUnit);
								//贫困原因
								pinkunyuanyin = data.data[i].peo_ecoyy_id;
								common.pinkunyuanyin(pinkunyuanyin,function(result){
									document.getElementById("pinkunyuanyin").innerHTML = result
								});
								//婚姻情况
								hyzk = data.data[i].peo_hyzk;
								if (hyzk == '未婚' || hyzk == '请选择') {
									$("#marryInfo").hide();
								}else{
									$("#marryInfo").show();
								}
								common.getReligion('marry','marry',hyzk);
								
								//结婚时间
								var marryDate = data.data[i].peo_marry_date;
								document.getElementById("peo_marry_date").value = common.changestr(marryDate);
								//政治面貌
								zzmm = data.data[i].peo_zzmm_id;
								common.getReligion('polit','polit',zzmm);
								if(zzmm == '党员'){
										$('#dangneizhiwudiv').show();
										$('#rudangshijiandiv').show();
								}else{
										$('#dangneizhiwudiv').hide();
										$('#rudangshijiandiv').hide();
								}
								//入党时间
								partydate = data.data[i].peo_join_party_date;
								document.getElementById("rudangshijian").value= common.changestr(partydate);
								//党内职务
								partyzw = data.data[i].peo_party_zw;
								document.getElementById("dangneizhiwu").value = common.changestr(partyzw);
								//学历信息
								xueli = data.data[i].peo_edu_deg_id;
								common.getReligion('degree','degree',xueli);
								//经济情况
								jingji = data.data[i].peo_eco_id;
								common.getReligion('income','income',jingji);
								//血型
								xuexing = data.data[i].peo_blood_id;
								common.getReligion('bloodType','bloodType',xuexing);
								//健康状况
								//记录疾病类型的
								jblx =  data.data[i].peo_jbqk_id;
								jiankang =  data.data[i].peo_is_able;
								if (jiankang != '健康') {
									$('#jibingdivid').show();
									getJibingType();
								}else{
									$('#jibingdivid').hide();
									getJibingType();
								}
								//plus.storage.getItem('健康状况')
								common.getReligion(plus.storage.getItem('健康状况'),'jiankangzhuangkuang',jiankang);
								//是否在家居住
								inhome = data.data[i].peo_inhome_id;
								common .getReligion('YesOrNot','yesOrNot',inhome);
								//工作单位
								workunit = data.data[i].peo_work_unit;
								document.getElementById("danweidizhi").value = common.changestr(workunit);
								//退休时间
								var retiretime = data.data[i].peo_retire_date;
								document.getElementById("peo_retire_date").value= common.changestr(retiretime);
								//毕业院校
								var school = data.data[i].peo_byyx;
								document.getElementById("peo_byyx").value = common.changestr(school);
								//身高体重
								document.getElementById("peo_height").value =common.changestr(data.data[i].peo_stature);
								document.getElementById("peo_weight").value =common.changestr(data.data[i].peo_weight);
								//爱好 特长
								var hobby = data.data[i].peo_hobby;
								document.getElementById("peo_hobby").value = common.changestr(hobby);
								//参保情况
								yiliao = data.data[i].peo_social_id;
								common.getDictTypeInfo(plus.storage.getItem('参保情况'),yiliao,function(result){
									document.getElementById("yiliaoqingkuang").innerHTML = result;									
								});
								//养老情况
								var peo_ylqk = data.data[i].peo_ylqk;
								common.getDictTypeInfo(plus.storage.getItem('养老参保情况'),peo_ylqk,function(result){
									document.getElementById("peo_ylqk").innerHTML = result;									
								});
								//户口地址
								hkdz = data.data[i].peo_hk_addr;
								if(hkdz.indexOf('昌吉市')>=0){
									$("#expirdateDiv").hide();
								}else{
									$("#expirdateDiv").show();
								}
								document.getElementById("hkdz").value = common.changestr(hkdz);
								//租房到期时间
								var expirdate = data.data[i].expirdate;
								document.getElementById("expirdate").value = expirdate;
								
								//光荣证类型
								scid = data.data[i].peo_single_child_card;
								common.getDictTypeInfo(plus.storage.getItem('grzlx'),scid,function(result){
									document.getElementById("singlechild").innerHTML = result;							
								});
								//光荣证编号
								scnumber = data.data[i].peo_single_child_num;
								document.getElementById("singlechildnum").value = common.changestr(scnumber);
								//光荣证享受情况
								scenjoy = data.data[i].peo_xsqk_id;
								common.getDictTypeInfo(plus.storage.getItem('光荣证政策享受情况'),data.data[i].peo_xsqk_id,function(result){
									document.getElementById("singlechildenjoy").innerHTML = result;
								});
								//是否参加公益活动
								var joinPublicwelfare = data.data[i].peo_cjgy;
								common.getDictTypeInfo(plus.storage.getItem('是否状态'),joinPublicwelfare,function(result){
									document.getElementById("Publicwelfare").innerHTML = result;
								});
								//是否为流动人口
//								var isflow = data.data[i].peo_is_flow;
//								common.getDictTypeInfo(plus.storage.getItem('是否状态'),isflow,function(result){
//									document.getElementById("peoisflow").innerHTML = result;
//								});
								//设置图片
								setImageAction('idcardPIC','身份证照片暂无',data.data[i].peo_card_pic);
								idcardPicAdd = data.data[i].peo_card_pic;
								setImageAction('singlechildPIC','光荣证照片暂无',data.data[i].peo_single_child_pic);
								singlPicAdd = data.data[i].peo_single_child_pic;
								}}
	}
	
}
