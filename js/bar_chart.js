google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
      var data = google.visualization.arrayToDataTable([
        [' ', '%'],
        ['IT Engineers', 36],
        ['Electrical Technicians', 33],
        ['IT Analysts, Architects, System Designers', 17],
        ['IT Specialist Managers', 11],
        ['Design and Development Engineers', 0]
      ]);

     
      var materialOptions = {
        chart: {
          title: 'Gender pay gap by sectors (%)',
        },
        hAxis: {
          title: 'Total pay gap %',
          minValue: 0,
        },
        vAxis: {
          title: 'sector'
        },
        bars: 'horizontal'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
    }