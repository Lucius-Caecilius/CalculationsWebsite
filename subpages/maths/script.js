function pythagoras(a, b, hyp){
    var side_1 = parseFloat(document.getElementById(a).value);
    var side_2 = parseFloat(document.getElementById(b).value);
    var hypotenuse_status = document.getElementById(hyp).checked;
    if(hypotenuse_status){
        hyp_sqrd = Math.pow(side_1, 2) + Math.pow(side_2, 2)
        hypotenuse = Math.sqrt(hyp_sqrd)
        document.getElementById("unknown_side").innerHTML = "The hypotenuse is: " + hypotenuse
    } else{
        if(side_1 > side_2){
            unknown_side_sqrd = Math.pow(side_1, 2) - Math.pow(side_2, 2)
            unknown_side = Math.sqrt(unknown_side_sqrd)
        } else{
            unknown_side_sqrd = Math.pow(side_2, 2) - Math.pow(side_1, 2)
            unknown_side = Math.sqrt(unknown_side_sqrd)
        }
        document.getElementById("unknown_side").innerHTML = "The unknown side is: " + unknown_side
    }
}

function quadratic_formula(a, b, c){
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