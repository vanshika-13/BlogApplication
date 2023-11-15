import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-xhvsmz7-shard-00-00.ca2qcio.mongodb.net:27017,ac-xhvsmz7-shard-00-01.ca2qcio.mongodb.net:27017,ac-xhvsmz7-shard-00-02.ca2qcio.mongodb.net:27017/?ssl=true&replicaSet=atlas-12z3gt-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;