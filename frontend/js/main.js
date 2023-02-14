
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
    const ctx1 = document.getElementById('worldwide-sales');
    var myChart = new Chart(ctx1,
        config
    )




    // Cost of ridesharre by mileage graph
    let fileName = "../data/tripRequest.csv";

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
                label: "Miles Traveled",
                data: milesArr,
                backgroundColor: "rgba(0, 255, 255, 0.6)",
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + ' mi.';
                        },
                    }
                },
            },
            responsive: true,
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1
                }
            },
        }
    });


    // pie chart

    fileName = "../data/vehicleInfo.csv";
    let yearArr = [];
    Papa.parse(fileName,
        {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {

                console.log(results);
                for (let i = 0; i < results.data.length; i++) {
                    yearArr[i] = results.data[i].year;
                }
                yearArr.sort();
            }
        })


    data = {
        labels: [
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [2, 1, 0, 11, 17, 7, 11, 8, 41, 21, 27, 52, 180, 7, 11],
            backgroundColor: [

                'rgba(235, 22, 22, 0.2)',
                'rgba(235, 22, 22, 1)',
                'rgba(235, 22, 22, 0.5)',
                'rgb(240, 240, 240)',
                'rgba(235, 22, 22, 0.7)',
                'rgba(235, 22, 22, 0.2)',
                'rgba(235, 22, 22, 1)',
                'rgba(235, 22, 22, 0.5)',
                'rgb(240, 240, 240)',
                'rgba(235, 22, 22, 0.7)',
                'rgba(235, 22, 22, 0.2)',
                'rgba(235, 22, 22, 1)',
                'rgba(235, 22, 22, 0.5)',
                'rgb(240, 240, 240)',
                'rgba(235, 22, 22, 0.7)'
            ],
            borderColor: 'rgb(0, 0, 0)',
            hoverOffset: 25
        }]
    };
    config = {
        type: 'pie',
        data: data,
    };

    const ctx3 = document.getElementById('pieChart');
    var myChart = new Chart(ctx3, config)

    // maintenance graph
    const ctx4 = document.getElementById('maintenance');
    new Chart(ctx4, {
        type: 'line',
        data: {
            datasets: [{
                backgroundColor: 'rgba(235, 22, 222, 0.5)',
                label: 'Electric Vehicle',
                data: ['0', '2100', '4200', '6300', '8400', '21000'],
                fill: true,
            },
            {
                backgroundColor: 'rgba(235, 322, 22, 0.8)',
                label: 'Internal Combustion Vehicle',
                data: ['150', '3000', '6000', '9000', '12000', '18000'],
                fill: true,

            }],
            labels: ['0', '30,000 mi.', '60,000 mi.', '90,000 mi.', '120,000 mi.', '150,000 mi.'],

        },
        options: {
            responsive: true,
            elements: {
                line: {
                    tension: 0.13
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return '$' + value;
                        },
                    }
                },
            },
        }
    });



    data = {
        labels: [
            'Senior',
            'Student',
            'Workforce (non-healthcare)',
            'Healthcare',
            'Other',

        ],
        datasets: [{
            label: 'Percentage of Rideshare Users',
            data: [23.08, 30.8, 30.8, 3.85, 11.54],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Percentage of Population',
            data: [16.9, 5.74, 48.2, 14, 1.16],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
        ]
    };


    config = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    const ctx5 = document.getElementById('organization');
    new Chart(ctx5, config);




    const ctx6 = document.getElementById('usage-age');
    new Chart(ctx6, {
        type: 'bar',
        data: {
            datasets: [{
                label: '% of Population',
                data: ['51', '43', '24'],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
            }],
            labels: ['18-29 years', '30-49 years', '50+ years'],

        },
    });

    const ctx7 = document.getElementById('usage-education');
    new Chart(ctx7, {
        type: 'bar',
        data: {
            datasets: [{
                label: '% of Population Using Ride Share',
                data: ['20', '36', '55'],
                fill: true,
                order: 1,
                backgroundColor: 'rgba(233, 108, 41, 0.905)'
            }, {
                type: 'line',
                label: '% of Overall Population',
                data: ['22.3', '12', '65.7'],
                fill: true,
                order: 2,
                backgroundColor: 'rgba(149, 236, 56, 0.905)'

            }],
            labels: ['HS or Less', 'Some College', 'College Graduate'],

        },
        options: {
            elements: {
                line: {
                    tension: 0.1
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + ' %';
                        }
                    }
                },
            },

        },
    });


})(jQuery);

