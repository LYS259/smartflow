const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected for indexing...');

        // إنشاء الفهارس
        const tasksCollection = mongoose.connection.collection('tasks');
        const documentsCollection = mongoose.connection.collection('documents');

        await tasksCollection.createIndex({ title: 'text', description: 'text' });
        await documentsCollection.createIndex({ title: 'text', description: 'text' });

        console.log('Indexes created successfully');
        process.exit(0); // إنهاء العملية بعد النجاح
    } catch (error) {
        console.error('Error creating indexes:', error);
        process.exit(1);
    }
};

connectDB();
