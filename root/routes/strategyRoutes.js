const express = require('express');
const router = express.Router();
const Strategy = require('../models/strategy'); // تأكد من استخدام المسار الصحيح

// إضافة استراتيجية جديدة
router.post('/', async (req, res) => {
    const { name, description } = req.body;

    try {
        const newStrategy = new Strategy({
            name,
            description
        });
        await newStrategy.save();
        res.status(201).json(newStrategy);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// الحصول على جميع الاستراتيجيات
router.get('/', async (req, res) => {
    try {
        const strategies = await Strategy.find();
        res.json(strategies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
