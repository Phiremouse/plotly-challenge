function buildGauge(washfreq){
  var traceA = {
    type: "pie",
    showlegend: false,
    hole: 0.3,
    rotation: 90,
    values: [100 / 5, 100 / 5, 100 / 5, 100 / 5, 100 / 5, 100],
    text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
    direction: "clockwise",
    textinfo: "text",
    textposition: "inside",
    marker: {
      colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "rgba(154, 350, 125, 0.6)"]
    },
    labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
    hoverinfo: "label"
  };
  
  var degrees = 69;
  var radius = .5;
  var radians = degrees * Math.PI/180;
  var x = Math.cos(radians);
  var y = Math.sin(radians);
  
  var layout = {
    shapes:[{
        type: 'line',
        x0: 1,
        y0: .5,
        x1: 1,
        y1: y,
        line: {
          color: 'black',
          width: 8
        }
      }],
    title: 'Number of Printers Sold in a Week',
    xaxis: {visible: false, range: [-1, 1]},
    yaxis: {visible: false, range: [-1, 1]}
  };
  
  var data = [traceA];
  

  

Plotly.newPlot("gauge",data,layout,{staticPlot: true});
}