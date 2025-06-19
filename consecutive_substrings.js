function consecutiveSubstrings(string) {
  // type your code here

  console.log(string.length)

  let wordArray = []

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      wordArray.push(string.slice(i, j))
    }
  }

  console.log(wordArray)
}

consecutiveSubstrings("hello")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


