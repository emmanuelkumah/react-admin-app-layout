import { MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  return (
    <div className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700">
      <button>
        <MdOutlineDarkMode />
      </button>
    </div>
  );
};

export default ThemeToggle;
