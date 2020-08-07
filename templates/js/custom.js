$(document).ready(function(){
    "use strict";

//SELECTPICKER MULTI SELECT ENABLE
//Multi  select  picker
$('.multi_option_selectpicker').selectpicker(
    {
        liveSearch: true,
        countSelectedText: function(num) {
            if (num == 1) {
                return "{0} Options selected";
            } else {
                return "{0} Options selected";
            }
        }
    }
);

$('.multi_option_selectpicker').change(function (e,clickedIndex) {
    console.log(e.target.selectedOptions.length);
    if (this.value === 'All') {
    if(e.target.selectedOptions.length>1){
        $(this).selectpicker('deselectAll');
    }else{
        return $(this).selectpicker('selectAll');
    }
}
});

//SELECTPICKER MULTI SELECT END


    /*select tab content*/
    $('#mySelect').on('change', function (e) {
        $('#myTab li a').eq($(this).val()).tab('show');
    });

    /*daterangeselect*/
    $('.daterange-input').daterangepicker({
        "startDate": "07/11/2017",
        "endDate": "07/17/2017",
        "opens": "left",
    });

    //for timepicker
    //$(function () {
        //$('.timepicker-input').datetimepicker({
            //format: 'LT'
        //});
    //});

    
    /*daterangeselect*/
    $('.daterange-input-single').daterangepicker({
        timePicker: false,
        singleDatePicker: true,
        timePickerIncrement: 5,
        locale: {
         format: 'YYYY-MM-DD'
        },
       todayHighlight: true,
       drops: "down",
        minDate: '2012-01-01',
        maxDate: '2028-12-31'
    });
    // select all checkbox
    $('.checkbox-all-select-input').on('change', function(e){
       if($(this).is(':checked')){
            $(this).parents('table').find('.checkbox-single-select-input').prop('checked',true);
            $(this).parents('table').find('tbody tr').addClass('selected');
       }
       else{
            $(this).parents('table').find('.checkbox-single-select-input').prop('checked',false);
            $(this).parents('table').find('tbody tr').removeClass('selected');
        }
    });

    $('.checkbox-single-select-input').on('change', function(e){
        $(this).parents('table').find('.checkbox-all-select-input').prop('checked',false);
        if($(this).is(':checked')){
            $(this).parents('tr').addClass('selected');
       }
       else{
            $(this).parents('tr').removeClass('selected');
        }
    });


//switch  design  exmaple


 $('.Status-switch').bootstrapSwitch({state: false});
 
 //always  yes  no value  visible  switch code
//$('#accu-switcher').bootstrapSwitch({size: "small",state: false});
//  $('.module .switch').css("visibility","visible");
//<div class="switch" style="display:inline-block;">
//      <input id="accu-switcher" type="checkbox" style="outline: 0 none;" checked data-label-text="TEXT"/>
// </div>


    $('.daterange-input-single-with-time').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        timePickerIncrement: 5,
        locale: {
         format: 'DD/MM/YYYY H:mm'
        },
       todayHighlight: true,
       drops: "down",
        minDate: '01/01/2012',
        maxDate: '12/12/2018'
   });

    if($('.datepicker-time-input').length){
        $('.datepicker-time-input').datetimepicker({
            format: 'hh:mm A'
        });
    }

    /****************************
    **  Sidebar Toggle
    *****************************/
    $('#sidebar__humbarger').on('click', function(){
        //alert();
        $('.sidebar').toggleClass('sidebar__toggle');
        $('.outer-wrapper').toggleClass('outer-wrapper__toggle');
    });
    /*** =====================================
    * 	Mobile Menu
    * =====================================***/
	$('.sidebar-menu .has-submenu').on('click', function(e) {
	  	e.preventDefault();
	    var $this = $(this);
	    if ($this.next().hasClass('menu-show')) {
	         $this.next().removeClass('menu-show');
          //$this.removeClass('active');
	        // $this.next().slideUp(350);
           $this.parents('.outer-wrapper').removeClass('outer-wrapper-dropdown-active');
          $('.header-area').removeClass('header-area--large');
           $this.parents('.sidebar').siblings('.main-content-outer').removeClass('main-content-outer--large-space');
	    } else {
	        $this.parent().parent().find('li .dropdown').removeClass('menu-show');
           //$this.addClass('active');
	        // $this.parent().parent().find('li .dropdown').slideUp(350);
	        $this.next().toggleClass('menu-show');
	        // $this.next().slideToggle(350);
           $this.parents('.outer-wrapper').addClass('outer-wrapper-dropdown-active');
          // $('.header-area').addClass('header-area--large');
           $this.parents('.sidebar').siblings('.main-content-outer').addClass('main-content-outer--large-space');
	    }
        //$(".angle-show i").toggleClass("fa-angle-double-right fa-angle-double-left");
        $(".angle-show i").removeClass("fa-angle-double-right");
        $(".angle-show i").addClass("fa-angle-double-left");
	});

    /****************************
    **  dropdown Menu start
    *****************************/
        $(".dropdown-toggle").click(function(e){
          e.preventDefault();
          console.log("Hello");
          //$('.header-area__list-dropdown').hide('active');
          $('.header-area__list-dropdown').not($(this).siblings('.header-area__list-dropdown')).slideUp();
          $(this).siblings('.header-area__list-dropdown').slideToggle();
        });

    /****************************
    **  dropdown Menu end
    *****************************/

    /****************************
    **  Table start
    *****************************/
    if($('.data-table-active').length){
      $('.data-table-active').DataTable();
    }
    if($('.menu-show.dropdown').length){
     $('.header-area').addClass('header-area--large');
    }






    /****************************
    **  vault close
    *****************************/
    $('.vault-close-icon').on('click', function(){
        $(this).parents('.vault-close-terget').fadeOut();
    });

    /****************************
    **  Preloader
    *****************************/
    window.onload = (function(onload) {
        return function(event) {
            onload && onload(event);

            $(".loading-overlay .spinner").fadeOut(300),
                $(".loading-overlay").fadeOut(300);
                $("body").css({
                    overflow: "auto",
                    height: "auto",
                    position: "relative"
                })
        }
    }(window.onload));
    if($('.simple-select').length){
        $('.simple-select').select2();
    }

    // $(".sidebar__inner").niceScroll({
    //     cursorcolor:"#0091EA",
    //     cursorborder:"0"
    // });
    // $(".sidebar__inner").niceScroll({
    //     cursorcolor:"#0091EA",
    //     cursorborder:"0"
    // });
    $(".menu-accordion .dropdown").niceScroll({
        cursorcolor:"#0091EA",
        cursorborder:"0"
    });
    // $(".scroll").niceScroll({
    //     cursorcolor:"#0091EA",
    //     cursorborder:"0"
    // });
    // $("#sidebar-v2").niceScroll({
    //     cursorcolor:"#0091EA",
    //     cursorborder:"0"
    // });

    if($('.same-height-table').length){
        var highestBox = 0;

      // Select and loop the elements you want to equalise
      $('.same-height-table tbody').each(function(){

        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height();
        }

      });

      // Set the height of all those children to whichever was highest
      $('.same-height-table tbody').height(highestBox);
      $('.same-height-table tbody').css('min-height', highestBox);
    };

    //Show  the dashboard  full screen and exit fullscreen  function
    //Toggle fullscreen
   /*
    $("#btn-fullscreen").click(function (e) {
       e.preventDefault();
       var $this = $(this);
       if ($this.children('i').hasClass('glyphicon-resize-full'))
       {
           $this.children('i').removeClass('glyphicon-resize-full');
           $this.children('i').addClass('glyphicon-resize-small');
       }
       else if ($this.children('i').hasClass('glyphicon-resize-small'))
       {
           $this.children('i').removeClass('glyphicon-resize-small');
           $this.children('i').addClass('glyphicon-resize-full');
       }
       //$(this).closest('.panel').toggleClass('-fullscreen');
        $(".sidebar").toggleClass("hide-sidebar");
        $(".main-content-outer").toggleClass("fullscreen-content");
        $(".header-main-content").toggleClass("fullscreen-content");

        // check class added to main div or not
       var fullscreen = $(".main-content-outer").hasClass('fullscreen-content');
       console.log('added classs "fullscreen-content" to main-content : ', fullscreen);
       if (fullscreen === true) {
           localStorage.setItem('fullScreenMode', 'true');
       } else {
           localStorage.setItem('fullScreenMode', 'false');
       }
   });*/


// keep  the  create  button  disable  and  make enable  when  a  room  is  selected

  $('.room-booking-category .table').on('click', function(e) {
       if ($(".table").find(".single-room-item--selected").length > 0) {
          $(".create-booking").removeClass("disabled");
          $(".update-booking").removeClass("disabled");
       }else{
          $(".create-booking").addClass("disabled");
          $(".update-booking").addClass("disabled");
       }
   });

//add  a Previous  border  for  th so  that  it will  show  whole th   with selected  border

$("tr th.t-date").prev('th').addClass("previos-border");
$("td.t-date" ).prev('td').addClass("previos-border");


$(".tr-border").parent( "tr" ).addClass("border-top");

//show  border  last  of  todays  borrom side
$("td.t-date:last" ).addClass("border-end");


//page scroll table  header  fix with  advance search  options

// var fixmeTop = $('.fixme').offset().top;
var fixmeTop = $('.fixme');
if (fixmeTop.length) {
    var fixmeTop = fixmeTop.offset().top;
$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {

       $(".header-area").addClass("hide-header");
       $(".fixme").addClass("fixed-top");
       $(".responsive-table thead").addClass("thead-fixed animated  slideInDown");
       $(".thead-fixed").addClass("with-sidebar  animated  slideInDown");

    } else {
         $(".header-area").removeClass("hide-header");
         $(".fixme").removeClass("fixed-top");
         $(".responsive-table thead").removeClass("thead-fixed animated  slideInDown");
         $(".thead-fixed").removeClass("with-sidebar animated  slideInDown");
    }
});
}

//select to  load  time  overflow
  $(".seleto-custom").removeClass("p-hidden");




 //if   in  modal  no  jquery  not  working  then  use  this
//$(document).on('click', '.modal', function(){
//alert();
//});

//table  listing  multiple checkbox check  uncheck  js  cursorborder
$( window ).on( "load", function() {
    $('.listing-table input:checkbox').removeAttr('checked');
    $('.listing-table tr').removeClass('mark-row');
 

});
//keep all  checkbox  selected
$('#all').click (function () {
  var checkedStatus = this.checked;
 $('tbody tr').find(':checkbox').each(function () {
     $(this).prop('checked', checkedStatus);
     $(this).parent().parent().parent().toggleClass("mark-row");
  });
});

//mark all  row  when checked
 $("tbody :checkbox").on('click', function(){
     $(this).parent().parent().parent().toggleClass("mark-row");
 });

//hover  time  left sidebar  menu  show
 
$(".panel-list.menu-accordion > li").hover(function(){
   $(this).children(".dropdown").addClass("hover-active");
    }, function(){
     $(".dropdown").removeClass("hover-active");
});

//Click event  toogle  show hide  panel
$(".angle-show").on('click', function(e){
    e.preventDefault();
    $(".angle-show i").toggleClass("fa-angle-double-left fa-angle-double-right");
    $('.outer-wrapper').toggleClass('outer-wrapper-dropdown-active');
    $('.header-area').toggleClass('header-area--large');
    $('.sidebar-menu li:nth-child(3) .dropdown').toggleClass('menu-show');
 
});

//check  if  the  sidebar  menu is  open  or  not
    if ($(".menu-show")[0]){
        $(".angle-show i").toggleClass("fa-angle-double-left fa-angle-double-right");
    }

//   toogle  switch    js

    $(document).on('click', '.toggle-button', function() {
        $(this).toggleClass('toggle-button-selected');
    });

//dropdown
    $(document).on('click', '.toggle-button', function() {
        $(this).toggleClass('toggle-button-selected');
    });

    // page  load find  menu class
    if ($(".list-group-item.active").length == 1) {
        var getID = $('.list-group-item.active').parent().attr('id');
        $('#'+getID).addClass('in');
        $('.'+getID).addClass('main-active');
        $('.'+getID).attr("aria-expanded", "true");
    }
    //arrow  change  click  event
    // $(document).on('click', '.lv-one', function() {
    //    $(this + "span i").toggleClass('fa-angle-down fa-angle-up');
    // });
    //fullscreen  collapse  open
    $(document).on('click', '.collapse-btn', function() {
        $(".list-group-item.lv-one span").toggleClass('hide');
        $('.collapse').removeClass('in');
        $(".sidebar").toggleClass('fix-90');
        $(".list-group").toggleClass('hover-active');
        $(".lv-one").toggleClass('icon-bar');
        $(".main-content-outer").toggleClass('bigscreen-content');
        $(".header-main-content ").toggleClass('bigscreen-content');
    });

    //keep menu active  hover  event
    $(".lv-one" ).mouseover(function() {
        $('.collapse').removeClass('right-show');
      var  active =  $(this).parent().attr('class');
      var GetId =  $(this).attr('href');
      if( active ==='list-group panel hover-active'){
          $(GetId).addClass('right-show');
      }
    });
    $(".collapse" ).mouseleave(function() {
        $(this).removeClass('right-show');
        var  present =  $(this).attr('class');
        if( present ==='collapse right-show'){
            $(this).removeClass('right-show');
        }

    });
    //
    $(document).on('click', '.list-group-item', function() {
        var  getClass =  $(this).parent().attr('class');
        if( getClass ==='list-group panel hover-active'){
            location.reload();
        }
    });



    //multiple selectpicker  select  js

    function toggleSelectAll(control) {
        var allOptionIsSelected = (control.val() || []).indexOf("All") > -1;
        function valuesOf(elements) {
            return $.map(elements, function(element) {
                return element.value;
            });
        }

        if (control.data('allOptionIsSelected') != allOptionIsSelected) {
            // User clicked 'All' option
            if (allOptionIsSelected) {
                // Can't use .selectpicker('selectAll') because multiple "change" events will be triggered
                control.selectpicker('val', valuesOf(control.find('option')));
            } else {
                control.selectpicker('val', []);
            }
        } else {
            // User clicked other option
            if (allOptionIsSelected && control.val().length != control.find('option').length) {
                // All options were selected, user deselected one option
                // => unselect 'All' option
                control.selectpicker('val', valuesOf(control.find('option:selected[value!=All]')));
                allOptionIsSelected = false;
            } else if (!allOptionIsSelected && control.val().length == control.find('option').length - 1) {
                // Not all options were selected, user selected all options except 'All' option
                // => select 'All' option too
                control.selectpicker('val', valuesOf(control.find('option')));
                allOptionIsSelected = true;
            }
        }
        control.data('allOptionIsSelected', allOptionIsSelected);
    }
    $('.multi_selectpicker').selectpicker(
        {
            liveSearch: true,
            countSelectedText: function(num) {
                if (num == 1) {
                    return "{0} Options selected";
                } else {
                    return "{0} Options selected";
                }
            }
        }
    ).change(function(){toggleSelectAll($(this));}).trigger('change');


    $('.multi_selectpicker_coa').selectpicker(
        {
            liveSearch: true,
            countSelectedText: function(num) {
                console.log('selected coa')
                console.log(num)
                if (num == 1) {
                    return "{0} COA selected";
                } else {
                    return "{0} COA selected";
                }
            }
        }
    ).change(function(){toggleSelectAll($(this));}).trigger('change');

    //nicescroller
    $("#sidebar-v2").niceScroll({
        cursorcolor:" ",
        cursorwidth:"3px",
        //background:"rgba(20,20,20,0.3)",
        cursorborder:"3px solid #1e88e5",
        cursorborderradius:5
    });
    // Call resize whenever mouse
    // $("#sidebar-v2").mouseover(function() {
    //     $("#sidebar-v2").getNiceScroll().resize();
    // });
    $(document).on('mouseover','#sidebar-v2', function () {
        $(this).getNiceScroll().resize();
    });

//toastr settings
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
//alert  hide
    $(".alert").fadeOut(7000);

    //quarter picker 
    //quaterpicker start
    $.fn.datepicker.dates['qtrs'] = {
        days: ["Sunday", "Moonday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Moon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["Q1", "Q2", "Q3", "Q4", "", "", "", "", "", "", "", ""],
        monthsShort: ["Jan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mar", "Apr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jun", "Jul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep", "Oct&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dec", "", "", "", "", "", "", "", ""],
        today: "Today",
        clear: "Clear",
        format: "mm/dd/yyyy",
        titleFormat: "MM yyyy",
        /* Leverages same syntax as 'format' */
        weekStart: 0
      };
      
      $('#quaterpicker').datepicker({
        format: "MM yyyy",
        minViewMode: 1,
        autoclose: true,
        language: "qtrs",
        forceParse: false
      }).on("show", function(event) {
        $(".month").each(function(index, element) {
            $(this).addClass('area');
            $(this).parent().parent().parent().parent().parent().addClass('quarter-custom');
          if (index > 3) $(element).hide();
        });
        
      });

    //quaterpicker End

   

});
//browse file name  show
$('.btn-file  input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    $('.filename-show').html(fileName);
});
$(document).ready(function(){
    var  height= $('.height').height();
    var divide = parseInt(height / 2);
    var value= divide - 20;
    $('.bars .card').css({"min-height":value});



});
$(document).on('mouseover','body', function () {
    var  height= $('.height').height();
    ;
    // var divide = parseInt(height / 2);
    // var value= divide - 20;
    $('.panel-body.bar').css({"height":height});
});
//.bars .card { min-height: 165px;