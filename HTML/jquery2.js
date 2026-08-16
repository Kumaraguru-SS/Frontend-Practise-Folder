        //AJAX Introduction
        //Load
        jq(document).ready(function(){
            jq("#load").click(function(){
                jq("#output").load("loadtest.txt", function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "success")
                        alert("External content loaded successfully!");
                    if(statusTxt == "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
            });
        });

        //Get and Post
        jq(document).ready(function(){
            jq("#get").click(function(){
                jq.get("jqueryget.asp", function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
            });
        });
        jq(document).ready(function(){
            jq("#post").click(function(){
                jq.post("jquerypost.asp",
                {
                    name: "John Smith",
                    city: "Midgard"
                },function(data,status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
            });
        });
        $.noConflict();
        var jq = jQuery;

        jq(document).ready(function(){
            jq("#nocon").click(function(){
                jq("#noconoutput").text("jQuery is still working!");
            });
        });

        //Filter Table
        jq(document).ready(function(){
            jq("#myInput").on("keyup", function() {
                var value = jq(this).val().toLowerCase();
                jq("#myTable tr").filter(function() {
                    jq(this).toggle(jq(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });