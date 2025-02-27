// controllers/chatBotController.js
const { generateChatBotResponse } = require("../utils/chatbotutils");

const chatBotInteraction = async (req, res) => {
  try {
    const { userInput } = req.body;

    // إرسال الاستفسار إلى الـ ChatBot
    const response = await generateChatBotResponse(userInput);

    // إرجاع الرد من الـ ChatBot
    res.json({ message: response });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء التفاعل مع الـ ChatBot", error });
  }
};

module.exports = {
  chatBotInteraction
};
