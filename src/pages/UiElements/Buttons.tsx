import { Button } from "../../component/ui";
import Card from "../../component/global/Card";
import { BsBagDash, BsBell } from "react-icons/bs";

const Buttons = () => {
  return (
    <div className="space-y-6">
      <Card title="Button sizes">
        <div className="flex gap-5 items-center">
          <Button size="xs" variant="primary">
            Extra small
          </Button>
          <Button size="sm" variant="primary">
            Small
          </Button>
          <Button size="md" variant="primary">
            Medium
          </Button>
          <Button size="lg" variant="primary">
            Large
          </Button>
          <Button size="xl" variant="primary">
            Extra large
          </Button>
        </div>
      </Card>
      <Card title="Default Buttons">
        <div className="flex gap-5 items-center">
          <Button size="sm" variant="primary">
            Button Text
          </Button>
          <Button size="sm" variant="red">
            Button Text
          </Button>
          <Button size="sm" variant="outline">
            Button Text
          </Button>
        </div>
      </Card>
      <Card title="Buttons with icons">
        <div className="flex gap-5 items-center">
          <Button size="md" variant="primary" startIcon={<BsBagDash />}>
            Button Text
          </Button>
          <Button size="md" variant="primary" endIcon={<BsBell />}>
            Button Text
          </Button>
        </div>
      </Card>
      <Card title="Outline buttons">
        <div className="flex gap-5 items-center">
          <Button size="md" variant="outline">
            Button Text
          </Button>
          <Button size="md" variant="outline">
            Button Text
          </Button>
        </div>
      </Card>
      <Card title="Outline buttons with icons">
        <div className="flex gap-5 items-center">
          <Button size="md" variant="outline" startIcon={<BsBagDash />}>
            Button Text
          </Button>
          <Button size="md" variant="outline" endIcon={<BsBell />}>
            Button Text
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Buttons;
