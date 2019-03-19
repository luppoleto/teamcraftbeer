$(function(){

    $(".sponsorbtn").click(function()
    {
        var level = $(this).data("level");
        $("#level-chooser").prop('selectedIndex', level);         

    });

    $("#volunteerBtn").click(function()
    {
        $("#subject").prop('value', 'Volunteer Opportunities');
    });

  });