const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { id: "name" }, props.name),
    React.createElement("h3", { id: "breed" }, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "test" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Kocheng", breed: "Javanese" }),
    React.createElement(Pet, { name: "John", breed: "Persian" }),
    React.createElement(Pet, { name: "Agumon", breed: "Dino" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
