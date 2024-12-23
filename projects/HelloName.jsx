import React from "react";

const HelloName = ({ name }) => {
  return <div>hello {name}</div>;
};

export default HelloName;
// how to use
// in App.jsx
// <HelloName name = "Bikash" />
// output : hello Bikash
