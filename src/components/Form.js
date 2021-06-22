import React from "react";

class Form extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.current.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="GiHub Username" ref={this.userNameInput} />
        <button>Add New Card</button>
      </form>
    );
  }
}

export default Form;
