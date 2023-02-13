


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // doughnut vehicle make chart
    let data = {
        labels: [
            'Honda',
            'Toyota',
            'Chevrolet',
            'Dodge',
            'Ford',
        ],
        datasets: [{
            data: [52, 16, 100, 6, 280],
            backgroundColor: [
                'rgba(235, 22, 22, 0.2)',
                'rgba(235, 22, 22, 1)',
                'rgba(235, 22, 22, 0.5)',
                'rgb(240, 240, 240)',
                'rgba(235, 22, 22, 0.7)'
            ],
            borderColor: 'rgb(0, 0, 0)',
            hoverOffset: 25
        }]
    }
    let config = {
        type: 'doughnut',
        data: data,
    };
    const ctx = document.getElementById('worldwide-sales');
    var myChart = new Chart(ctx,
        config
    )




    // Cost of ridesharre by mileage graph
    const fileName = "../data/tripRequest.csv";

    let fareArr = [];
    let milesArr = [];
    Papa.parse(fileName,
        {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {


                for (let i = 0; i < 67082; i++) {
                    let ans = results.data[i].fare;
                    let miles = results.data[i].estimated_miles;
                    fareArr[i] = ans;
                    milesArr[i] = miles;
                }
                milesArr.sort(function (a, b) { return a - b });;
                fareArr.sort(function (a, b) { return a - b });;
            }
        })

    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: fareArr,
            datasets: [{
                label: "Miles/Dollar",
                data: milesArr,
                backgroundColor: "rgba(235, 22, 22, .7)",
                fill: true
            },
                // {
                //     label: "Revenue",
                //     data: [99, 135, 170, 130, 190, 180, 270],
                //     backgroundColor: "rgba(235, 22, 22, .5)",
                //     fill: true
                // }
            ]
        },
        options: {

            responsive: true,
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1
                }
            }
        }
    });


    // pie chart
    data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    config = {
        type: 'pie',
        data: data,
    };



    const ctx5 = document.getElementById('pieChart');
    var myChart = new Chart(ctx5,
        config
    )





})(jQuery);

