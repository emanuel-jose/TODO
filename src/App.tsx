import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./global/global";

const App: React.FC = () => {
  return (
    <div className="App">
      <Home></Home>
      <GlobalStyle />
    </div>
  );
};

export default App;
