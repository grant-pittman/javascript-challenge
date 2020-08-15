// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    //console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
   });
});

var submitButton = d3.select("#filter-btn");

submitButton.on("click", function() {
    // clears the data of the current table
    
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // select the "input element" and get the raw html node
    var inputField = d3.select("#datetime");
    // get the value property of the "input" element 
    var inputElement = inputField.property("value");
    // print value in console
    console.log(inputElement);
    // use the "field input" to filter the data by "date" only
    var inputTypeArray = tableData.filter(one => one.datetime === inputElement);  
    console.log(inputTypeArray);

    
    // display in the html file (appends it at the end, after displaying all original data)
    inputTypeArray.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            // adds the "value" to each row in the table
            cell.text(value);
        });
    });      
});


//var button = d3.select("#filter-btn");
//button.on("click", runEnter);

