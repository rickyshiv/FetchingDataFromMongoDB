const {MongoClient} = require("mongodb");
const client =new MongoClient("mongodb+srv://ricky:ricky@cluster0.dfymb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
let db;
client.connect().then((mClient)=>{
    const db=mClient.db();
    db.collection("ricky")
    .insertOne({
    name :"Ricky Shivdasani",
    phone: "8602911525",
    email:"rickyshivd10@gmail.com",
    portfolio: "https://github.com/rickyshiv/rickyshiv.git"
})
    .then (()=>{
    console.log("data added");
    process.exit(0);
});

});