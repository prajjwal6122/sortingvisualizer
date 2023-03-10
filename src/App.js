import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SortingVisualisation from "./components/sortingvisualizer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <SortingVisualisation/>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
