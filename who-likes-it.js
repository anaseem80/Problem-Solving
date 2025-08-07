/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


*/

// No likes for length == 0
// if the name is only when so I will put that name
// if two names will be 'name' and 'name'
// if three will be sperated 'name', 'name' and 'name'
// if is 4 or more names will take the first two and get the length of the rest names

function likes(names) {
    var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  let i = 0;

  return templates[idx].replace(/{name}|{n}/g, function (val, index) {
    return val === '{name}' ? names[i++] : names.length;
  });
}

likes(["Peter", "Ahmed", "Yasser"])
