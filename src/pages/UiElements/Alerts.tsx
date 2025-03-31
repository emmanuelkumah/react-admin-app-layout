import Card from "../../component/global/Card";
import { Alert } from "../../component/ui";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineErrorOutline } from "react-icons/md";

const Alerts = () => {
  return (
    <div className="space-y-6">
      <Card title="Sucess Alert" className="my-4">
        <Alert
          variant="success"
          title="Success Message"
          message="You are successfully registered"
          icon={<CiCircleCheck />}
        />
      </Card>
      <Card title="Error Alert" className="my-4">
        <Alert
          variant="error"
          title="Error Message"
          message="An error occurred while processing your request"
          icon={<MdOutlineErrorOutline />}
        />
      </Card>
      <Card title="Info Alert" className="my-4">
        <Alert
          variant="info"
          title="Info Message"
          message="Besure to check your email for confirmation"
          icon={<MdOutlineErrorOutline />}
        />
      </Card>
    </div>
  );
};

export default Alerts;
