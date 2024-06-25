function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["pnum"].value;
    
    
    if (x == "") {
        alert("Please Complete the Fields");
        return false;
    }
    if (y == "") {
        alert("Please Complete the Fields");
        return false;
    }
    if (z == "") {
        alert("Please Complete the Fields");
        return false;
    }

}