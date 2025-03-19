import { GrNotification } from "react-icons/gr";

const Notification = () => {
  return (
    <div className="relative">
      <button className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700">
        <GrNotification />
      </button>
    </div>
  );
};

export default Notification;
