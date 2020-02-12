palindrome = () => {
    let string = prompt("Enter String");
    let revSting = string.split('').reverse().join('');
    console.log(string, revSting);
    result = revSting === string ? "Palindrome" : "Not Palindrome";
    alert(result);
}