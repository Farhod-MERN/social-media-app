import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/layouts/Home";
import Signup from "./components/layouts/Signup";
import Signin from "./components/layouts/Signin";
import Profile from "./components/layouts/Profile";
import Navbar from "./components/Navbar";
import Create from "./components/layouts/Create";
import Chat from "./components/layouts/Chat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className="row container mx-auto">
        <div className="col-md-8 border"> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        {/* </div>
        <div className="col-md-4 border">Salom</div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
