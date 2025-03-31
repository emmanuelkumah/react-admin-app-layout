import Card from "../../component/global/Card";
import { CardComponent, HorizontalCard } from "../../component/ui";
import CardImg1 from "../../assets/images/card-01.png";
import CardImg2 from "../../assets/images/card-02.png";
import CardImg3 from "../../assets/images/card-03.png";
const Cards = () => {
  return (
    <div className="space-y-6">
      <Card title="Card with image">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardComponent
            caption="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            image={CardImg1}
            hasButton={true}
          />
          <CardComponent
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            image={CardImg2}
            hasButton={true}
          />
          <CardComponent
            caption="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            image={CardImg3}
          />
        </div>
      </Card>
      <Card title="Horizontal Card with image">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HorizontalCard
            title="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            hasButton={true}
            image={CardImg1}
          />
          <HorizontalCard
            title="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            image={CardImg2}
          />
        </div>
      </Card>
      <Card title="Card with link">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardComponent
            caption="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            className="hidden"
          />
          <CardComponent
            caption="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum"
            className="hidden"
            hasLink={true}
          />
        </div>
      </Card>
    </div>
  );
};

export default Cards;
