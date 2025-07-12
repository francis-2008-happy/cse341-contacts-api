const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db;

const connectToDb = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    _db = client.db('cse341'); // Specify the database name
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
  }
};

const getDb = () => _db;

module.exports = {
  connectToDb,
  getDb
};








// const { MongoClient } = require('mongodb');
// const dotenv = require('dotenv');
// dotenv.config();

// let _db;

// const connectToDb = async (callback) => {
//   try {
//     const client = new MongoClient(process.env.MONGODB_URI);
//     await client.connect();
//     _db = client.db();
//     console.log('✅Connected to MongoDB');
//     callback();
//   } catch (err) {
//     console.error('❌ Failed to connect to MongoDB:', err);
//     // callback(err);
//   }
// };

// const getDb = () => _db;

// module.exports = {
//   connectToDb,
//   getDb
// };




