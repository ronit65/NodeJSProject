const url=require('url');

const MYURL=new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL

console.log(MYURL.href);

console.log(MYURL.toString());
//Host(root name)
console.log(MYURL.host);
//hostname without port name
console.log(MYURL.hostname);
//Pathname
console.log(MYURL.pathname);
//Searlized query
console.log(MYURL.search);
//Parms object
console.log(MYURL.searchParams);
//Add param
MYURL.searchParams.append('abc','123');
console.log(MYURL.searchParams);

//Loop through params
MYURL.searchParams.forEach((value,name) => console.log(`${name}:${value}`));