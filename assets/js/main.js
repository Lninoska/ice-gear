$(document).ready(function () {
    $("#lupa1").click(function () {
        $("#input-1").css("background-color", "lightgreen");
        $("#input-1").css("color", "green");
        $("#input-1").css("font-weight", "bold");
    })
    $("#lupa2").click(function () {
        $("#input-2").css("background-color", "yellow");
        $("#input-2").css("color", "orange");
        $("#input-2").css("font-weight", "bold");
    })
    $("#lupa3").click(function () {
        $("#input-3").css("background-color", "lightblue");
        $("#input-3").css("color", "blue");
        $("#input-3").css("font-weight", "bold");
    });
})