import React, { useState } from "react";
import axios from "axios";

const NotificationForm = ({ onNotificationAdded }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await axios.post("https://print-notifications-api.onrender.com/notifications", {
      user: "Admin",
      message
    });
    setMessage("");
    onNotificationAdded();
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <textarea
        className="border p-2 w-full"
        placeholder="أدخل نص الإشعار..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded w-full mt-2">
        📢 إرسال الإشعار
      </button>
    </div>
  );
};

export default NotificationForm;
