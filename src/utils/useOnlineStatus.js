import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    window.addEventListener("online", function () {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", function () {
      setOnlineStatus(false);
    });
  };
  return onlineStatus;
};

export default useOnlineStatus;
