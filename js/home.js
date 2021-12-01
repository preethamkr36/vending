function getPrice(drink){
    if(drink=="pepsi"){
        let v=document.getElementById("pepsi").value;
        let price=v*21;
        document.getElementById("pepsiValue").innerHTML="Price for "+v+" pepsi is "+price;
    }
    if(drink=="coca"){
        let v=document.getElementById("coca").value;
        let price=v*20;
        document.getElementById("cocaValue").innerHTML="Price for "+v+" coca is "+price;
    }
    if(drink=="7up"){
        let v=document.getElementById("7up").value;
        let price=v*19;
        document.getElementById("7upValue").innerHTML="Price for "+v+" 7up is "+price;
    }
    if(drink=="dew"){
        let v=document.getElementById("dew").value;
        let price=v*26;
        document.getElementById("dewValue").innerHTML="Price for "+v+" dew is "+price;
    }
    if(drink=="up"){
        let v=document.getElementById("up").value;
        let price=v*24;
        document.getElementById("upValue").innerHTML="Price for "+v+" thumsup is "+price;
    }
    if(drink=="sprite"){
        let v=document.getElementById("sprite").value;
        let price=v*20;
        document.getElementById("spriteValue").innerHTML="Price for "+v+" sprite is "+price;
    }
    if(drink=="string"){
        let v=document.getElementById("string").value;
        let price=v*22;
        document.getElementById("stringValue").innerHTML="Price for "+v+" string is "+price;
    }
    if(drink=="redbull"){
        let v=document.getElementById("redbull").value;
        let price=v*30;
        document.getElementById("redbullValue").innerHTML="Price for "+v+" redbull is "+price;
    }
    if(drink=="canada"){
        let v=document.getElementById("canada").value;
        let price=v*29;
        document.getElementById("canadaValue").innerHTML="Price for "+v+" canada is "+price;
    }
    if(drink=="pepper"){
        let v=document.getElementById("pepper").value;
        let price=v*28;
        document.getElementById("pepperValue").innerHTML="Price for "+v+" Dr pepper is "+price;
    }
    if(drink=="lays1"){
        let v=document.getElementById("lays1").value;
        let price=v*20;
        document.getElementById("lays1Value").innerHTML="Price for "+v+" lays(Barbecue) is "+price;
    }
    if(drink=="lays2"){
        let v=document.getElementById("lays2").value;
        let price=v*15;
        document.getElementById("lays2Value").innerHTML="Price for "+v+" lays(Classic salted) is "+price;
    }
    if(drink=="lays3"){
        let v=document.getElementById("lays3").value;
        let price=v*10;
        document.getElementById("lays3Value").innerHTML="Price for "+v+"lays is "+price;
    }
    if(drink=="doritos"){
        let v=document.getElementById("doritos").value;
        let price=v*20;
        document.getElementById("doritosValue").innerHTML="Price for "+v+"dorites is "+price;
    }
    if(drink=="madangle"){
        alert("20 rs for one pack of Mad Angle");
        let v=document.getElementById("mad").value;
        let price=v*15;
        document.getElementById("madValue").innerHTML="Price for "+v+"Mad angle is "+price;
    }
}