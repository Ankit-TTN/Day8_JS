areaOfCircle = () => {
    let radius = parseFloat(prompt("Enter radius"));
    if (!isNaN(radius)) {
        result = radius * radius * Math.PI;
        alert(result);
    } else {
        alert("Enter Numeric Value");
    }
}