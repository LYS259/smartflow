
const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, assignedTo } = req.body;

    const task = new Task({
      title,
      description,
      dueDate,
      assignedTo,
      status: "pending", // default status
    });

    await task.save();

    res.status(201).json({ message: "تم إنشاء المهمة بنجاح", task });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء إنشاء المهمة", error });
  }
};

module.exports = {
  createTask
};
