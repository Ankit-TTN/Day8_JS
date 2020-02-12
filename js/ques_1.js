simpleIntrest = () => {
    let inputVal = prompt("Enter Amount, Rate, No of Years (Comma Separated)");
    let values = inputVal.split(/,/).map(x => { return parseFloat(x); });
    console.log(values);
    let ans = values.reduce((res, val) => { return val * res; }) / 100;
    alert(ans);
}