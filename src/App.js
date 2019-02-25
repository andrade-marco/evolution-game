//App container
//Modules
import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";

//Internal dependencies
import AppPage from "./containers/AppPage";

//Generating and configuring store
const store = configureStore();

//Container
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppPage/>
      </Provider>
    );
  }
}

//Export
export default App;
