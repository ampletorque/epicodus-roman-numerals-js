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

var romanizeLessThanFour = function(input) {
  var output = [];
  if (input < 4) {
    for (var index = 1; index <= input; index++) {
      output.push(n[1]);
    };
  } else if (input === (5-1)) {
    output.push(n[1]);
    output.push(n[5]);
  } else if (input === (5)) {
    output.push(n[5]);
  }
  return output.join("");
};

var romanize = function(input) {
  var output = [];
  var workingInput = input;
  for (counter = 1; counter <= Math.floor(input / i['M']); counter++) {
    output.push("M");
    workingInput -= i['M'];
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
