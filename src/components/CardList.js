import React from "react";
import Card from "./Card";

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars.githubusercontent.com/u/1", company: "innRoad" },
    { name: "Sophie Alpert", avatar_url: "https://avatars.githubusercontent.com/u/3", company: "innRoad" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars.githubusercontent.com/u/7", company: "Facebook" },
  ];
  
const CardList = (props) => (
    <div>
        <Card {...testData[0]}/>
        <Card {...testData[1]}/>
        <Card {...testData[2]}/>
    </div>
)
export default CardList;
