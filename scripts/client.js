console.log('jq');

$(document).ready(onReady);

function onReady(){
    console.log('js');
    
    $('#submitButton').on('click', addYourEmployee);
    $('#employeeFormOut').on('click', '.deleteItemListing', removeInput);
    
    // end on ready

}

let salaryTable = []
// declare new empty array varaible

function addYourEmployee(employeeInfo) {
console.log('woo');

    let yourEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        iDtag: $('#idTagIn').val(),
        title: $('#titleIn').val(),
        annualWages: $('#annualWageIn').val(),
        // add another property here, htmlTag>>>&&&!1
    }
    // new item created here
    
    salaryTable.push(yourEmployee);
    // push newly created item into array

    salaryInfoOut();
    
    $('.deleteItem').val('');
    console.log('hi');
    
}

function salaryInfoOut(salaryInfo) {
    // declare salary info input logic    
   
    let totalAnnualWages = 0;
    let monthlyWages = 0;

    // static variables here

    let el = $('#employeeFormOut');

    el.empty();

    for (let i = 0; i < salaryTable.length; i++) {

        el.append(

            `<tr>

            <th> ${salaryTable[i].iDtag} </th>
            <th> ${salaryTable[i].firstName} </th>
            <th> ${salaryTable[i].lastName} </th>
            <th> ${salaryTable[i].title} </th>
            <th> ${salaryTable[i].annualWages} </th>
        <th><button class="deleteItemListing"> Delete </button></th>

        </tr>`
        )

        totalAnnualWages += Number(salaryTable[i].annualWages);
    }
    // end of for loop cycle

    monthlyWages = Math.ceil(totalAnnualWages / 12);
// this calculator rounds up because hard working employees deserve it

$('.monthlyTotal').html(monthlyWages);
}

function removeInput(click) {
    $(this).closest('tr').remove();
}
