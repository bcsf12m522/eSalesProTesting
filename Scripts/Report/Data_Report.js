function data_report_table() {
    $('#data_report_table_div').show();
}

function Transaction_No_Checkboxes() {

    if (document.getElementById("transaction_no_checkbox").checked) {
        $('.Transaction_no_tr').show();
    }
    else {
        $('.Transaction_no_tr').hide();
    }
}

function Transaction_Type_Checkboxes() {

    if (document.getElementById("trans_type_checkbox").checked) {
        $('.Trans_type_tr').show();
    }
    else {
        $('.Trans_type_tr').hide();
    }
}

function Buyer_Name_Checkboxes() {

    if (document.getElementById("buyer_name_checkbox").checked) {
        $('.Name_tr').show();
    }
    else {
        $('.Name_tr').hide();
    }
}

function Phone_Checkboxes() {

    if (document.getElementById("phone_checkbox").checked) {
        $('.Phone_tr').show();
    }
    else {
        $('.Phone_tr').hide();
    }
}

function Email_Checkboxes() {

    if (document.getElementById("email_checkbox").checked) {
        $('.Email_tr').show();
    }
    else {
        $('.Email_tr').hide();
    }
}

function Address_Checkboxes() {

    if (document.getElementById("address_checkbox").checked) {
        $('.Address_tr').show();
    }
    else {
        $('.Address_tr').hide();
    }
}

function SKU_Checkboxes() {

    if (document.getElementById("sku_checkbox").checked) {
        $('.SKU_tr').show();
    }
    else {
        $('.SKU_tr').hide();
    }
}

function QTY_Checkboxes() {

    if (document.getElementById("qty_checkbox").checked) {
        $('.QTY_tr').show();
    }
    else {
        $('.QTY_tr').hide();
    }
}

function Prices_Checkboxes() {

    if (document.getElementById("price_checkbox").checked) {
        $('.Price_tr').show();
    }
    else {
        $('.Price_tr').hide();
    }
}

function Dates_Checkboxes() {

    if (document.getElementById("date_checkbox").checked) {
        $('.Sale_date_tr').show();
    }
    else {
        $('.Sale_date_tr').hide();
    }
}

function Payment_Status_Checkboxes() {

    if (document.getElementById("payment_status_checkbox").checked) {
        $('.Status_tr').show();
    }
    else {
        $('.Status_tr').hide();
    }
}



    $(document).ready(function () {
        $('#data_report_table').dataTable();
    });

   
    function findByDate() {

        alert("dsfdsdfvdfgdfgdfsgdfhbgefagdsgrgfsgsdggbwdgdsagfgfgdfg");
        var to = document.getElementById('to_date').value;
        var from = document.getElementById('from_date').value;
        $.ajax({

            url: '/Report/DataReportByDate/',
            data: { dateFrom: from, dateTo: to },
            type: 'Get',
            cache: false,
            success: function (data) {
                document.getElementById('updatedDiv').innerHTML = data;
            },
            error: function (response) {

            }

        })
    }

    function findBySKU() {
        $("#data_report_table_div").show();
        var sku_input = document.getElementById('SKU').value;
        //alert(sku_input);

        $.ajax({

            url: '/Report/DataReportBySKU/',
            data: { str: sku_input },
            type: 'Get',
            cache: false,
            success: function (data) {

                document.getElementById('updatedDiv').innerHTML = data;
            },
            error: function (response) {

            }

        })
    }

    function findByDocType(id) {
        //alert(id);
        $("#data_report_table_div").show();

        $.ajax({

            url: '/Report/DataReportByDocType/',
            data: { docTypeId: id },
            type: 'Get',
            cache: false,
            success: function (data) {
                document.getElementById('updatedDiv').innerHTML = data;
            },
            error: function (response) {

            }

        })
    }

    function findByPayType(id) {
        $("#data_report_table_div").show();

        $.ajax({

            url: '/Report/DataReportByPayType/',
            data: { payTypeId: id },
            type: 'Get',
            cache: false,
            success: function (data) {
                document.getElementById('updatedDiv').innerHTML = data;
            },
            error: function (response) {

            }

        })
    }