
const getRecommendations = async (req, res) => {
    try {
      // مثال على الحصول على التوصيات بناءً على البيانات المدخلة
      const recommendations = await getRecommendationsFromDB(); // يجب أن تضيف هذا في مكان آخر
  
      res.status(200).json({ message: "تم جلب التوصيات بنجاح", recommendations });
    } catch (error) {
      res.status(500).json({ message: "حدث خطأ أثناء جلب التوصيات", error });
    }
  };
  
  module.exports = {
    getRecommendations
  };
  