function input_from_user(a, b, c){
    var a_term = parseFloat(document.getElementById(a).value);
    var b_term = parseFloat(document.getElementById(b).value);
    var c_term = parseFloat(document.getElementById(c).value);
    console.log(a_term);
    console.log(b_term);  
    console.log(c_term);
    temp1 = (b_term*b_term) - (4*a_term*c_term);
    temp2 = (-1*b_term) - Math.sqrt(temp1);
    temp3 = (-1*b_term) + Math.sqrt(temp1);
    temp4 = temp2/(2*a_term);
    temp5 = temp3/(2*a_term);
    document.getElementById("x_value_a").innerHTML = temp4
    document.getElementById("x_value_b").innerHTML = temp5
}