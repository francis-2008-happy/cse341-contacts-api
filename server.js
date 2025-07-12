const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectToDb }= require('./db/conn');
const contactsRoutes = require('./routes/contacts'); // ✅ import the route

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Mount the contacts route
app.use('/contacts', contactsRoutes); // <-- This is important

// ✅ Optional base route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server and connect to DB
async function startServer() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
  }
}

startServer();






// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { connectToDb } = require('./db/conn');
// const contactsRoutes = require('./routes/contacts');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Routes (we’ll add contacts route next)
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// async function startServer() {
//   await connectToDb();
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// }

// startServer();



