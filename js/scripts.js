var n = new Object();
n[1] = 'I';
n[5] = 'V';
n[10] = 'X';
n[50] = 'L';
n[100] = 'C';
n[500] = 'D';
n[1000] = 'M';

var i = new Object();
i['I'] = 1;
i['V'] = 5;
i['X'] = 10;
i['L'] = 50;
i['C'] = 100;
i['D'] = 500;
i['M'] = 1000;

// for (var i in n) {
// //  if (n.someFunction(i)) {
//     alert('key is: ' + i + ', value is: ' + n[i]);
// //  }
// }

// var romanizeLessThanFour = function(input) {
//   var output = [];
//   if (input < 4) {
//     for (var index = 1; index <= input; index++) {
//       output.push(n[1]);
//     };
//   } else if (input === (5-1)) {
//     output.push(n[1]);
//     output.push(n[5]);
//   } else if (input === (5)) {
//     output.push(n[5]);
//   }
//   return output.join("");
// };

var romanize = function(input) {
  var output = [];
  var workingInput = input;

  for (var counter = 1; (counter <= Math.ceil(input / i['M'])); counter++) {
    if (counter <= Math.floor(input / i['M'])) {
      output.push("M");
      workingInput -= i['M'];
    } else if ( (input % 1000) >= 900) {
      output.push("CM");
      workingInput -= 900;
    };
  }
  input = workingInput;

  for (counter = 1; counter <= Math.ceil(input / i['D']); counter++) {
    if (counter <= Math.floor(input / i['D'])) {
    output.push("D");
    workingInput -= i['D'];
    } else if ( (input % 500) >= 400 ) {
      output.push("CD");
      workingInput -= 400;
    };
  }
  input = workingInput;
console.log("after M before C:", input);
  for (counter = 1; counter <= Math.ceil(input / i['C']); counter++) {
    if (counter <= Math.floor(input / i['C'])) {
      output.push("C");
      workingInput -=['C'];
    } else if ( (input % 100) >= 90 ) {
      output.push("XC");
      workingInput -= 90;
    };
  }
  input = workingInput;
console.log("after C before L:", input);
for (counter = 1; counter <= Math.ceil(input / i['L']); counter++) {
  if (counter <= Math.floor(input / i['L'])) {
    output.push("L");
    workingInput -= i['L'];
  } else if ( (input % 50) >= 40 ) {
    output.push("XL");
    workingInput -= 40;
  };
}
input = workingInput;
console.log("after L before X: ", input);
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

for (counter = 1; counter <= Math.ceil(input / i['I']); counter++) {
  if (counter <= Math.floor(input / i['I'])) {
    output.push("I");
    workingInput -= i['I'];
  }
}

input = workingInput;

  return output.join("");
};

// var countUpBy = function(input) {
//   var number = input[1];
//   var multiplier = input[0];
//   var count = 1
//   var output = []
//   do {
//     output.push(count * multiplier);
//     count++;
//   } while (count * multiplier <= number);
// return output;
// };
//
// $(document).ready(function() {
//   $("form#count-up-form").submit(function(event) {
//
//     var counter = parseInt($("input#counter").val());
//     var limit = parseInt($("input#limit").val());
//
//     results = countUpBy([counter, limit]);
//
//     // adds extra comma to output
//     // results.forEach(function(result) {
//     //   $(".resultreplace").append(result, ", ");
//     // });
//
//     for (index = 1; index * counter <= limit; index++) {
//
//       if (index !== 1) {
//         $(".resultreplace").append(", ");
//       }
//
//       $(".resultreplace").append(results[index-1]);
//      }
//
//     $("#resultdiv").show();
//     event.preventDefault();
//   });
// });
