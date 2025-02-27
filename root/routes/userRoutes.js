const express = require('express');
const router = express.Router();
const User = require('../models/User');

// إضافة مستخدم جديد
router.post('/', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password,
            role
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// الحصول على جميع المستخدمين
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
