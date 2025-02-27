const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// إضافة مهمة جديدة
router.post('/', async (req, res) => {
    const { title, description, assignedTo, priority } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            assignedTo,
            priority
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// الحصول على جميع المهام
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
