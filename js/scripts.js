var i = new Object();
i['I'] = 1;
i['V'] = 5;
i['X'] = 10;
i['L'] = 50;
i['C'] = 100;
i['D'] = 500;
i['M'] = 1000;

var romanSub = function(numberIn, romanNumeral, romanNumeral2) {
var work = numberIn;
var out = "";

for (var count = 1; (count <= Math.ceil(numberIn / i[romanNumeral])); count++) {

// console.log(numberIn, romanNumeral, romanNumeral2);

  if (count <= Math.floor(numberIn / i[romanNumeral])) {
    out = out + romanNumeral;
    work -= i[romanNumeral];
  } else if ( (numberIn % i[romanNumeral]) >= i[romanNumeral]-i[romanNumeral2]) {
    out = out + romanNumeral2 + romanNumeral;
    work -= (i[romanNumeral] - i[romanNumeral2]);
  }
};

// console.log("work: ", work, "out: ", out[0]);
return [work, out];

};

var romanize = function(input) {
  var output = [];
  var workingInput = input;

  // for (var counter = 1; (counter <= Math.ceil(input / i['M'])); counter++) {
  //   if (counter <= Math.floor(input / i['M'])) {
  //     output.push("M");
  //     workingInput -= i['M'];
  //   } else if ( (input % 1000) >= 900) {
  //     output.push("CM");
  //     workingInput -= 900;
  //   };
  // }
  // input = workingInput;

  mreturn = romanSub(input, "M", "C");
  workingInput = mreturn[0];
  input = workingInput;
  // console.log("in: ", mreturn[0], "out: ", mreturn[1]);
  output.push(mreturn[1]);
  // console.log("output: ", output[0], output[1]);

  // for (var counter = 1; counter <= Math.ceil(input / i['D']); counter++) {
  //   if (counter <= Math.floor(input / i['D'])) {
  //   output.push("D");
  //   workingInput -= i['D'];
  //   } else if ( (input % 500) >= 400 ) {
  //     output.push("CD");
  //     workingInput -= 400;
  //   };
  // }
  // input = workingInput;

  mreturn = romanSub(input, "D", "C");
  workingInput = mreturn[0];
  input = workingInput;
  output.push(mreturn[1]);

  // for (counter = 1; counter <= Math.ceil(input / i['C']); counter++) {
  //   if (counter <= Math.floor(input / i['C'])) {
  //     output.push("C");
  //     workingInput -= i['C'];
  //   } else if ( (input % 100) >= 90 ) {
  //     output.push("XC");
  //     workingInput -= 90;
  //   };
  // }
  // input = workingInput;

mreturn = romanSub(input, "C", "X");
workingInput = mreturn[0];
input = workingInput;
output.push(mreturn[1]);


// for (counter = 1; counter <= Math.ceil(input / i['L']); counter++) {
//   if (counter <= Math.floor(input / i['L'])) {
//     output.push("L");
//     workingInput -= i['L'];
//   } else if ( (input % 50) >= 40 ) {
//     output.push("XL");
//     workingInput -= 40;
//   };
// }
// input = workingInput;

mreturn = romanSub(input, "L", "X");
workingInput = mreturn[0];
input = workingInput;
output.push(mreturn[1]);

for (counter = 1; counter <= Math.ceil(input / i['X']); counter++) {
  if (counter <= Math.floor(input / i['X'])) {
    output.push("X");
    workingInput -= i['X'];
  } else if ( (input % 10) >= 9 ) {
    output.push("IX");
    workingInput -= 9;
  }
}
input = workingInput;

// mreturn = romanSub(input, "X", "I");
// workingInput = mreturn[0];
// intput = workingInput;
// output.push(mreturn[1]);

for (counter = 1; counter <= Math.ceil(input / i['V']); counter++) {
  if (counter <= Math.floor(input / i['V'])) {
    output.push("V");
    workingInput -= i['V'];
  } else if ( (input % 5) >= 4 ) {
    output.push("IV");
    workingInput -= 4;
  }
}
input = workingInput;

// mreturn = romanSub(input, "V", "I");
// workingInput = mreturn[0];
// intput = workingInput;
// output.push(mreturn[1]);

for (counter = 1; counter <= Math.ceil(input / i['I']); counter++) {
  if (counter <= Math.floor(input / i['I'])) {
    output.push("I");
    workingInput -= i['I'];
  }
}
input = workingInput;

// mreturn = romanSub(input, "I", "I");
// workingInput = mreturn[0];
// intput = workingInput;
// output.push(mreturn[1]);

  return output.join("");
};


$(document).ready(function() {
  $("form#roman-numeral-form").submit(function(event) {
    $(".resultreplace").text(romanize($("input#number").val()));
    $("#resultdiv").show();
    event.preventDefault();
  });
});
