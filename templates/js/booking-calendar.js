$(document).ready(function () {
    function init_calendar() {
        if ("undefined" !== typeof $.fn.fullCalendar) {
            var e, f, a = new Date,
                b = a.getDate(),
                c = a.getMonth(),
                d = a.getFullYear(),
                g = $("#booking-calendar").fullCalendar({
                    height: 200,
                    header: {
                        left: "prev",
                        center: "title",
                        right: "next"
                    },
                    selectable: !0,
                    selectHelper: !0,
                    dayClick: function (date, jsEvent, view) {
                        $('.room-booking-wrapper tbody .fc-widget-content .fc-row .fc-content-skeleton thead .fc-today')
                            .css({'background-color': 'transparent', 'color': '#544e4e'});
                        var dataDate = $(this).attr('data-date');
                        localStorage.setItem('search_date', dataDate);
                        $('.fc-content-skeleton .fc-day-top').each(function () {
                            var curDate = $(this).attr('data-date');
                            $(this).css({'background-color': 'transparent', 'color': '#544e4e'});
                            if (curDate === dataDate) {
                                $(this).css({'background-color': '#0091EA', 'color': '#ffffff'});
                            }
                        });

                        var acType = $("input[name='meeting-type']:checked").val();
                        var url = window.location.href + "?search_date=" + dataDate + '&ac_type=' + acType;
                        // console.log(url);
                        $.ajax({
                            url: url,
                            type: 'get',
                            dataType: 'json',
                            success: function (data) {
                                if (data.is_valid) {
                                    $(".booking-main-content").html(data.html_booking_list);
                                    // console.log(data)
                                }
                                else {
                                    console.log(data)
                                }
                            }
                        });
                    }
                })
        }
    }

    init_calendar()
});
