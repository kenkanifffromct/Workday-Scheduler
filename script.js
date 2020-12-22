$(document).ready(function () {

    var day = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(day);

    $("#today").append(day);
    var time = parseInt(moment().format("HH"));
    
  
    var nine = $("#9input");
    var ten = $("#10input");
    var eleven = $("#11input");
    var twelve = $("#12input");
    var one = $("#1input");
    var two = $("#2input");
    var three = $("#3input");
    var four = $("#4input");
    var five = $("#5input");
  
  
    $(".form-control").each(function () {
      var name = parseInt($(this).attr("name"));
      if (name < time) {
        $(this).addClass("past");
      }
  
      else if (name > time) {
        $(this).addClass("future");
      }
  
      else (name === time); {
        $(this).addClass("present");
      }
    });
  
    $("button").on("click", function () {
      localStorage.setItem("9:00am", nine.val());
      localStorage.setItem("10:00am", ten.val());
      localStorage.setItem("11:00am", eleven.val());
      localStorage.setItem("12:00pm", twelve.val());
      localStorage.setItem("1:00pm", one.val());
      localStorage.setItem("2:00pm", two.val());
      localStorage.setItem("3:00pm", three.val());
      localStorage.setItem("4:00pm", four.val());
      localStorage.setItem("5:00pm", five.val());
    });
  
    $("#9input").append(localStorage.getItem("9:00am"));
    $("#10input").append(localStorage.getItem("10:00am"));
    $("#11input").append(localStorage.getItem("11:00am"));
    $("#12input").append(localStorage.getItem("12:00pm"));
    $("#1input").append(localStorage.getItem("1:00pm"));
    $("#2input").append(localStorage.getItem("2:00pm"));
    $("#3input").append(localStorage.getItem("3:00pm"));
    $("#4input").append(localStorage.getItem("4:00pm"));
    $("#5input").append(localStorage.getItem("5:00pm"));
  });
