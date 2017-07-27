function findByUser() {
    $("#loader_div").show();

    $("#customer_summary").hide();
    $("#date_click_div").hide();
    var user = document.getElementById('User_ID').value;

    $.ajax({

        url: '/Report/SaleReportByUser/',
        data: { str: user },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
        },
        error: function (response) {

        }

    })
}



function findByInvoice(id) {
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByInvoice/',
        data: { invoiceId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
        },
        error: function (response) {

        }

    })
}

function findByDocType(id) {
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByDocType/',
        data: { docTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("DAta" + data);
            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
        },
        error: function (response) {
            
            alert(response);
        }

    })
}

function findByPayType(id) {
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByPayType/',
        data: { payTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
        },
        error: function (response) {

        }

    })
}

function Delete_Sale(ID) {
    $("#loader_div").hide();
    //alert("Id" + ID);

    $.ajax({

        url: "/Sale/Delete_Sale/",
        data: { id: ID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");

            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();



            //$("#hhh").show('fast');

            //$("#asa").show();


        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}

function showToDate() {
    var from = document.getElementById("from_date").value;

    if (from == "") {
    }

    else {
        document.getElementById("to_date").removeAttribute('disabled');
    }
}

$(document).ready(function () {
    $('#table_on_dates').dataTable();
    //$('#table_on_dates').DataTable({
    //    "ajax": '../ajax/findByUser/SaleReportPartial.cshtml'
    //});
});

function findByDate() {
    
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    //alert("dsfdsdfvdfgdfgdfsgdfhbgefagdsgrgfsgsdggbwdgdsagfgfgdfg");
    var to = document.getElementById('to_date').value;
    var from = document.getElementById('from_date').value;
    $.ajax({

        url: '/Report/SaleReportByDate/',
        data: { dateFrom: from, dateTo: to },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
        },
        error: function (response) {

        }

    })
}
