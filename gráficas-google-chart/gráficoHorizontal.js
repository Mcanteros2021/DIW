google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Año', 'Evento running 1', 'Evento running 2', 'Evento running 3'],
          ['2022', 1300, 400, 200],
          
        ]);

        var options = {
          chart: {
            
            title: 'Ranking de eventos con más inscritos en 2022',
            subtitle: 'Eventos ordenados de más inscritos a menos inscritos de 2022',
          },
          bars: 'horizontal',
          width: 1450,
           height: 640,  // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }