google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Month');
      data.addColumn('number', 'Dinero ganado');

      data.addRows([
        [new Date(2022, 0), 13000],   [new Date(2022, 1), 19000],  [new Date(2022, 2), 33000],  [new Date(2022, 3), 56000],  [new Date(2022, 4), 34000],  [new Date(2022, 5), 48000],
        [new Date(2022, 6), 6000],  [new Date(2022, 7), 25000],  [new Date(2022, 8), 43000],  [new Date(2022, 9), 9000],  [new Date(2022, 10), 10000], [new Date(2022, 11), 23000]
      ]);

      var options = {
        width: 1450,
        height: 640,
        hAxis: {
          title: 'Ganancias 2022'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
