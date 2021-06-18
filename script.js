function compute()
{
    var principal = document.getElementById("principal");
    if(principal.value<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    else{
        principal = principal.value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = (principal * years * rate) /100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <mark><b>"+principal+"</b></mark>, <br>at an interest rate of <mark><b>"+rate+"%</b></mark>. <br>You will receive an amount of <mark><b>"+interest+"</b></mark>, <br>in the year <mark><b>"+year+"</b></mark>.";    
    }

}
   
function updateRate(){
    var rateval = document.getElementById("rate").value;
    console.log(rateval)
    document.getElementById("rate_val").innerText = rateval;

}
