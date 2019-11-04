function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    var mdcontainer = d3.select('#sample-metadata')    
    // Use `.html("") to clear any existing metadata
    //QUESTION .... doesnt work well when i use it on graphs wonder why
    mdcontainer.html('');
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
    var metaurl = `/metadata/${sample}`;
    d3.json(metaurl).then(response => {
      //console.log (response.WFREQ);
      var selection = mdcontainer
      Object.entries(response).forEach(([key, value]) => {
        // console.log(`${key}:${value}`)
        //QUESTION..this method works so why do i need the enter append way we were taught later??
        var li = selection.append('p').text(`${key} : ${value}`)
      })
      buildGauge(response.WFREQ);
    })
    // BONUS: Build the Gauge Chart
     
}

function buildCharts(sample) {
  // @TODO: Use `d3.json` to fetch the sample data for the plots
    var dataurl = `/samples/${sample}`    
    d3.json(dataurl).then((response) => {
        const allvalues = response.sample_values;
        const alllabels= response.otu_ids;
        const allhovertext = response.otu_labels
        const t10values = response.sample_values.slice(0,10);
        const t10labels= response.otu_ids.slice(0,10);
        const t10hovertext = response.otu_labels.slice(0,10);
        
         // @TODO: Build a Bubble Chart using the sample data
         var sdata = [{
           type:'scatter',
           mode:'markers',
           x:alllabels,
           y:allvalues,
           text:allhovertext,
           marker:{
             size:allvalues,
            color:alllabels
           }

         }]
         Plotly.newPlot('bubble',sdata);
   
        // @TODO: Build a Pie Chart     
        var piedata =[{
          type:'pie',
          values:t10values,
          labels:t10labels,
          hovertext:t10hovertext
        }]
        Plotly.newPlot('pie',piedata);
   
    })
    
   

    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
