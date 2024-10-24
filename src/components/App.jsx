import Header from "./Header/Header";
import Message from "./Message/Message";
import Modal from "./Modal/Modal";
import Section from "./Section/Section";

const filmsData = [
  {
    id: "1",
    title: "h2o",
  },
  {
    id: "2",
    title: "sherlock",
  },
  {
    id: "3",
    title: "it ends with us",
  },
  {
    id: "4",
    title: "oao",
  },
];

const goodsData = [
  {
    id: "1",
    title: "ice-cream",
  },
  {
    id: "1",
    title: "coffee",
  },
  {
    id: "1",
    title: "salt",
  },
];
const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Section />
      <Message title="my films" data={filmsData} />
      <Message title="my products" data={goodsData} />
      <Modal title="creative">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ipsam consectetur, quod odit, eveniet totam distinctio quasi, repellat
          perspiciatis accusamus ullam ipsum dolores cupiditate ex iure dolorum
          nemo dicta ducimus!
        </h4>
      </Modal>
      <Modal title="attractive">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ipsam consectetur, quod odit, eveniet totam distinctio quasi, repellat
          perspiciatis accusamus ullam ipsum dolores cupiditate ex iure dolorum
          nemo dicta ducimus!
        </h4>
        <button>click</button>
        <Message title="my films" data={filmsData} />
        <Message title="my products" data={goodsData} />
      </Modal>
    </div>
  );
};

export default App;
