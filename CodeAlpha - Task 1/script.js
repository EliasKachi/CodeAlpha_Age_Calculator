let dateBox =document.getElementById("date");


dateBox.max = new Date().toISOString().split("T")[0];//making sure the user cannot put in a date that has not happened yet

function calculateAge(){
let birthDay = new Date(dateBox.value);

let d1= birthDay.getDate();
let m1 =birthDay.getMonth()+1;//need to add +1 because the month is stored from 0 to 11
let y1 = birthDay.getFullYear();

let now = new Date();//leaving this empty will make sure that the date taken will be today
let d2= now.getDate();
let m2 =now.getMonth()+1;
let y2 = now.getFullYear();

let d3,m3,y3;
 
y3=y2-y1;
if(m2>=m1){
    m3=m2-m1;//if one is born in a month earlier than today we simply substract the months 
}else{
    y3--;
    m3=12+m2-m1;//if their birthday has not come up yet we decrement the year and get the difference in months
}
if(d2>=d1){
    d3=d2-d1;
}else{
    m3--;
    d3=dayMonthFunc(m1,y1) + d2-d1;//same logic for years but we use a  function instead
}
if(m3<0){
    m3=11;
    y3--;
}
let displayBox = document.querySelector(".result").style.display = "block";
let result = document.querySelector("#actualageresult").innerHTML =`You are ${y3} years , ${m3} months and ${d3} days old`;

}
function dayMonthFunc(month,year){
    return new Date(year,month,0).getDate();//returns the day as 0 to make sure we can add it to the new date
}