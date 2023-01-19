const date=document.querySelector("#Date");
const luckyNumber=document.querySelector("#Lucky-number");
const checkbutton=document.querySelector("#check-button");
const OutputBox=document.querySelector("#Output-Box");

checkbutton.addEventListener("click",function OnCallCheck(){
    var dob=ConvertDateToNumber(date.value);
    if(dob&&luckyNumber.value)
    checkLuckyNumber(dob);
    else
    OutputBox.innerText="Enter both the values";
});

function ConvertDateToNumber(dob){
    dob=dob.replaceAll("-","");
    var sum=0;

    for(var i=0;i<dob.length;i++)
    sum=sum+Number(dob[i]);

    return sum;
}

function checkLuckyNumber(SumOfDate){
    if(SumOfDate%luckyNumber.value===0)
    OutputBox.innerText="You Are Very lucky.Your Birthday is Lucky Number";
    else
    OutputBox.innerText="Change your Lucky-Number You are Unlucky";
}