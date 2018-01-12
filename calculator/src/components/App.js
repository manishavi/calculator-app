import React, { Component } from "react";
import ButtonBoard from './button_board';
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return <div>
        <MainPage
          value = '200'
        />
        <ButtonBoard />
      </div>;
  }
}

export default App;
