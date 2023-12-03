(function($) {
	
	
	
/*------------------------------------------
      = Mobile  toggle
  -------------------------------------------*/
  if($(".mobail-menu").length) {
      var mobailToggleBtn = $(".right_sideber_menu i");
      var mobailContent = $(".mobail-menu-sidebar");
      var mobailCloseBtn = $(".left-icon i");
      var body = $("body");

      mobailToggleBtn.on("click", function(e) {
          mobailContent.toggleClass("right-sideber-toggle");
          e.stopPropagation();
      });

      mobailCloseBtn.on("click", function(e) {
          mobailContent.removeClass("right-sideber-toggle");
          e.stopPropagation();
      });

      body.on("click", function() {
         mobailContent.removeClass("right-sideber-toggle");
      }).find(mobailContent).on("click", function(e) {
          e.stopPropagation();
      });
  }
		
	
 /*------------------------------------------
      = Header Sign  toggle
  -------------------------------------------*/
  if($(".nav-menu").length) {
      var signtToggleBtn = $(".signup");
      var signContent = $(".contact-sign-up");
      var signCloseBtn = $(".close-icon i");
      var body = $("body");

      signtToggleBtn.on("click", function(e) {
          signContent.toggleClass("content-toggle");
          e.stopPropagation();
      });

      signCloseBtn.on("click", function(e) {
          signContent.removeClass("content-toggle");
          e.stopPropagation();
      });

      body.on("click", function() {
          signContent.removeClass("content-toggle");
      }).find(signContent).on("click", function(e) {
          e.stopPropagation();
      });
  }

/*------------------------------------------
      = Header Login  toggle
  -------------------------------------------*/
  if($(".nav-menu").length) {
      var loginToggleBtn = $(".login");
      var loginContent = $(".contact-login-up");
      var loginCloseBtn = $(".close-icon-login i");
      var body = $("body");

      loginToggleBtn.on("click", function(e) {
          loginContent.toggleClass("login-content-toggle");
          e.stopPropagation();
      });

      loginCloseBtn.on("click", function(e) {
          loginContent.removeClass("login-content-toggle");
          e.stopPropagation();
      });

      body.on("click", function() {
          loginContent.removeClass("login-content-toggle");
      }).find(loginContent).on("click", function(e) {
          e.stopPropagation();
      });
  }
	
	
	
/*------------------------------------------
      = Betting  toggle
  -------------------------------------------*/
  if($(".first-hero").length) {
      var bettingToggleBtn = $(".betting-option");
      var bettingContent = $(".match-bit-box");
      var bettingCloseBtn = $(".betform-in-close i");
      var body = $("body");

      bettingToggleBtn.on("click", function(e) {
          bettingContent.toggleClass("betting-content-toggle");
          e.stopPropagation();
      });

      bettingCloseBtn.on("click", function(e) {
          bettingContent.removeClass("betting-content-toggle");
          e.stopPropagation();
      });

      body.on("click", function() {
          bettingContent.removeClass("betting-content-toggle");
      }).find(bettingContent).on("click", function(e) {
          e.stopPropagation();
      });
  }
	
		

})(jQuery);