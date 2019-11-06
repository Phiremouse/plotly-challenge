function buildGauge(washfreq){
  var traceA = {
    type: "pie",
    showlegend: false,
    hole: 0.3,
    rotation: 90,
    values: [100 / 9, 100 / 9, 100 / 9, 100 / 9, 100 / 9,100 / 9,100 / 9,100 / 9,100 / 9, 100],
    text: ["0-1", "1-2", "2-3", "3-4", "4-5","5-6","6-7","7-8","8-9", ""],
    direction: "clockwise",
    textinfo: "text",
    textposition: "inside",
    marker: {
      colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "rgba(154, 350, 125, 0.6)"]
    },
    labels: ["0-1", "1-2", "2-3", "3-4", "4-5","5-6","6-7","7-8","8-9", ""],
    hoverinfo: "label"
  };
  
  var degrees = (180/9) * washfreq+10;
  var radius = .5;
  var radians = degrees * Math.PI/180;
  var x = 1 * radius * Math.cos(radians);
  var y = Math.sin(radians);
  
  var layout = {
    shapes:[{
        type: 'line',
        x0: .5,
        y0: .5,
        x1: x,
        y1: .5,
        line: {
          color: 'black',
          width: 8
        }
      }],
    title: 'Frequency of Washing',
    xaxis: {visible: false, range: [-1, 1]},
    yaxis: {visible: false, range: [-1, 1]}
  };
  
  var data = [traceA];
  

  

Plotly.newPlot("gauge",data,layout,{staticPlot: true});
}