$(document).ready(function(){
    var pressed = false;
    $(document).keypress("e", function(){
        $("#image").attr("src", "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png");
        alert("trolled");
        pressed = true;
    });
    $(document).on("click", function(){
        if(pressed){
            $("#image").attr("src", "https://media.discordapp.net/attachments/565997432383733772/633383093381627924/Screenshot_20191008-224402.png");
            alert("You have been untrolled.");
            pressed = false;
        }
    });
    var x = 1;
    var y = "1";
    console.log(x == y);
    console.log(x === y);
 });