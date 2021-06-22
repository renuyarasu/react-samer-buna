// The GiHub Cards App
import React from "react";

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars.githubusercontent.com/u/1?v=4", company: "innRoad" },
  { name: "Sophie Alpert", avatar_url: "https://avatars.githubusercontent.com/u/7?v=4", company: "innRoad" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars.githubusercontent.com/u/3?v=4", company: "Facebook" },
];

class Card extends React.Component {
  render() {
    const profile = testData[0];
    return (
      <div className="github-profile">
        <img
          src={profile.avatar_url}
          style={{ border: "1px solid crimson" }}
        />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
