let str = "python";
let links = document.links;
console.log(links);
Array.from(links).forEach(function(link) {
  let href = link.href;
  if (href.includes(str)) {
    console.log(href);
  }
});


/*document.links[0].href
"http://codewithharry.com/"
document.links[0].href.includes('harry')
true */