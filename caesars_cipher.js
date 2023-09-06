var charArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

function getCharPos(char) {
  for (var i=0; i<charArray.length; i++) {
    if (charArray[i] === char)
      return i
  }
  return ""
}

function rot13(str) {
  var decrypted = [];
  var strLower = str.toLowerCase();

  for (var i=0; i<strLower.length; i++) {
    var char = str[i].toLowerCase()
    var charPos = getCharPos(char)

    if (/[a-z]/.test(char)) {
      if ((charPos-13) > 0)
        decrypted.push(charArray[charPos-13])
      else if ((charPos-13) < 0)
        decrypted.push(charArray[(charPos-13)+26])
      else if ((charPos-13) === 0)
        decrypted.push('a')
    } else {
      decrypted.push(char)
    }
  }

  console.log(decrypted.toString().replace(/,/g, ''))
  return decrypted.toString().replace(/,/g, '').toUpperCase()
}

rot13("SERR CVMMN!")
