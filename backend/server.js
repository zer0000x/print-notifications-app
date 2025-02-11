const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const notificationsRoutes = require("./routes/notifications");

const app = express();
app.use(express.json());
app.use(cors());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ متصل بـ MongoDB")).catch(err => console.log(err));

// استخدام الـ Routes
app.use("/notifications", notificationsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🔥 السيرفر يعمل على http://localhost:${PORT}`));
