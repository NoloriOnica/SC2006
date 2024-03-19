import React from "react";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <body id="bg">
      <form method="post" id="form">
        <div id="div1">
          <div id="title">
            WhereToEat!
            <br />
          </div>
        </div>
        <div id="div2">
          <input
            type="text"
            id="inputgc"
            name="groupCode"
            placeholder="Group Code"
          />
        </div>
        <div id="div3">
          <input
            type="text"
            name="groupName"
            placeholder="Name"
            id="inputname"
          />
        </div>
        <div id="div4">
          <button type="submit" id="buttjoin">
            Join Group
          </button>
        </div>
      </form>
      <a href="./group_creation.html">
        <button type="button" id="buttcg">
          Create Group
        </button>
      </a>
    </body>
  );
};

export default HomeMain;
