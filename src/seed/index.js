const { MongoClient } = require('mongodb');

const TEST_MONGO_URL = 'mongodb://127.0.0.1:27017';

// Connect to the db and seed the db with authors
MongoClient.connect(
  TEST_MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async (err, client) => {
    if (err) throw err;
    const db = client.db('books-authors-api');

    const sampleAuthors = ['Test User1', 'Test User2', 'Test User3'].map(u => ({
        name: u,
        books: []
    }));
    await db.collection('authors').insertMany(sampleAuthors);
    console.log('All Data Seeded!');
    process.exit(0);
  }
);