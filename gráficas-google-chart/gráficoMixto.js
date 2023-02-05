google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Evento Running 1', 'Evento Running 2', 'Evento Running 3', 'Evento Running 4', 'Evento Running 5', 'Media de inscripciones'],
    ['Enero',  165,      938,         522,             998,           450,      614.6],
    ['Febrero',  135,      1120,        599,             1268,          288,      682],
    ['Marzo',  157,      1167,        587,             807,           397,      623],
    ['Abril',  139,      1110,        615,             968,           215,      609.4],
    ['Mayo',  136,      691,         629,             1026,          366,      569.6],
    ['Junio',  165,      938,         522,             998,           450,      614.6],
    ['Julio',  135,      1120,        599,             1268,          288,      682],
    ['Agosto',  157,      1167,        587,             807,           397,      623],
    ['Septiembre',  139,      1110,        615,             968,           215,  609.4],
    ['Octubre',  136,      691,         629,             1026,          366,      569.6],
    ['Noviembre',  139,      1110,        615,             968,           215,      609.4],
    ['Diciembre',  136,      691,         629,             1026,          366,      569.6]
  ]);

  var options = {
    width: 1650,
    height: 640, 
    title : 'Media de inscritos por eventos',
    vAxis: {title: 'Número de inscritos'},
    hAxis: {title: 'Mes'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}