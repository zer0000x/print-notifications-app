import React from "react";
import Navbar from "./components/Navbar";
import NotificationForm from "./components/NotificationForm";
import NotificationList from "./components/NotificationList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <NotificationForm />
        <NotificationList />
      </div>
    </div>
  );
}

export default App;
