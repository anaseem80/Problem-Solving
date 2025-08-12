/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url) {
  let domainName = '';

  if (url.includes('://')) { 
    const urlArray = url.split('/'); 
    domainName = urlArray[2].startsWith('www.')
      ? urlArray[2].slice(4)
      : urlArray[2];
  } else {
    domainName = url.startsWith('www.')
      ? url.slice(4)
      : url;
  }

  return domainName.split('.')[0];
}

console.log(domainName("https://www.5xcg8jkvme-z7ijeg.de/archive/"))