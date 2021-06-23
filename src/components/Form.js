// gaearon, sophiebits, sebmarkbage, bvaughn
import React from "react";
import axios from 'axios';

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    console.log(resp.data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GiHub Username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <button>Add New Card</button>
      </form>
    );
  }
}

export default Form;
