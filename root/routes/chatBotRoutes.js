const express = require('express');
const router = express.Router();


router.get('/ask', (req, res) => {
    const question = req.query.question;

    if (!question) {
        return res.status(400).json({ message: "Question is required" });
    }

    // معالج الذكاء الاصطناعي (يمكنك استخدام API أو خوارزمية معينة هنا)
    const response = `You asked: ${question}. This is where AI would respond.`;

    res.json({ answer: response });
});

module.exports = router;
