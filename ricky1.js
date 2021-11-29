const express = require('express');
const MongoClient = require('mongodb').MongoClient
const client =new MongoClient("mongodb+srv://ricky:ricky@cluster0.dfymb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const app = express();
let db;

app.use(express.json());
app.get('/',(req,resp)=>{
    resp.send("Ricky Shivdasani");
})
client.connect().then((mClient)=>{
    const db=mClient.db();
app.get("/api/ricky", (req,resp)=>{
    db.collection('ricky').find({}).toArray((err,result)=>{
        if(err) throw err
        resp.send(result)
    })
})
});

app.listen(7000,()=>{
    MongoClient.connect("mongodb+srv://ricky:ricky@cluster0.dfymb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true} , (error,result)=>{
        if(error) throw error
        result.db("myFirstDatabase");
        console.log("connection successful");
    }) 
})