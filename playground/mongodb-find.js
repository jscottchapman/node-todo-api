    //const MongoClient = require('mongodb').MongoClient;
    const { MongoClient, ObjectId } = require('mongodb');
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
        if (err) {
            console.log('Unable to connect');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        db.collection('Todos').find({_id: ObjectId('5b0f6ba604ac157ce3c2376d')}).toArray().then(docs => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        })

        client.close();
    })
