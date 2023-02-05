google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Eventos de 5Km',2],
    ['Eventos de 10Km',3],
    ['Eventos de 21Km',6],
    ['Eventos de 42Km',5],
  ]);

  var options = {
    width: 1450,
    height: 640,  
    title: 'Número de inscritos en las siguientes categorías',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}