(function(win, $){
  'use strict';
  win.BUTTONTABDETAIL = win.BUTTONTABDETAIL || {};

  win.BUTTONTABDETAIL.common = (function() {
	var defParams = {
	  btnTabDetail         : '.detail-tab__btn',
	  tabInteraction       : '.tab-content__interaction'
	};

	return {
	  init: function() {
		this.setElement();
		this.bindEvents();
		this.initLayout();
	  },

	  setElement: function(){
		this.btnTabDetail = $(defParams.btnTabDetail);
		this.window = $(win);
	  },

	  bindEvents: function() {
		this.btnTabDetail.on('click', $.proxy(this.clickBtnEvent, this));
		this.window.on('scroll', $.proxy(this.tabEvent, this));
	  },

	  initLayout: function() {
		  if(!$('.detail-tab__wrap.is-fixed').length && $(window).scrollTop() < $('.detail-tab__wrap').offset().top){
			$('.detail-tab__item').eq(0).find('.detail-tab__btn').addClass('is-active');
		  }
	  },

	  clickBtnEvent: function(e) {
		var target = $(e.currentTarget);
		target.addClass('is-active');
		target.parent('.detail-tab__item').siblings().children('.detail-tab__btn').stop().removeClass('is-active');
		$("html, body").stop().animate({ scrollTop: $('#' + target.attr('data-target')).offset().top - 125}, 800);
	  },

	  tabEvent: function () {
		$(defParams.tabInteraction).each(function (index, el){
		  clearTimeout(this.timeOutScroll);
		  this.timeOutScroll = setTimeout($.proxy(function(){
			if ($(window).scrollTop() > $(el).offset().top - 129) {
			  var id = $(el).attr('id');
			  $('.detail-tab__item .detail-tab__btn').removeClass('is-active');
			  $('.detail-tab__item .detail-tab__btn' + '[data-target="'+ id +'"]').addClass('is-active');
			}
		  }, this),100)
		})
	  }
	};
  })();

  if($('.detail-tab__wrap').length){
	BUTTONTABDETAIL.common.init();
  }
})(window, window.jQuery);
