console.log('jq');

$(document).ready(onReady);

function onReady(){
    console.log('js');
    
    $('#employeeFormOut').on('click', addYourEmployee);
    $('#submitButton').on('click', '.delete', removeInput);
    
    // end on ready

}

let salaryTable = []
// declare new empty array varaible

function addYourEmployee(employeeInfo) {

    let yourEmployee = {
        firstName: $('firstNameIn').val(),
        lastName: $('lastNameIn').val(),
        iDtag: $('idTagIn').val(),
        title: $('titleIn'),
        annualWage: $('AnnualWageIn').val()
        // add another property here, htmlTag>>>&&&!1
    }
    // new item created here
    
    salaryTable.push(yourEmployee);
    // push newly created item into array

    salaryInfoOut();
    
    $('.deleteItem').val('');
}

function salaryInfoOut(salaryInfo) {
    // declare salary info input logic    
   
    let annualWages = 0;
    let monthlyWages = 0;

    // static variables here

    let el = $('employeeFormOut');

    el.empty();

    for (let i = 0; i < salaryTable.length; i++) {

        el.append(

            `<tr>

            <th> ${salaryTable[i.iDtag]} </th>
            <th> ${salaryTable[i.firstName]} </th>
            <th> ${salaryTable[i.lastName]} </th>
            <th> ${salaryTable[i.title]} </th>
            <th> ${salaryTable[i.annualWages]} </th>
        <th><button class="delete"> delete </button></th>

        </tr>`
        )

        annualWages += Number(salaryTable[i].annualWages);
    }
    monthlyWages = Math.ceil(annualWages / 12);
// this calculator rounds up because hard working employees deserve it

$('#monthlyTotal').html(monthlyWages);
}

function removeInput(click) {
    $(this).closest('tr').remove();
}
