$(".calculate").click(function(){
  let currentmonth = $(".currentmonth").val();
  let currentyear = $(".currentyear").val();
  let month = $(".month").val();
  let name = $(".name").val();
  let year = $(".year").val();
  let age = 2020 - currentyear;
  if (month >= currentmonth) {
    age = age - 1;
  }
  else {}
  if (name == "" || year > currentyear || month > 12 || year <= 0 || month <= 0) {
    $(".message").text("Looks like one of your inputs is wrong!");
  }
  else{  
    $(".message").text(name + " you are " + age + " years old.");
  }
});
