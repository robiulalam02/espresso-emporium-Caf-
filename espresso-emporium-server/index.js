const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x4uxqpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const database = client.db("coffeeShopDB");
    const coffeesCollection = database.collection("coffeesCollection");
    const userCollection = database.collection("users");

    app.get('/coffees', async (req, res) => {
      const result = await coffeesCollection.find().toArray();
      res.send(result)
    })

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    })

    app.post('/coffees', async (req, res) => {
      const coffeeData = req.body;
      const result = await coffeesCollection.insertOne(coffeeData);
      console.log(result);
      res.send(result);
    })

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const updatedCoffee = req.body;
      console.log(updatedCoffee);
      const filter = { _id: new ObjectId(id) }
      const updateDocument = {
        $set: updatedCoffee
      };
      const result = await coffeesCollection.updateOne(filter, updateDocument);
      res.send(result);
    })

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    })

    // user info to DB

    app.post('/users', async (req, res) => {
      const userData = req.body;
      const result = await userCollection.insertOne(userData);
      res.send(result);
    })

    app.patch('/users', async (req, res) => {
      console.log(req.body);
      const { email, lastSignInTime } = req.body;
      const filter = { email: email };
      const updatedDoc = {
        $set: {
          lastSignInTime: lastSignInTime
        }
      }
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
