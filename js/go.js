function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("../json/house_data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

    var svg = document.getElementById("svg-object");
    svg.addEventListener("load",function(){
        var svgDoc = svg.contentDocument;
        for (i = 0; i < 610; i++) {
            var svgItem = svgDoc.getElementById(i);
            if(svgItem){
                svgItem.addEventListener('mouseover', function() {
                    this.style.fill ="white";
                    if(data[0].house.data[this.id].id == this.id) {
                        let text = "";
                        text += "<p><h1><strong> ID: " + this.id + "</strong></h1></p>"
                        text += "<p><h1><strong> Adresse: " + data[0].house.data[this.id].street + " " + data[0].house.data[this.id].street_number + "</strong></h1></p>"
                        text += "<p><h1><strong> Baujahr: " + data[0].house.data[this.id].yoc + "</strong></h1></p>"
                        text += "<p><h1><strong> Info: " + data[0].house.data[this.id].info + "</strong></h1></p>"
                        document.getElementById("1").innerHTML = text;
                        console.log("1");
                    }
                    else{
                        document.getElementById("1").innerHTML = "<h1><strong>" + this.id + "</strong></h1>";
                        console.log("2");
                    }
                });

                svgItem.addEventListener('mouseout', function() {
                    this.style.fill ="rgb(85.098039%,81.568627%,78.823529%)";
                    document.getElementById("2").innerHTML = ' '
                });
            }
        }
    }, false);

});
