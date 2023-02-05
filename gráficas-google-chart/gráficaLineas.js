google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Mes');
      data.addColumn('number', 'Dinero ganado');

      data.addRows([
        [new Date(2022, 0), 13000],   [new Date(2022, 1), 19000],  [new Date(2022, 2), 33000],  [new Date(2022, 3), 56000],  [new Date(2022, 4), 34000],  [new Date(2022, 5), 48000],
        [new Date(2022, 6), 6000],  [new Date(2022, 7), 25000],  [new Date(2022, 8), 43000],  [new Date(2022, 9), 9000],  [new Date(2022, 10), 10000], [new Date(2022, 11), 23000]
      ]);
      var options = {
        chart: {
          title: 'Ganancias mensuales para el año 2022',
          subtitle: 'En miles de euros €'
        },
        width: 1450,
        height: 640, 
      };

      var chart = new google.charts.Line(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
