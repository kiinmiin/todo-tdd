const mongoose = require('mongoose')

async function connect() {
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected from MongoDB');
    });

    try {
        await mongoose.connect(
            'mongodb+srv://rasmo:yiZ6zOZHd6J65GG2@cluster0.p92qo.mongodb.net/todo-tdd',
            {useNewUrlParser: true} 
        );
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }  
} 

module.exports = {connect};
