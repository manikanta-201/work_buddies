import "./HomeStyle.css"
import Records from "../../Components/Records/Records";
import Form from "../../Components/Form/Form";
const Home = () => {
  return (
    <section className="home-section">
      <Records />
      <Form />
    </section>
  );
};

export default Home;
