const Strategy = require('./root/models/Strategy');

// إضافة استراتيجية جديدة
const addStrategy = async (req, res) => {
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
};

// الحصول على جميع الاستراتيجيات
const getAllStrategies = async (req, res) => {
    try {
        const strategies = await Strategy.find();
        res.json(strategies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { addStrategy, getAllStrategies };
