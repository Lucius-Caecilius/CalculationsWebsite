function dropButton(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterContent() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

function standard_equation(t, b_1, b_2, id){
    var top, base_1, base_2;
    top = document.getElementById(t).value;
    base_1 = document.getElementById(b_1).value;
    base_2 = document.getElementById(b_2).value;
    console.log(top);
    console.log(base_1);
    console.log(base_2);
    if(top == ""){
        value_to_return = base_1*base_2;
        console.log(value_to_return);
        document.getElementById(id).innerHTML = "The unknown variable is: " + value_to_return;
    } 
    else if(base_1 == ""){
        value_to_return = top/base_2;
        console.log(value_to_return);
        document.getElementById(id).innerHTML = "The unknown variable is: " + value_to_return;
    } 
    else{
        value_to_return = top/base_1;
        console.log(value_to_return);
        document.getElementById(id).innerHTML = "The unknown variable is: " + value_to_return;
    }
}