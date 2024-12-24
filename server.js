//IMP password: u3ShJzCXDrBHPffn
const password= 'u3ShJzCXDrBHPffn';
import mongoose from 'mongoose';
import customer from './controller.js'
import express from 'express'

//const cors = require('cors')

const app = express()
//app.use(cors())
app.use(express.json())

//const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://uma_db:"+password+"@clusterapi.fqc3m.mongodb.net/?retryWrites=true&w=majority&appName=Clusterapi";
//mongodb+srv://mongo:mongo@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri)

/*  const shop = new customer({
  name: 'Test!'
}); 
await shop.save(); */

app.post('/', async(req, res)=>{
  const name = req.body.name;
   const shop = new customer({
  name: name
}); 
await shop.save()
/* .then((val) => {return res.json("Sent", val)})
.catch((e) => {return(res.json("Errooor", e))}) */
return res.json("Sent")
})



app.get('/', async(req,res) => {
  const shop = await customer.find()
  //console.log(shop) 
  return res.json(shop)
})


app.delete('/', async(req,res) => {
  const name = req.body.name;
  const shop = await customer.deleteOne({ name: name })
  //console.log(shop) 
  return res.json(shop)
})

app.listen(8081,()=> {
  console.log('listeninig at ',8081)
})


/* 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */

