function buildGauge(washfreq){
  var traceA = {
    type: "pie",
    showlegend: false,
    hole: 0.2,
    rotation: 90,
    domain: {'x':[0,.48]},
    values: [100 / 5, 100 / 5, 100 / 5, 100 / 5, 100 / 5, 100],
    text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
    direction: "clockwise",
    textinfo: "text",
    textposition: "inside",
    marker: {
      colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "white"]
    },
    labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
    hoverinfo: "label"
  };
  
  
  
  var layout = {
    shapes:[{
      type: 'path',
      path: 'M 0.235 0.5 L 0.24 0.65 L 0.245 0.5 Z',
      fillcolor: 'rgba(44, 160, 101, 0.5)',
      line: {
          'width': 0.8
        }
      }],
    title: 'Number of Printers Sold in a Week',
    xaxis: {visible: false, range: [-1, 1]},
    yaxis: {visible: false, range: [-1, 1]}
  };
  
  var data = [traceA];




Plotly.newPlot("gauge",data,layout)
}