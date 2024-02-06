const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data')

// Error catch
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection successful');

    // Checks for preexisting user collection, deletes if exists
    const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    };

    // Checks for preexisting thought collection, deletes if exists
    const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    };

    // Creates new collections with seeded data
    await User.collection.insertMany(userData);
    await Thought.collection.insertMany(thoughtData);

    console.table(userData);
    console.table(thoughtData);
    console.info('Seeding complete');
    process.exit(0);
});