// | :::|| ::|:| ::||: :|::| :|:|: :|:|: | 12345
function change() {
    return $("#barTozip").is(":checked");
}

function focus() {
    $('#input_code').focus(function () {
        $('#errorMessage').text('');
        $('#result').text('');
    });
}

function check(input) {
    return (input!=='');
}

function sendInfo(url,input) {
    $.get(url, {code: input})
        .done(function (data) {
            sortData(data, input);

        })
        .fail(function (error) {
            $('#errorMessage').text(data);
        });
}

function sortData(data, input) {
    if (data !== 'please check your input!') {
        $('#result').text(data);
        setTable(input, data);
    }
    else {
        $('#errorMessage').text(data);
    }
}


function setTable(input, data) {

    $('#historyTable').after('<tr><td>'+input+'</td><td>'+data+'</td></tr>');
}


$(function () {
    focus();
    $("#submit").click(function () {
        let input = $('#input_code').val();
         if (!check(input)){
             $('#errorMessage').text('input is empty,please input again!');
         }
        else {
             if (change()) {
                 sendInfo('/getZip',input);
             }
            else {
                 sendInfo('/getBar', input);
             }
        }
    });
});