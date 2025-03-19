import Avatar from "../../assets/avatar2.jpg";
import { FaChevronDown } from "react-icons/fa6";

const UserSettings = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        <img
          src={Avatar}
          alt="User Profile"
          className="w-11 h-11 rounded-full"
        />
      </div>
      <div>Emmanuel</div>
      <div>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default UserSettings;
