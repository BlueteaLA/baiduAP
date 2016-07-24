$(function(){
	$(".fullpage").fullpage({
		navigation:true,
		navigationTooltips:["登陆百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
		afterLoad: function(anchorLink, index){
			if(index==1){
				$('.section').eq(0).attr("id","active");
			}else{
				$('.section').eq(0).removeAttr("id");
			}
		},
	});
	var next=$(".bottom .b-center .next a");
	next.click(function () {
		var i=$(this).index(".bottom .b-center .next a");
		$(this).removeClass("active");
		next.eq(i+1).addClass("active");
		return false;
	})
})

