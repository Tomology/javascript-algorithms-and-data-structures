/* 
String Compression: 
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

function stringCompression(str) {
  let count = 0;
  let compressed = "";
  let currLetter = str[0];

  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] === currLetter) {
      count++;
    } else {
      compressed += currLetter;
      compressed += count;
      currLetter = str[i];
      count = 1;
    }
  }
  return compressed.length < str.length ? compressed : str;
}

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression(""));
console.log(stringCompression("hello"));
console.log(stringCompression("helllllllllllllllllo"));
