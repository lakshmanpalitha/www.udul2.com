var widthClassOptions = [];
var widthClassOptions = ({
		bestseller       : 'bestseller_default_width',
		newproduct       : 'newproduct_default_width',
		featured         : 'featured_default_width',
		special          : 'special_default_width',
		additional       : 'additional_default_width',
		related          : 'related_default_width',
		upsell	         : 'upsell_default_width',
		crosssell        : 'crosssell_default_width',
		brand			 : 'brand_default_width',
		blog				 : 'blog_default_width',
		testimonial			 : 'testimonial_default_width'
});

var $k =jQuery.noConflict();
$k(document).ready(function(){
	
	$k('input[type="checkbox"]').tmMark(); 
	$k('input[type="radio"]').tmMark();
	
	$k(".form-language select").selectbox();	
	$k(".tm_top_currency select").selectbox();
	$k(".limiter select").selectbox();
	$k(".sort-by select").selectbox();
	$k(".form-search select").selectbox();
	$k(".block-brand-nav select").selectbox();
	
	$k(".tm_headerlinks_inner").click(function(){
            $k(this).toggleClass("active");
			$k(".tm_headerlinkmenu ul.links").slideToggle("fast");
			return false;
	});	
	$k('.mega_menu .block-title').click(function() {
		$k(".mega_menu .block-content").not('.cms-home .mega_menu .block-content').slideToggle(800);
		$k(".mega_menu .mega_bkg").not('.cms-home .mega_menu .mega_bkg').toggleClass('active');
	});
	
	
	$k('.cart-label').click(function() {
    	 $k('#panel').slideToggle('fast');
    	 $k("#panel").parent().toggleClass('active').parent().find().slideToggle('fast');
  	});  
	
	$k('.nav-responsive').click(function() {
		$k('#nav-mobile').slideToggle();
		$k('.nav-responsive div').toggleClass('active');		
    });
	
	$k("#category-treeview").treeview({
		animated: "slow",
		collapsed: true,
		unique: true		
	});
	
	$k(window).load(function() {	
  $k("#spinner").fadeOut("slow");
});	

	 	
	$k(".tabbernav a").click(function(){
	$k(".tabbernav a").removeClass("selected");
	$k(this).addClass("selected");
	productListAutoSet();	
	}); 	
		
	 $k(".tab:not(:first)").hide();
	 
	 //to fix u know who
	 $k(".tab:first").show();
	 
	 //when we click one of the tabs
	 $k(".tabbernav  li  a").click(function(){
	
	 //get the ID of the element we need to show
	 stringref = $k(this).attr("href").split('#')[1];
	 
	 //hide the tabs that doesn't match the ID
	 $k('.tab:not(#'+stringref+')').hide();
	 //fix
	 if ($k.browser.msie && $k.browser.version.substr(0,3) == "6.0") {
	 $k('.tab#' + stringref).show();
	 }
	 else
	 //display our tab fading it in
	 $k('.tab#' + stringref).fadeIn();
	 
	 //stay with me
	 return false;
	 });
	 	     
	$k(".tabbernav_product a").click(function(){
		$k(".tabbernav_product a").removeClass("selected");
		$k(this).addClass("selected");
		productListAutoSet();
		  
	}); 
	$k(".tab_product:not(:first)").hide();
	 
	 //to fix u know who
	 $k(".tab_product:first").show();
	 
	 //when we click one of the tabs
	 $k(".tabbernav_product  li  a").click(function(){
	
	 //get the ID of the element we need to show
	 stringref = $k(this).attr("href").split('#')[1];
	 
	 //hide the tabs that doesn't match the ID
	 $k('.tab_product:not(#'+stringref+')').hide();
	 //fix
	 if ($k.browser.msie && $k.browser.version.substr(0,3) == "6.0") {
	 $k('.tab_product#' + stringref).show();
	 }
	 else
	 //display our tab fading it in
	 $k('.tab_product#' + stringref).fadeIn();
	 
	 //stay with me
	 return false;
	 });
	
	 	
	 $k(".lightbox").colorbox({ 
		opacity:  0.5,
		speed:    400,
        width: 400,
        height: 300
      });	
	 
	
	$k(window).load(function() {	
  $k("#spinner").fadeOut("slow");
});	

	
	
});

	 
 
function mobileToggleMenu(){
	
	if ($k(window).width() < 980)
	{
		$k("#footer .mobile_togglemenu,#footer .block .block-title .mobile_togglemenu").remove();
		$k("#footer h6 , #footer .block .block-title").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$k("#footer h6 , #footer .block .block-title").addClass('toggle');
		$k("#footer .mobile_togglemenu ,#footer .block .block-title .mobile_togglemenu ").click(function(){
			$k(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});

	}else{
		$k("#footer h6 , #footer .block .block-title").parent().find('ul').removeAttr('style');
		$k("#footer h6 , #footer .block .block-title").removeClass('active');
		$k("#footer h6 , #footer .block .block-title").removeClass('toggle');
		$k("#footer .mobile_togglemenu ,#footer .block .block-title .mobile_togglemenu ").remove();
	}	
}
$k(document).ready(function(){mobileToggleMenu();});
$k(window).resize(function(){mobileToggleMenu();}); 

function mobileToggleColumn(){
	
	if ($k(window).width() <980){	 
		$k('.sidebar .mobile_togglecolumn').remove();
		$k(".sidebar .block-title" ).append( "<span class='mobile_togglecolumn'>&nbsp;</span>" );		 
		$k(".sidebar .block-title" ).addClass('toggle');	 
		$k(".sidebar .mobile_togglecolumn").click(function(){
			$k(this).parent().toggleClass('active').parent().find('.block-content').toggle('slow');
		});
	}
	else{ 
		$k(".sidebar .block-title" ).parent().find('.block-content').removeAttr('style');		 
		$k(".sidebar .block-title" ).removeClass('toggle');		 
		$k(".sidebar .block-title" ).removeClass('active');
		$k('.sidebar .mobile_togglecolumn').remove();		 
	}
}
$k(document).ready(function(){mobileToggleColumn();});
$k(window).resize(function(){mobileToggleColumn();});

function menuResponsive(){
	 
	if ($k(window).width() < 980){ 
		$k('#advancedmenu').css('display','none');
		$k('.advanced_nav').css('display','none');
		$k('.nav-responsive').css('display','block');
		 var elem = document.getElementById("nav");
				 if(typeof elem !== 'undefined' && elem !== null) {
					document.getElementById("nav").id= "nav-mobile";
		
		if($k('.main-navigation').hasClass('treeview')!=true){
			$k(".nav-inner").addClass('responsive-menu');			 
			$k(".nav-inner #nav-mobile").treeview({
				animated: "slow",
				collapsed: true,
				unique: true		
			});
			$k('.nav-inner #nav-mobile a.active').parent().removeClass('expandable');
			$k('.nav-inner #nav-mobile a.active').parent().addClass('collapsable');
			$k('.nav-inner #nav-mobile .collapsable ul').css('display','block');	
			
		}
	  } 	 
	}else{
		$k('#advancedmenu').css('display','block');
		$k('.advanced_nav').css('display','block');
		$k('.nav-responsive').css('display','none');	
		$k(".nav-inner .hitarea").remove();
		$k(".nav-inner").removeClass('responsive-menu');	 
		$k("#nav-mobile").removeClass('treeview');
		$k(".nav-inner ul").removeAttr('style');
		$k('.nav-inner li').removeClass('expandable');
		$k('.nav-inner li').removeClass('collapsable');		 
		 var elem = document.getElementById("nav-mobile");
			 if(typeof elem !== 'undefined' && elem !== null) {
				document.getElementById("nav-mobile").id= "nav";
		}
	}

}
$k(document).ready(function(){menuResponsive();});
$k(window).resize(function(){menuResponsive();});
 
 
function productCarouselAutoSet() { 
	$k(".main .product-carousel, .additional-carousel .product-carousel").each(function() {
		var objectID = $k(this).attr('id');
		var myObject = objectID.replace('-carousel','');
		if(myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0,myObject.indexOf("-"));		
		if(widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];			
		else
			var myDefClass= 'grid_default_width';
		var slider = $k(".main #" + objectID + ", .additional-carousel #"+ objectID );		
		slider.sliderCarousel({
			defWidthClss : myDefClass,
			subElement   : '.slider-item',
			subClass     : 'product-block',
			firstClass   : 'first_item_tm',
			lastClass    : 'last_item_tm',
			slideSpeed : 200,
			paginationSpeed : 800,
			autoPlay : false,
			stopOnHover : false,
			goToFirst : true,
			goToFirstSpeed : 1000,
			goToFirstNav : true,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			baseClass : "slider-carousel",
			theme : "slider-theme",
			autoHeight : true
		});
		
		var nextButton = $k(this).parent().find('.next');
		var prevButton = $k(this).parent().find('.prev');
		nextButton.click(function(){
			slider.trigger('slider.next');
		})
		prevButton.click(function(){
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$k(document).ready(function(){productCarouselAutoSet();});


function productListAutoSet() { 
	$k("ul.products-grid").each(function(){	
	var objectID = $k(this).attr('id');
		if(objectID.length >0){		
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
			}else{ 
			var myDefClass= 'grid_default_width';			
		}	
		$k(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : 'li',
			subClass     : 'product-block'
		});
	});		
}
$k(window).load(function(){productListAutoSet();});
$k(window).resize(function(){productListAutoSet();}); 

 
function tableMakeResponsive(){	
}
$k(document).ready(function(){tableMakeResponsive();});
$k(window).resize(function(){tableMakeResponsive();});	


function mobileTabToggle(){
	//alert($(window).width());
	if ($k(window).width() < 980)
	{	
		
		$k(".padder .mobile_togglemenu").remove();
		$k(".padder h6").append( "<h5 class='mobile_togglemenu'>&nbsp;</h5>" );
		$k(".padder h6").addClass('toggle');
		$k(".padder .mobile_togglemenu").click(function(){
			$k(this).parent().toggleClass('active').parent().find('ol').toggle('fast');
		});

	}else{
		$k(".padder h6").parent().find('ol').removeAttr('style');
		$k(".padder h6").removeClass('active');
		$k(".padder h6").removeClass('toggle');
		$k(".padder .mobile_togglemenu").remove();
	}	
}
$k(document).ready(function(){mobileTabToggle();});
$k(window).resize(function(){mobileTabToggle();});


$k(window).load(function(){
			
					 
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
		if($k(".parallex").length){  $k(".parallex").sitManParallex({  invert: false });};    
	}else{
		$k(".parallex").sitManParallex({  invert: true });
		
		}	
});


function bannerToggle(){
//alert($k(window).width());
if ($k(window).width() < 980)
{
$k(".cms_outer .banner_toggle").remove();
$k(".cms_outer .res_head").append( "<a class='banner_toggle'>&nbsp;</a>" );
$k(".cms_outer .res_head").addClass('toggle');
$k(".cms_outer .banner_toggle").click(function(){
$k(this).parent().toggleClass('active').parent().find('.banner_content').slideToggle('slow');
});

}else{
$k(".cms_outer .res_head").parent().find('.banner_content').removeAttr('style');
$k(".cms_outer .res_head").removeClass('active');
$k(".cms_outer .res_head").removeClass('toggle');
$k(".cms_outer .banner_toggle").remove();
}	
}
$k(document).ready(function(){mobileToggleMenu();});	
$k(window).resize(function(){bannerToggle();});


/*More Category*/
$k(document).ready(function(){

jQuery(function($k){
	if ($k(window).width() > 1200)
	{ var max_elem = 15;
		} 
	else
	{ 
	 var max_elem = 12;
	}
		var items = $k('.mega_menu .menu');
		var surplus = items.slice(max_elem, items.length);
		surplus.wrapAll('<div class="level-top hidden_menu"><div class="category-wrapper"><ul>');
		$k('.hidden_menu').prepend('<a href="" class="level-top">More</a><span class="active_menu"></span>');

		$k('.hidden_menu').click(function(event){
				event.preventDefault();
				$k(this).toggleClass('active').parent().find('.category-wrapper').slideToggle('slow');
	});
});
});


function scrolllogo() {
 		if ($k(window).width() > 979){
	 			if ($k(this).scrollTop() >180) {
					// alert("1");
							$k(".header-container").addClass('smaller'); 
							$k(".header-cart").appendTo('.header-right-bottom');
							
				}else{    //alert("2");
		 					$k(".header-container").removeClass('smaller'); 
							$k(".header-cart").insertAfter('.nav_outer.container-width .nav-inner');
							$k(".tm_headerlinkmenu").insertAfter('.header-right-bottom .quick-access');
				}
		}else{  //alert("3");
			$k(".header-container").removeClass('smaller');	
			$k(".header-cart").insertAfter('.nav_outer.container-width .tm_headerlinkmenu');
			//alert("hii")
			$k(".tm_headerlinkmenu").insertAfter('.nav_outer.container-width .header-cart');
		}
		

}
jQuery(document).ready(function() {scrolllogo();});
jQuery(window).resize(function() {scrolllogo();});
jQuery(window).scroll(function() {scrolllogo();});


function menutop(){
	if ($k(window).width() < 980){
			$k(".header-right-inner").addClass('container-width'); 
			$k(".header-right-center").insertBefore('.header');
		
		}else{
			$k(".header-right-inner").removeClass('container-width');
			$k(".header-right-center").insertBefore('.header-right-bottom');	
		}
}$k(document).ready(function(){menutop();});	
$k(window).resize(function(){menutop();});


function bannerToggle(){
//alert($k(window).width());
if ($k(window).width() < 641)
{
$k(".subbanner-cms2 .banner_toggle").remove();
$k(".subbanner-cms2 .sub-heading").append( "<a class='banner_toggle'>&nbsp;</a>" );
$k(".subbanner-cms2 .sub-heading").addClass('toggle');
$k(".subbanner-cms2 .banner_toggle").click(function(){
$k(this).parent().toggleClass('active').parent().find('.subbanner-inner').slideToggle('slow');
});

}else{
$k(".subbanner-cms2 .sub-heading").parent().find('.subbanner-inner').removeAttr('style');
$k(".subbanner-cms2 .sub-heading").removeClass('active');
$k(".subbanner-cms2 .sub-heading").removeClass('toggle');
$k(".subbanner-cms2 .banner_toggle").remove();
}	
}
$k(document).ready(function(){bannerToggle();});	
$k(window).resize(function(){bannerToggle();});
