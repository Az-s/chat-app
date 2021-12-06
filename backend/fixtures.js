const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const config = require('./config');
const Message = require('./models/Message');
const User = require("./models/User");

const run = async () => {
    await mongoose.connect(config.db.url);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [user1, user2, admin] = await User.create(
        {
            username: 'John',
            password: '123',
            role: 'user',
            token: nanoid()
        },
        {
            username: 'Mark',
            password: '321',
            role: 'user',
            token: nanoid()
        },
        {
            username: 'admin',
            password: '123',
            role: 'admin',
            token: nanoid()
        },
    );

    await Message.create(
        {
            user: user1.username,
            text: 'Some text from user 1',
        },
        {
            user: user2.username,
            text: 'Some other text from user 2',
        },
        {
            user: admin.username,
            text: 'test admin message',
        });

    await mongoose.connection.close();
};

run().catch(console.error);