Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN

//Number.parseFloat() and Number.parseInt() are similar to Number() but only convert strings, 
//and have slightly different parsing rules. For example, parseInt() doesn't recognize the decimal point,
//and parseFloat() doesn't recognize the 0x prefix.

//The Number.isInteger() static method determines whether the passed value is an integer.

function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10));
  // Expected output: "Fits!"
  
  console.log(fits(5, 11));
  // Expected output: "Does NOT fit!"
  