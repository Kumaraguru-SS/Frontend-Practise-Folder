      //Click event
      $(document).ready(function() {
        $("#click").click(function() {
          alert("Button clicked!");
        });
      });

      //Hide and Show event
      $(document).ready(function(){
        $("#hide").click(function(){
            $("p").hide(1000);
        });
      });
      $(document).ready(function(){
        $("#show").click(function(){
            $("p").show(1000);
        });
      });

      //hover event
      $(document).ready(function(){
        $("#hover").hover(function(){
            $(this).css("background-color", "skyblue");
        }, function(){
            $(this).css("background-color", "white");
        });
      });

      //on event
      $(document).ready(function(){
        $("#on").on({
            mouseenter: function(){
                $(this).css("background-color", "lightgreen");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            },
            click: function(){
                $(this).css("background-color", "yellow");
            }
        });
      });

      //fade event
      $(document).ready(function(){
        $("#fade").click(function(){
            $("p").fadeOut(1000);
        });
      });
        $(document).ready(function(){
            $("#fadein").click(function(){
                $("p").fadeIn(1000);
            });
        });
        $(document).ready(function(){
            $("#fadetoggle").click(function(){
                $("p").fadeToggle(1000);
            });
        });
        $(document).ready(function(){
            $("#fadeto").click(function(){
                $("p").fadeTo(1000, 0.5);
            });
        });

        //Slide event
        $(document).ready(function(){
            $("#slideup").click(function(){
                $("p").slideUp(1000);
            });
        });
        $(document).ready(function(){
            $("#slidedown").click(function(){
                $("p").slideDown(1000);
            });
        });
        $(document).ready(function(){
            $("#slidetoggle").click(function(){
                $("p").slideToggle(1000);
            });
        });

        //Animate event
        $(document).ready(function(){
            $("#animate").click(function(){
                $("p").animate({left: '500px'});
                $("p").animate({bottom: '200px'});
                $("p").animate({left: '200px'});
                $("p").animate({bottom: '0px'});
            });
        });

        //Callback function
        $(document).ready(function(){
            $("#cb").click(function(){
                $("p").hide(1000, function(){
                    alert("The paragraph is now hidden.");
                });
            });
        });

        //JS HTML Get
        $(document).ready(function(){
            $("#text").click(function(){
                alert("The text of the paragraph is: " + $("#textp").text());
            });
        });
        $(document).ready(function(){
            $("#html").click(function(){
                $("#textp").html("The text has been changed!");
            });
        });
        $(document).ready(function(){
            $("#val").click(function(){
                $("#textp").val("The text value has been changed!");
            });
        });
        $(document).ready(function(){
            $("#attr").click(function(){
                $("#textp").attr("style", "color: green;");
            });
        });

        //JS HTML Add
        $(document).ready(function(){
            $("#append").click(function(){
                $("#app").append("<p>The text has been appended!</p>");
            });
        });
        $(document).ready(function(){
            $("#prepend").click(function(){
                $("#prep").prepend("<p>The text has been prepended!</p>");
            });
        });
        $(document).ready(function(){
            $("#after").click(function(){
                $("#aft").after("<p>The text has been added after!</p>");
            });
        });
        $(document).ready(function(){
            $("#before").click(function(){
                $("#befo").before("<p>The text has been added before!</p>");
            });
        });

        //Remove
        $(document).ready(function(){
            $("#remove").click(function(){
                $("#rem").remove();
                $("#showremove").show();
            });
        });
        $(document).ready(function(){
            $("#empty").click(function(){
                $("#emp").empty();
                $("#showempty").show();
            });
        });

        //CSS Classes
        $(document).ready(function(){
            $("#addclass").click(function(){
                $("#class").addClass("blue");
            });
            $("#removeclass").click(function(){
                $("#class").removeClass("blue");
            });
            $("#toggleclass").click(function(){
                $("#class").toggleClass("blue");
            });
        });

        //CSS Properties
        $(document).ready(function(){
            $("#css").click(function(){
                $("#col").css("color", "red");
            });
        });

        //Dimensions
        $(document).ready(function(){
            $("#width").click(function(){
                alert("The width of the paragraph is: " + $("#dimensions").width() + "px");
            });
        });
        $(document).ready(function(){
            $("#height").click(function(){
                alert("The height of the paragraph is: " + $("#dimensions").height() + "px");
            });
        });
        $(document).ready(function(){
            $("#innerwidth").click(function(){
                alert("The inner width of the paragraph is: " + $("#dimensions").innerWidth() + "px");
            });
        });
        $(document).ready(function(){
            $("#innerheight").click(function(){
                alert("The inner height of the paragraph is: " + $("#dimensions").innerHeight() + "px");
            });
        });
        $(document).ready(function(){
            $("#outerwidth").click(function(){
                alert("The outer width of the paragraph is: " + $("#dimensions").outerWidth() + "px");
            });
        });
        $(document).ready(function(){
            $("#outerheight").click(function(){
                alert("The outer height of the paragraph is: " + $("#dimensions").outerHeight() + "px");
            });
        });

        //Traversing
        //Ancestor
        $(document).click(function(){
            $("#span1").parent().css({"border":"2px solid red"});
            $("#span2").parents().css({"border":"2px solid blue"});
            $("#span3").parents("ul").css({"border":"2px solid green"});
            $("#span4").parentsUntil("div").css({"border":"2px solid yellow"});
        });
        //Descendants
        $(document).ready(function(){
            //$("li").children().css({"border": "2px solid red"});
            //$("li").children("p.first").css({"border": "2px solid red"});
            //$("li").find("span").css({"border": "2px solid red"});
            //$("li").find("*").css({"border": "2px solid red"});
        });