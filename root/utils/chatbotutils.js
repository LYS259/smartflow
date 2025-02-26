// utils/chatbotutils.js

// دالة لحساب النية من المحادثة
const calculateIntent = (message) => {
    // نموذج مبسط لحساب النية بناء على الكلمات
    if (message.includes("أمر")) {
      return "order";
    } else if (message.includes("مساعدة")) {
      return "help";
    } else {
      return "greeting";
    }
  };
  
  // دالة للتفاعل مع الشات بوت
  const respondToMessage = (message) => {
    const intent = calculateIntent(message);
  
    if (intent === "order") {
      return "هل يمكنك من فضلك توضيح طلبك؟";
    } else if (intent === "help") {
      return "كيف يمكنني مساعدتك؟";
    } else {
      return "مرحبًا! كيف يمكنني مساعدتك اليوم؟";
    }
  };
  
  module.exports = { respondToMessage };
  