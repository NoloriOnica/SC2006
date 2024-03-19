import React from "react";
import "./GCMain.css";

const GCMain = () => {
  return (
    <body id="bg">
      <form method="post" id="i88x4i">
        <div id="div1">
          <div id="ibjl4j">GC123 Group Settings:</div>
        </div>
        <div id="idtnxa">
          <select
            type="text"
            options="[object Object],[object Object]"
            id="ivglol"
            required
            name="Select Time Limit"
          >
            <option value="opt0" disabled selected>
              Select Time Limit...
            </option>
            <option value="opt1">1 min</option>
            <option value="opt2">3 mins</option>
            <option value="opt3">5 mins</option>
          </select>
          <select
            type="text"
            options="[object Object],[object Object]"
            name="Diet Restrictions"
            id="iiqtvg"
          >
            <option value="opt0">Diet Restrictions</option>
            <option value="opt1">Halal</option>
            <option value="opt2">Vegetarian</option>
            <option value="opt3">No Seafood</option>
          </select>
        </div>
        <div id="igq7ei">
          <select
            type="text"
            options="[object Object],[object Object]"
            name="Location"
            id="ij542h"
          >
            <option value="opt0">Select Location</option>
          </select>
          <select
            type="text"
            options="[object Object],[object Object]"
            required
            name="Data and Time"
            id="ija4eh"
          >
            <option value="opt0">Date and Time</option>
          </select>
        </div>
        <div id="ioe2fi">
          <button type="submit" id="iz5pzj">
            Begin Choosing WhereToEat!
          </button>
        </div>
      </form>
      <div class="gjs-grid-row" id="ia4yqs">
        <div class="gjs-grid-column" id="in3kjd">
          <div id="intd94">
            Members: 
            <br />
          </div>
          <div id="i46pbp">MEMBER A</div>
        </div>
      </div>
      <a href="./home_1.html">
        <button type="button" id="i6cuzt">
          Back to Home
        </button>
      </a>
    </body>
  );
};

export default GCMain;
