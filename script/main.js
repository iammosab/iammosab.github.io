

$.ajax({
    url: "https://script.google.com/macros/s/AKfycbwrn62-lhHReM5eZxnBDfThO5DPmb0mllq_XSQP0TRA3eI-cWnR/exec", 
    type:"POST",
    data:{action:"readQuotes"},
    success: function(result){
        result.forEach(element => {
            console.log(element);
        });
  }});