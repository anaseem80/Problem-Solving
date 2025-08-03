/*

Introduction
You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

*/

/*

Cases

- Phone number template starts with + -> then I will check the length if more than digits will be ignored
- Phone number not starts + -> check length and replace it with the number

81237068908090
+# ### ### ## ##
*/

function formatNumber(number, template) {
  const digits = number.toString().split('');
  const placeholders = (template.match(/#/g) || []).length;
  if (digits.length < placeholders) {
    return "Invalid phone number";
  }

  let result = '';
  let digitIndex = 0;

  for (let char of template) {
    if (char === '#') {
      result += digits[digitIndex++];
    } else {
      result += char;
    }
  }
  
  return result;
}


console.log(formatNumber(79052479075, "+# ### ### ## ##"))
console.log(formatNumber(79052479075, "+# (###) ### ##-##"))
console.log(formatNumber(79052479075, "+# ### ### ## ##"))
console.log(formatNumber(81237068908090, "+## ### ### ## ##"))
console.log(formatNumber(8123706890, "+## ### ### ##-##"))
console.log(formatNumber(112, "+ () -"))
