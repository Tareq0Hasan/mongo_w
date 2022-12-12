const http = require('http');

const server =  http.createServer((req,res)=>{
if(req.url=='/'){
    res.write('<html><head><title>Form</title></head>');
    res.write('<body><form method="post" action="/about"><input name="message"></textarea></form></body> </html>')

    res.end();
}else if (req.url== '/about' && req.method=="POST" ){
    const mes_body=[];
    req.on('data',(chunk)=>{
  //   res.write(chunk.toString());
        
        mes_body.push(chunk);
    
    });

    req.on('end',()=>{
        console.log('stream finished');
        const body_parse= Buffer.concat(mes_body).toString();
        console.log(body_parse);
    });
    res.write('thank you for submating');
    res.end();
   // console.log(req);
  
    
}else {
    res.write('page not found');
    res.end();
}

});server.listen(8080);

console.log('server is running ');