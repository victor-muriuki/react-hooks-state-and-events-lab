// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import React, { useState } from "react";
// import "./App.css"; 

// function App  () {
//   const [mode, setMode] = useState("light");

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//   };

//   return (
//     <div className={`App ${mode}`}>
//       <h1>Your App</h1>
//       <button onClick={toggleMode}>Toggle Mode</button>
//     </div>
//   );
// };

// export default App;
// App.js
import React, { useState } from "react";
import "./App.css"; // Make sure to have CSS classes for light and dark modes

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <h1>My App</h1>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
};

export default App;


