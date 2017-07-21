function poByPayPriority(id) {
    //alert("ASASSAS");
    //$("#loader_div").show();
    

    $.ajax({

        url: '/Report/purchaseReportByPayPriority/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {

            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            
        },
        error: function (response) {

        }


    })
}

function poByPayStatus(id) {
    $("#loader_div").show();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/purchaseReportByPayStatus/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
        },
        error: function (response) {

        }


    })


}

function poByNumber(id) {
    $("#loader_div").show();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/purchaseReportByNumber/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
        },
        error: function (response) {

        }


    })

}

function poByDate() {
    $("#loader_div").show();
    $("#date_click_div").hide();

    var to = document.getElementById('to_date').value;
    var from = document.getElementById('from_date').value;

    $.ajax({

        url: '/Report/purchaseReportByDate/',
        data: { fromDate: from, toDate: to },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
        },
        error: function (response) {

        }


    })

}