const User = require('../models/User');
const Task = require('../models/Task');

// خوارزمية توصية بسيطة (بناءً على المهارات)
exports.recommendEmployee = async (task) => {
    try {
        const employees = await User.find({ role: "موظف" });
        let bestMatch = null;
        let highestScore = 0;

        employees.forEach(employee => {
            let score = 0;

            // إعطاء نقاط على المهارات المناسبة
            task.skillsNeeded.forEach(skill => {
                if (employee.responsibilities.includes(skill)) {
                    score += 1;
                }
            });

            // إذا كانت النتيجة أعلى، يصبح الموظف هو المرشح الأفضل
            if (score > highestScore) {
                highestScore = score;
                bestMatch = employee;
            }
        });

        return bestMatch;
    } catch (error) {
        console.error("خطأ في التوصية:", error);
        return null;
    }
};
