


    Highcharts.chart('chartContainer1', {
      
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'Average Non-Traded REIT Competitor'
      },
        // tooltip: {
        //   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        // },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
      
              style: {
                //   display: 'none'
                // fontWeight: 'bold',
                // fontSize: '0px'
              }
            }

          }
        },
        series: [{
          type: 'pie',
          name: 'Average Non-Traded REIT Competitor',
          data: [
            { y: 7, name: "Operational Costs", color: "#c77732"},
            { y: 14, name: "Recurring Costs", color: "#194c61" },
            { y: 10, name: "Upfront Costs", color: "#296e8f"  },
         ],
        states: {
            hover: {
                display: 'block',
                // fontSize: '12px',
                // color:'white',
                borderColor: 'grey'
                // this.pie.dataLabels.display: 'true'
            }
        }
        }]
      });

    Highcharts.chart('container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'stREITwise'
      },
        // tooltip: {
        //   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        // },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
              distance: -50,
              style: {
                //   display: 'none'
                // fontWeight: 'bold',
                // fontSize: '0px'
              }
             
            },
            showInLegend: true,
            startAngle: -80,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
          }
        },
        series: [{
          type: 'pie',
          name: 'stREITwise',
          data: [{
            name: 'Operational Costs',
            color: '#3d4f6d',
            y: 2
          },
          {
            name: 'Recurring Costs',
            color: '#548aa3',
            y: 4 
          },
        {
            name: 'Upfront Costs',
            color: '#d68f0c',
            y: 7,
        }],
        states: {
            hover: {
                display: 'block',
                // fontSize: '12px',
                color:'white',
                borderColor: 'grey'
                // this.pie.dataLabels.display: 'true'
            }
        }
        }]
      });
      


     Highcharts.chart('container1', {
      chart:{
        backgroundColor: '#194c61',
        borderColor: '#d00c0e',
        borderWidth: 3
      },

    
      title: {
        style:{
          color:'#fff'
        },
        text: 'Real Estate vs. Stock Market'
      },
    
      xAxis:{
   
      lineColor: '#fff',
      tickColor: '#fff',
      labels: {
         style: {
            color: '#fff'
         }
      }
      },
      yAxis: {
     
          style:{
            color:'#fff'
          }
      
        ,
        title: {
          style:{'color':'#fff'},
          text: ' Growth(%)'
        },
        labels: {
          style:{
            'color':'#fff'
          },
          formatter: function () {
              return '$' + this.axis.defaultLabelFormatter.call(this);
          },
          style:{
            color:'#fff'
          }            
      }
      },
      legend: {
        itemStyle:{
        color:'#fff'
        },
        
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 00
        }
      },
    
      series: [{
        
        name: 'Real Estate',
        color:'#d68f0c',
        
        data: [23934, 52503, 57177, 69658, 97031, 119931, 137133, 154175,137133,119931,97031, 119931, 137133, 119931, 137133,144133,134133,134133]
      }, {
        name: 'S&P',
        color: '#548aa3',
        data: [23934,18948, 24105, 11248, 17989, 34816, 44274,  34816, 11816, 16105,22816, 28274, 42111,28989, 42816, 40274,40274, 43274]
      }],
   
      responsive: {
        rules: [{
          condition: {
            maxWidth: 1
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            
            }
             
          }
        }]
      }
    
    }); 
    
    document.getElementsByClassName('highcharts-credits')[0].innerHTML = '';
      document.getElementsByClassName('highcharts-credits')[1].innerHTML = '';
      document.getElementsByClassName('highcharts-credits')[2].innerHTML = '';
      // document.getElementsByClassName('highcharts-title')[0].innerHTML = '';
      // document.getElementsByClassName('highcharts-title')[1].innerHTML = '';
     console.log(document.getElementsByClassName('highcharts-credits')[0].innerHTML )