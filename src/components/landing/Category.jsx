import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";
import { CategoryBedRoom, CategoryDining, CategoryLiving } from "../../assets";

const Category = () => {
  const category = [
    {
      thumbnail: CategoryDining,
      title: "Dining",
    },
    {
      thumbnail: CategoryLiving,
      title: "Living",
    },
    {
      thumbnail: CategoryBedRoom,
      title: "Bedroom",
    },
  ];

  return (
    <section>
      <Container>
        <SectionTitle
          title="Browse The Range"
          subtitle={"Elit proident duis et reprehenderit"}
        />
        <section className="category-list">
          {category?.map((cat, index) => (
            <div key={index}>
              <img src={cat?.thumbnail} alt={cat.title} />
              <h3>{cat?.title}</h3>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Category;
