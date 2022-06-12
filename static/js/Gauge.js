// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    // Create a variable that holds the first sample in the array.


    // 2. Create a variable that holds the first sample in the metadata array.
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = result.otu_ids;
    var otuLabels = result.otu_labels;
    var sampleValues = result.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var washFreq = parseInt(metaResult.wfreq)
    // Create the yticks for the bar chart.
    var yticks = otuIDs.slice(0,10).reverse().map(function(otu) {return `OTU ${otu}`});
    var xticks = sampleValues.slice(0,10).reverse();
    var labels = otuLabels.slice(0,10).reverse();
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
        value: washFreq,
        type: 'indicator',
        mode: 'guage+number',
        gauge: {
          axis: {range: [0,10]},
          steps: [
            {range: [0,2], color:'rgba(255,0,0,1)'},
            {range: [2,4], color:'rgba(255,255,0,1)'},
            {range: [4,6], color:'rgba(255,165,0,1)'},
            {range: [6,8], color:'rgba: rgba(0,0,0,0)'},
            {range: [8,10], color:'rgba: rgba(0,0,0,0)'}
          ]
        }
    } 
  ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
        title: {text:'Belly Button Washing Frequency<br>Scrubs per Week'},
        width: 600, height: 400, margin: {t:0,b:0}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("guage",gaugeData,gaugeLayout);
  });
}
