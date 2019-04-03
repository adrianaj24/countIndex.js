function countIndex(string) {
    var newString = string.split(" ").join("").toLowerCase();

    var count = {};

    //   var indexPosition = 0;

    for (var i = 0; i < newString.length; i++) {
        var currentLetter = newString.charAt(i)
        // count[currentLetter] = [];
    
        // console.log(count);
        if (currentLetter in count) { //false
            // console.log(currentLetter)
            count[currentLetter] = count[currentLetter] + ', ' + i.toString();
            //   count[currenLetter] = [i]
            // console.log(count[currentLetter]);
        } else {
            count[currentLetter] = i.toString();
        }
    }
    console.log(count)
    }

   

//     if (currentIndex === indexPosition) {
      
//       return count;
//     }
//     return count++
//   }
// }
console.log(countIndex("Lighthouse in the house"));