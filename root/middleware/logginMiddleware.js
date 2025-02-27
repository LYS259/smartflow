const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // إنشاء توكن JWT عند نجاح عملية تسجيل الدخول
        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }); // استخدم سر قوي هنا
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = loginMiddleware;
