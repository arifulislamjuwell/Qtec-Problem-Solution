// $(document).ready(function(){
//     /****************************
//     **  Cart
//     *****************************/
//     var ctx = document.getElementById("myChart").getContext('2d');
//     var myChart = new Chart(document.getElementById("myChart"), {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 60, 10, 30, 0, 100],
//                 backgroundColor: [
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//
//                     },
//                     gridLines: {
//
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     // display: false,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         //  showBorder:false
//                         drawBorder: false
//                     },
//                 }]
//             },
//
//         }
//     });
//
//     /****************************
//     **  Cart 2
//     *****************************/
//     var ctx2 = document.getElementById("myChart2").getContext('2d');
//     var myChart2 = new Chart(ctx2, {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 60, 0, 0, 0, 100],
//                 backgroundColor: [
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//                     },
//                     gridLines: {
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//     /****************************
//     **  Cart 3
//     *****************************/
//     var ctx3 = document.getElementById("myChart3").getContext('2d');
//     var myChart3 = new Chart(ctx3, {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 60, 0, 0, 0, 100],
//                 backgroundColor: [
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//                     },
//                     gridLines: {
//
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//
//
//     /****************************
//     **  Cart 5
//     *****************************/
//      new Chart( document.getElementById("myChart5"), {
//         type: 'doughnut',
//         data: {
//             labels: ["Germany", "Canada" ],
//             datasets: [{
//                 label: '',
//                 data: [ 46, 54],
//                 backgroundColor: [
//                     '#437CBF',
//                     '#3D8E36',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 4,
//             cutoutPercentage: 80,
//             legend: {
//                 display: false,
//             },
//             scaleShowLabels : false,
//             omitXLabels: true,
//             scales: {
//                 yAxes: [{
//                     stacked: false,
//                     display: false,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:false,
//
//                     },
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: false,
//                      display: false,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//     /****************************
//     **  Cart 6
//     *****************************/
//      new Chart( document.getElementById("myChart6"), {
//         type: 'doughnut',
//         data: {
//             labels: ["Germany", "Canada" ],
//             datasets: [{
//                 label: '',
//                 data: [ 86, 54],
//                 backgroundColor: [
//                     '#437CBF',
//                     '#C86464',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 4,
//             cutoutPercentage: 80,
//             legend: {
//                 display: false,
//             },
//             scaleShowLabels : false,
//             omitXLabels: true,
//             scales: {
//                 yAxes: [{
//                     stacked: false,
//                     display: false,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:false,
//
//                     },
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: false,
//                      display: false,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//     /****************************
//     **  Cart 7
//     *****************************/
//      new Chart( document.getElementById("myChart7"), {
//         type: 'doughnut',
//         data: {
//             labels: ["Germany", "Canada" ],
//             datasets: [{
//                 label: '',
//                 data: [ 86, 54],
//                 backgroundColor: [
//                     '#C86464',
//                     '#6DC496',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 4,
//             cutoutPercentage: 80,
//             legend: {
//                 display: false,
//             },
//             scaleShowLabels : false,
//             omitXLabels: true,
//             scales: {
//                 yAxes: [{
//                     stacked: false,
//                     display: false,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:false,
//
//                     },
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: false,
//                      display: false,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//     /****************************
//     **  myChart8
//     *****************************/
//     var myChart8 = new Chart(document.getElementById("myChart8"), {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 60, 0, 0, 0, 100],
//                 backgroundColor: [
//
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//
//                     },
//                     gridLines: {
//
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//
//     /****************************
//     **  myChart9
//     *****************************/
//     var myChart9 = new Chart(document.getElementById("myChart9"), {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 90, 0, 40, 0, 100],
//                 backgroundColor: [
//
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//
//                     },
//                     gridLines: {
//
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//     /****************************
//     **  myChart10
//     *****************************/
//     var myChart10 = new Chart(document.getElementById("myChart10"), {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Blue", "Yellow" ],
//             datasets: [{
//                  label: '',
//                 data: [ 0, 60, 0, 0, 0, 100],
//                 backgroundColor: [
//
//                     '#fff',
//                     '#437CBF',
//                     '#6DC496',
//                     '#D36060',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             barRoundness: 8,
//             legend: {
//                 display: true,
//                 labels: {
//                     fontColor: 'rgb(255, 99, 132)'
//                 }
//             },
//             scales: {
//                 yAxes: [{
//                     stacked: true,
//                     zeroLineWidth:0,
//                     ticks: {
//                         beginAtZero:true,
//
//                     },
//                     gridLines: {
//
//                         drawBorder: false
//                     },
//                 }],
//                 xAxes: [{
//                     barPercentage: 0.4,
//                     stacked: true,
//                     zeroLineWidth:0,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 }]
//             },
//         }
//     });
//
//
// });

// start bar chart js code
$(document).ready(function(){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  // end bar chart js code


  //start pie chart js code
  new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Red", "Purple", "Yellow", "Light Blue", "Light Green"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#ff5252", "#9c27b0","#ffee58","#29b6f6","#9ccc65"],
          data: [2478,5267,734,784,433]
        }]
      },
      options: {
        title: {
          display: true,
          text: ''
        }
      }
  });
  // end pie chart js code


// start Horizontal bar chart
  new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#ff5252", "#29b6f6","#ffee58","#9ccc65","#9c27b0"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
});
//end Horizontal bar chart


// Start Line Chart js code
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.6)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.6)"
    }]
  }
});
// Start Line Chart js code



});

//sart chart js
$(document).ready(function(){
		var color = Chart.helpers.color;
		function createConfig(colorName) {
			return {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'My First dataset',
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
						backgroundColor: color(window.chartColors[colorName]).alpha(0.5).rgbString(),
						borderColor: window.chartColors[colorName],
						borderWidth: 1,
						pointStyle: 'rectRot',
						pointRadius: 5,
						pointBorderColor: 'rgb(0, 0, 0)'
					}]
				},
				options: {
					responsive: true,
					legend: {
						labels: {
							usePointStyle: false
						}
					},
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Month'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Value'
							}
						}]
					},
					title: {
						display: true,
						text: ''
					}
				}
			};
		}

		function createPointStyleConfig(colorName) {
			var config = createConfig(colorName);
			config.options.legend.labels.usePointStyle = true;
			config.options.title.text = 'Point Style Legend';
			return config;
		}

		window.onload = function() {
			[{
				id: 'chart-legend-normal',
				config: createConfig('red')
			}].forEach(function(details) {
				var ctx = document.getElementById(details.id).getContext('2d');
				new Chart(ctx, details.config);
			});
		};
});

// Define a plugin to provide data labels
