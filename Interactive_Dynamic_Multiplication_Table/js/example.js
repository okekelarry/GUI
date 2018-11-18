
function createTable()
{
    var s_row = document.getElementById('rows').value;
    var e_row = document.getElementById('cols').value;
    var s_col = document.getElementById('x').value;
    var e_col = document.getElementById('y').value;
    var theader = '<table border="1">\n';
    var tbody = '<tr><th></th>';
    var table = document.getElementById('t1');

    // console.log("num_rows", num_row);
    // console.log("num_cols", num_col);
    // console.log("start_row", start_row);
    // console.log("end_row",  end_row);

    // header
    for( var j=s_col; j<=e_col;j++)
    {
        tbody += '<th>'+ j + '</th>';
    }

    tbody += '</tr>';

    for( var i=s_row; i<=e_row;i++)
    {
      tbody+='<tr><th>' + i + '</th>';
        for( var j=s_col; j<=e_col;j++)
        {
            tbody += '<td>' +  i*j + '</td>';
        }
        tbody += '</tr>\n';
    }


    // table.innerHTML = theader + tbody + tfooter;
    document.getElementById('wrapper').innerHTML = theader + tbody;


}

function validateAllInputBoxes(ffevent)
{
   var inputs = document.getElementsByTagName('input');
   for(var i = 0; i < inputs.length; ++i)
      if(inputs[i].type == 'text')
         //@Satish, maybe below you wrote by mistake if(inputs[i].value = '') thus all input elements values get cleared out.
         if(inputs[i].value == '')
         {
            alert("form could not be sent one input text field is empty");
            stopEvent(ffevent);
         }
}
