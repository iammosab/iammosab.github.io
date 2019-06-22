



  $(document).ready(function(){
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwrn62-lhHReM5eZxnBDfThO5DPmb0mllq_XSQP0TRA3eI-cWnR/exec", 
        type:"POST",
        data:{action:"readQuotes"},
        success: function(result){
            var text = "";
            result.forEach(element => {
                text +="<tr>";
                text +="<td>"+element.id+"</td>";
                text +="<td>"+element.quote+"</td>";
                text +="<td>"+element.author+"</td>";
                text +="<td>"+element.categorie+"</td>";
                text +="</tr>";
            });
            $("#tbody").html(text);
      }});
  });