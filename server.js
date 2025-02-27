const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const express = require('express');
const path = require('path');


// تعريف مسار المجلدات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// تعيين محرك القوالب EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.render('index');
});
//
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});


// إضافة مسار الجذر ("/")
app.get('/', (req, res) => {
  res.send('Welcome to Smart Flow API');
});



// 
app.use(express.static(path.join(__dirname, 'src/build')));

// 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'build', 'index.html'));
});


// إعدادات Middleware
app.use(cors());
app.use(bodyParser.json());

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect('mongodb://localhost:27017/smartFlow', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('Error connecting to MongoDB:', err);
});

// تعريف المسارات
const taskRoutes = require('./root/routes/taskRoutes');
const userRoutes = require('./root/routes/userRoutes');
const documentRoutes = require('./root/routes/documentRoutes');
const chatBotRoutes = require('./root/routes/chatBotRoutes');
const strategyRoutes = require('./root/routes/strategyRoutes');
const recommendationRoutes = require('./root/routes/RecommendationRoutes');

// المسارات (Routes)
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);
app.use('/chatbot', chatBotRoutes);
app.use('/strategies', strategyRoutes);
app.use('/recommendations', recommendationRoutes);


// بدء السيرفر
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
  res.render('index', { title: 'مرحبا في smartflow' });
});
