import e from "express";
import cors from "cors";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import "dotenv/config";

const port = process.env.PORT || 5000;
const app = e();
// mongoDB uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tvnzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// middle ware
app.use(e.json());
app.use(cors());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const visasCollection = client.db("allVisas").collection("visasData");

    // all apis goes here
    // add visa to database
    app.post("/visas/add", async (req, res) => {
      const visaData = req.body;

      const result = await visasCollection.insertOne(visaData);
      res.send(result);
    });

    // get limited {only 6} visas from database
    app.get("/visas/latests", async (req, res) => {
      const cursor = visasCollection.find().limit(6);
      const visas = await cursor.toArray();
      res.send(visas);
    });
    // get visas from database
    app.get("/visas", async (req, res) => {
      const cursor = visasCollection.find();
      const visas = await cursor.toArray();
      res.send(visas);
    });

    // get single visa data
    app.get("/visas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visasCollection.findOne(query);

      res.send(result);
    });

    // get all visas uploader by the each user by filtering with their email
    app.get("/users/visas/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await visasCollection.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // delete my visa
    app.delete("/users/visas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visasCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server working");
});

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
