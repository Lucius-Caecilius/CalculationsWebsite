function input_from_user(a, b, c){
    var a_term = parseFloat(document.getElementById(a).value);
    var b_term = parseFloat(document.getElementById(b).value);
    var c_term = parseFloat(document.getElementById(c).value);
    inside_sqrt = (b_term*b_term) - (4*a_term*c_term);
    negative_possibility = (-1*b_term) - Math.sqrt(inside_sqrt);
    positive_possibility = (-1*b_term) + Math.sqrt(inside_sqrt);
    negative_possibility = negative_possibility/(2*a_term);
    positive_possibility = positive_possibility/(2*a_term);
    document.getElementById("x_value_a").innerHTML = "The x value is: " + negative_possibility
    document.getElementById("x_value_b").innerHTML = "Or the x value is: " + positive_possibility
}