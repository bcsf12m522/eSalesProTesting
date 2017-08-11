function customer_summary_list(id, type_id) {


    var name = document.getElementById('customer_value_1' + id);
    var phone = document.getElementById('customer_value_2' + id);
    var address = document.getElementById('customer_value_3' + id);
    var email = document.getElementById('customer_value_4' + id);
    var notes = document.getElementById('customer_value_5' + id);
    var credit_limit = document.getElementById('customer_value_6' + id);
    var balance = document.getElementById('customer_value_7' + id);



    var type1 = type_id;


    var a = name.innerHTML;
    var b = phone.innerHTML;
    var c = address.innerHTML;
    var d = email.innerHTML;
    var e = notes.innerHTML;
    var f = credit_limit.innerHTML;
    var g = balance.innerHTML;


    $("#customer_id").val(id);

    $("#c_name").html(a);
    $("#c_phone").html(b);
    $("#c_address").html(c);
    $("#c_email").html(d);
    $("#c_notes").html(e);
    $("#c_credit_limit").html(f);
    $("#c_balance").html(g);



    if (type1 == 1) {
        $("#c_type").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#c_type").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#c_type").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#c_type").text("Other Customer");
    }

    $("#ExistingModal").hide('slow');
    customer_invoice_list(id);
    customer_item_sale_list(id);
    $("#customer_summary").show();
    $("#customer_table_div").hide();
}

function customer_invoice_list(id) {
    $("#PleaseWait").addClass('showDiv');
    var customerID = id;
    //alert(customerID);

    $.ajax({

        url: "/Customer/Customer_Invoices_List/",
        data: { id: customerID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");
            document.getElementById("invoice_by_customer_partial_view").innerHTML = data;
            $("#PleaseWait").removeClass('showDiv');
            $("#PleaseWait").addClass('hideDiv');
            $('#customer_invoices_table').dataTable();
        },
        error: function (response) {
            alert("Error" + response);
        }

    })
}

function customer_item_sale_list(id) {
    $("#PleaseWait").addClass('showDiv');
    var customerID = id;
    //alert("addsd "+customerID);

    $.ajax({
        url: "/Customer/Customer_Item_Sale_List/",
        data: { id: customerID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");
            document.getElementById("hhh").innerHTML = data;
            $("#PleaseWait").removeClass('showDiv');
            $("#PleaseWait").addClass('hideDiv');
            $('#item_history_table').dataTable();
        },
        error: function (response) {
            alert("Error" + response);
        }

    })
}

function show_customer_summary() {
    $("#customer_summary").removeClass("none");
    $("#customer_summary").addClass("showDiv");


    //-------------FOR SALES REPORT---------------

    $("#date_click_div").hide();

    //-------------FOR CREDIT SALES REPORT---------------

    $("#table_on_dates").hide();

    $("#table_div_Load").hide();

    
    //$("#customer_table_div").addClass("none");
}



$(document).ready(function () {
    $('#customer_summary_table').dataTable();
});


function double_click_edit_sale(id) {
    //alert(id);

    var url = $("#RedirectTo").val();
    location.href = url + "/" + id;
}

//jQuery.noConflict();
//$("#ExistingModal").hide();

