const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Task = require('../models/Task');

// إعداد الإيميل
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// مهمة مجدولة للتنبيه إذا كانت هناك مهام قريبة من موعد التسليم
cron.schedule('0 8 * * *', async () => {
    try {
        const today = new Date();
        const upcomingTasks = await Task.find({ dueDate: { $lte: new Date(today.setDate(today.getDate() + 3)) } });

        upcomingTasks.forEach(task => {
            const message = {
                from: process.env.EMAIL,
                to: task.assignedToEmail,
                subject: `تنبيه: اقتراب موعد تسليم المهمة "${task.title}"`,
                text: `المهمة "${task.title}" تحتاج إلى المتابعة حيث أنها قريبة من موعد التسليم المحدد: ${task.dueDate}.`,
            };

            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.error('خطأ أثناء إرسال الإشعار:', err);
                } else {
                    console.log('تم إرسال الإشعار بنجاح:', info.response);
                }
            });
        });
    } catch (error) {
        console.error('خطأ في جدولة الإشعارات:', error);
    }
});
