import React from 'react';
import "./App.css";
import Form from "./components/Form";
import CardList from "./components/CardList";


const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars.githubusercontent.com/u/1", company: "innRoad" },
  { name: "Sophie Alpert", avatar_url: "https://avatars.githubusercontent.com/u/3", company: "innRoad" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars.githubusercontent.com/u/7", company: "Facebook" },
];

class App extends React.Component {
  state = {
    profiles: testData,
  };
  render() {
    return (
      <div className="App">
        <h1 style={{ color: Math.random() < 0.5 ? "darkcyan" : "crimson" }}>
          The GiHub Cards App
        </h1>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>

    );
  }
}

export default App;

