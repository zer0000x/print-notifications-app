import React, { useEffect, useState } from "react";
import axios from "axios";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get("https://print-notifications-api.onrender.com/notifications")
      .then(res => setNotifications(res.data));
  }, []);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">📌 الإشعارات السابقة:</h3>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index} className="border-b py-2">
            <strong>{notif.user}: </strong> {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
