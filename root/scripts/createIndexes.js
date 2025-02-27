// scripts/createIndexes.js
const mongoose = require("mongoose");
const User = require("../models/User");
const Task = require("../models/Task");
const Document = require("../models/Document");

// إنشاء فهارس للبحث في الحقول المهمة
async function createIndexes() {
  try {
    // فهرس للبريد الإلكتروني للمستخدمين
    await User.createIndexes({ email: 1 });

    // فهرس للمحتوى في المهام
    await Task.createIndexes({ title: "text", description: "text" });

    // فهرس للمحتوى في الوثائق
    await Document.createIndexes({ title: "text", description: "text" });

    console.log("تم إنشاء الفهارس بنجاح!");
  } catch (error) {
    console.error("حدث خطأ أثناء إنشاء الفهارس:", error);
  }
}

createIndexes();
