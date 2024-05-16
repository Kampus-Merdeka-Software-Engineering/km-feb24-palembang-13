
  var chart1 = new CanvasJS.Chart("chartContainer", {
      title: {
          text: "Average Profit by Year"
      },
      data: [{
          type: "line",
          dataPoints: [
              { label: "2014", y: 49543.97 },
              { label: "2015", y: 61618.6 },
              { label: "2016", y: 81795.17 },
              { label: "2017", y: 93439.27 },
          ]
      }]
  });

  chart1.render();