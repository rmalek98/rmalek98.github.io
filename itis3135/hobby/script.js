$(document).ready(function() {
    console.log("jQuery loaded.");

    //Hides all sections but home
    let sections = $("section");
    sections.not("#home").hide();

    $("#about-nav").click(function() {
        $("#about").show();
        sections.not("#about").hide();
    });

    $("#home-nav").click(function() {
        $("#home").show();
        sections.not("#home").hide();
    });

    $("#where-nav").click(function() {
        $("#where").show();
        sections.not("#where").hide();
    });

    $("#how-nav").click(function() {
        $("#how").show();
        sections.not("#how").hide();
    })

    $("#why-nav").click(function() {
        $("#why").show();
        sections.not("#why").hide();
    })
})