window.onload = function() {

    var speedTest = require("speedtest-net");
    var test = speedTest({maxTime: 5000});
    console.log("starting test");
    
    test.on("data", data => {
        console.log("test done, populating data fields");
        document.getElementsByClassName("loader")[0].style.display = "none";
        document.getElementById("title").innerHTML ="Results";
        document.getElementById("dl-speed").innerHTML = "Download speed: " + data.speeds.download;
        document.getElementById("ul-speed").innerHTML = "Upload speed: " + data.speeds.upload;
        console.log("dl speed: " + data.speeds.download);
        console.log("ul speed: " + data.speeds.upload);
    });
                
    test.on("error", err => {
        console.error(err);
    });

}