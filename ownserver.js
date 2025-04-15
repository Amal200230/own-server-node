// created a shopping website server in which there is a nav bar which contain man , women section and if u click on that it should redirect to another page telling about the section

const http = require('http');

const server = http.createServer((req,res)=>{

console.log(req.url,req.method);

res.setHeader('Content-Type', 'text/html');

if(req.url=== '/man'){
    res.write('<h1>welcome to the mens section</h1>');
    return res.end();
}
else if(req.url=== '/woman'){
    res.write('<h1>welcome to the womens section</h1>');
    return res.end();
}
else if(req.url=== '/kids'){
    res.write('<h1>welcome to the kids section</h1>');
    return res.end();
}
else if(req.url=== '/cart'){
    res.write('<h1>welcome to the checkout section</h1>');
    return res.end();
}


res.write(`
    <html>
<head>
   
    <title>shopping cart</title>
</head>
<body>
    <h1> welcome to the shop</h1>
    <nav>
      <ul>
        <li><a href="/man">MAN </a></li>
        <li><a href="/woman">WOMEN </a></li>
        <li><a href="/kids">KIDS </a></li>
        <li><a href="/cart">CART </a></li>
      </ul>
    </nav>
  </body>
   </html>
`);
   res.end();
});

const port = 3003;
server.listen(port,()=>{
console.log(` running in http://localhost:${port}`);

});