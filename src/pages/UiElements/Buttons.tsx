import { BiChevronDown } from "react-icons/bi";
BiChevronRight;
import { Button } from "../../component/ui";
import { BiChevronRight } from "react-icons/bi";

const Buttons = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Button size="sm" startIcon={<BiChevronDown />} variant="primary">
        Button Text
      </Button>
      <Button size="sm" endIcon={<BiChevronRight />} variant="outline">
        Button Text
      </Button>
      <Button size="md" endIcon={<BiChevronRight />} variant="primary">
        Button Text
      </Button>
    </div>
  );
};

export default Buttons;
