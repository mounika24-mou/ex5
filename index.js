var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');

const port=process.env.PORT || 3000;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null,function(err,data){
        console.log("inside err check");
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
            res.end();  
        }
    })
    var path=url.parse(req.url).pathname;
    var query=url.parse(req.url).query;
   
    res.write("<h5 class='pl-5 text-center'>Name:mouni</h5>");
    res.write("<h5 class='pl-5 text-center'>Roll no: 19ITR049</h5>");
  
}).listen(port,()=>{
    console.log(port);
});
