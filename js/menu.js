$(document).ready(function(){
    console.debug("asdfdsaf");
    
    $.get("menu.csv", function(data, status){
    
        const csvObject = $.csv.toArrays(data);

        console.log("Data: " + csvObject[0][2]);
        $('#welcomeDrink').empty();
        $('#startersColumn0').empty();
        $('#startersColumn1').empty();
        $('#startersColumn2').empty();
            
        csvObject.forEach(element => {
            if(element[0] == "welcomeDrinks")
            {
                console.log(element[0]);
                var i = 0;
                element.forEach(element1 => {
                    if(i!=0)
                    {
                        var current = $('#welcomeDrink').html();
                        $('#welcomeDrink').html(current+ "<input type=\"checkbox\"  name=\"drink[]\" value=\""+element1+"\" class=\"check-box\"><label class=\"menu-items\">"+ element1+"</label><br>");
                    }
                    i++;
                });
            }
            if(element[0] == "startersColumn0")
            {
                console.log(element[0]);
                var i = 0;
                element.forEach(element1 => {
                    if(i!=0)
                    {
                        var current = $('#startersColumn0').html();
                        $('#startersColumn0').html(current+ "<input type=\"checkbox\"  name=\"drink[]\" value=\""+element1+"\" class=\"check-box\"><label class=\"menu-items\">"+ element1+"</label><br>");
                    }
                    i++;
                });
            }
            if(element[0] == "startersColumn1")
            {
                console.log(element[0]);
                var i = 0;
                element.forEach(element1 => {
                    if(i!=0)
                    {
                        var current = $('#startersColumn1').html();
                        $('#startersColumn1').html(current+ "<input type=\"checkbox\"  name=\"drink[]\" value=\""+element1+"\" class=\"check-box\"><label class=\"menu-items\">"+ element1+"</label><br>");
                    }
                    i++;
                });
            }
            if(element[0] == "startersColumn2")
            {
                console.log(element[0]);
                var i = 0;
                element.forEach(element1 => {
                    if(i!=0)
                    {
                        var current = $('#startersColumn2').html();
                        $('#startersColumn2').html(current+ "<input type=\"checkbox\"  name=\"drink[]\" value=\""+element1+"\" class=\"check-box\"><label class=\"menu-items\">"+ element1+"</label><br>");
                    }
                    i++;
                });
            }

        });

        
        
    });
});