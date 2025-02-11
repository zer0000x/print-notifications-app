const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

// حفظ إشعار جديد
router.post("/", async (req, res) => {
  const { user, message } = req.body;
  const newNotification = new Notification({ user, message });
  await newNotification.save();
  res.json({ message: "تم حفظ الإشعار!" });
});

// استرجاع جميع الإشعارات
router.get("/", async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
});

module.exports = router;
