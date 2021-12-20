// An Argument is the actual value in a function - Paramater is a Placeholder for the value. 
// Console.log is used to confirm if the function is working.  Return - returns values from only the called function.
// Function will return the Value, and only the value.  

//Number 2 Calculate the cube

function calculateCube(num){
    return (num**3)
}
console.log(calculateCube(5))

// Number 3 is a Vowel

function isAVowel(letter){
  let vowels =["a", "e", "i", "o", "u"]
      for (let i = 0; i < vowel.length; i++){
          if (letter === vowel[i]) {
             return true
        }
    }
}
console.log(isAvowel("a"));

#4 - Function two length 

function getTwoLengths(word1,word2){
    let lengthOne= word1.length
    let lengthTwo= word2.length
    newArray= [lengthOne, lengthTwo]
    return(newArray)
}
console.log(getTwoLengths("Hank","hippopalous"))
