const headerPage0= "Loyalty Calculator";
const headerPage1= "Annual Projection";
const headerPage2= "Summary";

calculate();

// Add event listeners for all input fields
for (let input of document.querySelectorAll("input")) {
    input.addEventListener("change", calculate);
}


function calculate() {
    // Retrieve input values
    var customerBase = 1122;
    var anualSales = document.getElementById("input1").value;
    var anualCustomers = document.getElementById("input2").value;
    var avgTicketSize = document.getElementById("input3").value;
    var avgCustSpend = anualSales / anualCustomers;
    var baseConverts = 0.2 / 100;
    var spendingIncrease = 27 / 100;
    var loyalCustConversion = 20 / 100;
    var loyaltyCost = 1 / 100;
    var membership = 50;
    var viewValue = 1.5;
    var membershipYearly = 600; //yearly amount input 11

    let input4 = anualCustomers * baseConverts * 12;
    document.getElementById("input4").innerHTML = Math.trunc(input4);

    let input5 = anualCustomers * avgCustSpend * spendingIncrease * loyalCustConversion;
    document.getElementById("input5").innerHTML = Math.trunc(input5);

    let input6 = avgTicketSize * input4;
    document.getElementById("input6").innerHTML = Math.trunc(input6);

    let input7 = input5 + input6;
    document.getElementById("input7").innerHTML = Math.trunc(input7);

    let input8 = viewValue * customerBase
    document.getElementById("input8").innerHTML = Math.trunc(input8);

    let input9 = input7 + input8
    document.getElementById("input9").innerHTML = Math.trunc(input9);

    let input10 = loyaltyCost * loyalCustConversion * anualCustomers * avgCustSpend * (1 + spendingIncrease)
    document.getElementById("input10").innerHTML = Math.trunc(input10);

    let input12 = input10 + membershipYearly;
    document.getElementById("input12").innerHTML = Math.trunc(input12);

    document.getElementById("input13").innerHTML = Math.trunc((((parseInt(input9) - parseInt(input12)) / parseInt(input12)) * 100)/100);
}

var pagePosition = 0
var page0 = document.getElementById("page0")
var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")
var toolboxHeader = document.getElementById("toolboxHeader")
var leftArrow = document.getElementById("leftArrow")
var rightArrow = document.getElementById("rightArrow")


//clicking the right Arrow
async function right() {
     if (pagePosition == 2) {
        return;
    }
    pagePosition++;
    if (pagePosition == 1) {
        await showBothArrow();
        await animate__left(page0, page1, page2, toolboxHeader, headerPage1)
        return;
    }
    await animate__left(page1, page2, page0, toolboxHeader, headerPage2)
    await showLeftArrow();
    return;
}

//clicking the left Arrow
async function left() {
    if (pagePosition == 0) {
        return;
    }
    pagePosition--;
    if (pagePosition == 1) {
        await showBothArrow();
        await animate__Right(page2, page1, page0, toolboxHeader, headerPage1);

        return;
    }
    await animate__Right(page1, page0, page2, toolboxHeader, headerPage0);
    await showRightArrow();
    return;
}


async function animate__left(leaving, coming, other, title, titleText) {
    await animate__bounceOutLeft(leaving);
    await animate__bounceOutLeft(toolboxHeader);
    await delay(500).then(() => {
        coming.style.display = 'block'
        title.innerHTML = titleText;
        animate__bounceInRight(coming);
        animate__bounceInRight(title);
    },

    );
    leaving.style.display = 'none'
    other.style.display = 'none'
}

async function animate__Right(leaving, coming, other, title, titleText) {
    await animate__bounceOutRight(leaving);
    await animate__bounceOutRight(toolboxHeader);
    await delay(500).then(() => {
        coming.style.display = 'block'
        title.innerHTML = titleText;
        animate__bounceInLeft(coming);
        animate__bounceInLeft(title);
    },

    );
    leaving.style.display = 'none'
    other.style.display = 'none'
}

// Helper Functions Below
async function  showLeftArrow(){
    rightArrow.classList.value = 'col-4'
    leftArrow.classList.value = 'col-4 arrowLeft'
}
async function showRightArrow(){
    leftArrow.classList.value = 'col-4'
    rightArrow.classList.value = 'col-4 arrowRight'
}
async function showBothArrow(){
    leftArrow.classList.value = 'col-4 arrowLeft'
    rightArrow.classList.value = 'col-4 arrowRight'
}
async function animate__bounceInLeft(item) {
    item.classList.value = 'b2b-page-section3-text animate__animated animate__bounceInLeft'
}

async function animate__bounceInRight(item) {
    item.classList.value = 'b2b-page-section3-text animate__animated animate__bounceInRight'
}

async function animate__bounceOutLeft(item) {
    item.classList.value = 'b2b-page-section3-text animate__animated animate__bounceOutLeft'
}

async function animate__bounceOutRight(item) {
    item.classList.value = 'b2b-page-section3-text animate__animated animate__bounceOutRight'
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

