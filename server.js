const express=require("express")

const app=express()

app.use('/',express.static('static'))

app.get('/hello',function(request, response){
     console.log(request)
     
     let name=request.query.name;
     
     let email=request.query.email;
     
    response.status(200).send('Hello world'+name+' '+email)
   
})



let messages=[
    {
        subject: "Message",
        message: "hello again"
    },
    
     {
        subject: "Message2",
        message:" hello"}
    ]

app.get('/messages',(request, response)=>{
    
    if (request.query.search!=undefined)
    {
        let filteredMessages=[];
        
     for(var i=0;i<messages.length;i++){
     if(messages[i].message.includes(request.query.search))
     {
     filteredMessages.push(messages[i])
     }
     
    }
    response.status(200).json(filteredMessages);
    }
    else
    {
        response.status(200).json(messages);
    }
})


app.post('/messages',(request, response)=>{
     response.status(200).send('not implemeted');
     
})

app.put('/messages',(request, response)=>{
     response.status(200).send('not implemeted');
     
})

app.delete('/messages',(request, response)=>{
     response.status(200).send('not implemeted');
     
})

app.listen(8080)