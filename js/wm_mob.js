$(function() {
	jQuery.showMenu = function(menubt, menubox, evt) {

		var menubt = $(menubt);
		var menubox = $(menubox);

		menubt.on(evt, function(e) {

			if(menubox.is(":hidden")) {
				menubox.fadeIn(1000);
			} else {
				menubox.fadeOut(1000);
			}

			$(document).one(evt, function() {
				menubox.fadeOut(1000);
			});

			e.stopPropagation();

		});

		menubox.on(evt, function(e) {
			e.stopPropagation();
		});

	}

	$.showMenu(".topcsxz p", ".topcsxz ul", "click");
})

$(".back_history").click(function() {
	history.go(-1);
	return false;
})
/*
 * 图片宽高设置
 */
$(function() {
	var fwxxWid = $('.zfxxlb_img img').width();
	$('.zfxxlb_img img').height(fwxxWid * 4 / 5);
	var zsgjtxWid=$('.gjnr_left img').width();
	$('.gjnr_left img').height(zsgjtxWid);
	
	var gylbImgWid=$('.gyimg_box img').width();
	$('.gyimg_box img').height(gylbImgWid*9/16);
	
	var gyhxjjImgWid=$('.hx_img img').width();
	$('.hx_img img').height(gyhxjjImgWid*5/7);
 	
 	var zxhdImgBoxWid=$('.zxhd_img').width();
 	$('.zxhd_img').height(zxhdImgBoxWid*118/207);
 	$('.zxhd_bm').height($('.zxhd_img').height());
 	
 	$('.zxhd_bm a').css('line-height',$('.zxhd_img').height()+'px');
 	
 	
 	var hzymwdlyImgWid=$('.hzwdly .weui-grid__icon').width();
 	$('.hzwdly .weui-grid__icon').height(hzymwdlyImgWid);
	
	$(window).resize(function() {
		var fwxxWid = $('.zfxxlb_img img').width();
		$('.zfxxlb_img img').height(fwxxWid * 4 / 5);
		var zsgjtxWid=$('.gjnr_left img').width();
		$('.gjnr_left img').height(zsgjtxWid);
		var gylbImgWid=$('.gyimg_box img').width();
		$('.gyimg_box img').height(gylbImgWid*9/16);
		var gyhxjjImgWid=$('.hx_img img').width();
		$('.hx_img img').height(gyhxjjImgWid*5/7);
		
		var zxhdImgBoxWid=$('.zxhd_img').width();
	 	$('.zxhd_img').height(zxhdImgBoxWid*118/207);
	 	$('.zxhd_bm').height($('.zxhd_img').height());
	 	$('.zxhd_bm a').css('line-height',$('.zxhd_img').height()+'px');
	 	var hzymwdlyImgWid=$('.hzwdly .weui-grid__icon').width();
 		$('.hzwdly .weui-grid__icon').height(hzymwdlyImgWid);
	})
	
})

$(function(){
	$('.index_bottom').remove()
})
