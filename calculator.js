

const YearlySpend = document.getElementById("Yearly_Spend");
const PreviousLoan = document.getElementById("Previous_Loan");
const Balance = document.getElementById("Balance_Fd");
const YearlyIncome = document.getElementById("Yearly_Income");



const TotalSpend = document.querySelector(".Total_Spend");
const TotalEarn = document.querySelector(".Total_Earn");
const RiskRatio = document.querySelector(".Risk_Ratio");



const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function(){
   
    TSpend = +(YearlySpend.value) + +(PreviousLoan.value);
    console.log(TSpend);
  
    TEarn = +(Balance.value) + +(YearlyIncome.value);
    Rratio = +(TSpend)/+(TEarn);
    console.log(Rratio);
    console.log(TEarn);



    

    

    TotalSpend.innerHTML = Math.floor(TSpend);
    // console.log(spending);
    TotalEarn.innerHTML = Math.floor(TEarn);
    RiskRatio.innerHTML = Math.floor(Rratio);


  



       //Loanchart
        let xValues = ["Total Spend", "Total Earn"];
        let yValues = [TSpend, TEarn];

        let barColors = ["#961251", "#000000"];

        new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });
  


    


    /*amount = loanAmount.value;
    tenure = (loanTenure.value)*12; 
    rate = (loanRate.value)100;

    
    //console.log(emi);
    total = emi * tenure; // total amount to be paid including interest
    interest = total - amount // interest = total amount - principle amount
   // console.log(total);
    //console.log(interest);

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);


    //Loanchart
    let xValues = ["Principle", "Interest"];
    let yValues = [amount, Math.floor(interest)];

    let barColors = ["#961251", "#000000"];

    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });*/


});
