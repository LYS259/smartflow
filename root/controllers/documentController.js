const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// الحصول على جميع المستندات
router.get('/', async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// إضافة مستند جديد
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newDocument = new Document({
        title,
        content
    });

    try {
        await newDocument.save();
        res.status(201).json(newDocument);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
