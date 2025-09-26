const express = require('express');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 3000 || process.env.PORT;
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(process.env.DB_USER);



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oenll6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    const database = client.db("EJOB");
    const jobsColl=database.collection('jobs');
    const users=database.collection('users');
    const applications=database.collection('applications');

    app.get('/jobs',async(req,res)=>{
      const cursor=jobsColl.find();
      const result=await cursor.toArray();
      res.send(result);
    })

    app.get('/applications',async(req,res)=>{
      const cursor=applications.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get('/job/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)};
      const result=await jobsColl.findOne(query);
      res.send(result);

    })
    app.get('/myjob/:email',async(req,res)=>{
      const email=req.params.email;
      const query={hr_email:email}
      const cursor=jobsColl.find(query)
      const result=await cursor.toArray()
      res.send(result)
    })
    app.post('/apply',async(req,res)=>{
      const reqBody=req.body;
      const result=await applications.insertOne(reqBody);
      res.send(result)

    })

    app.delete('/deljob/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)}
      const result=await jobsColl.deleteOne(query)
      res.send(result)
    })

    app.post('/job',async(req,res)=>{
      const reqBody=req.body;
      const result=jobsColl.insertOne(reqBody);
      res.send(result)
    })


    //user Logic

    app.post('/adduser',async(req,res)=>{
      const reqBody=req.body;
      const result=await users.insertOne(reqBody);
      res.send(result);
    })

    app.get('/user/:id',async(req,res)=>{
      const email=req.params.email;
      const query={email:email};
      const result=await users.findOne(query);
      res.send(result)
    })

    app.patch('/updateuser',async(req,res)=>{
      const reqBody=req.body;
      const query={email:reqBody.email}
      const update={
        $set:{
          displayName:reqBody.displayName,
          photoURL:reqBody.photoURL,
          createdAt:reqBody.createdAt,
          lastLoginAt:reqBody.lastLoginAt
        }
      }
      const options = { upsert: true };
      const result=await users.updateOne(query,update,options);
      res.send(result);

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
