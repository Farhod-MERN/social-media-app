import "./css/App.css";
import { createContext, useReducer, useEffect, useContext } from "react";
import { reducer, initialStata } from "./reducers/userReducer";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/layouts/Home";
import Signup from "./components/layouts/Signup";
import Signin from "./components/layouts/Signin";
import Profile from "./components/layouts/Profile";
import Navbar from "./components/Navbar";
import Create from "./components/layouts/Create";
import Chat from "./components/layouts/Chat";
import UserProfile from "./components/layouts/userProfile";

export const UserContext = createContext();

const Routering = () => {
  const history = useHistory()
  //eslint-disable-next-line
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type: "USER", payload: user}) //bu state ga userni saqlab qo'yadi
      }else{
        history.push("/signin")
      }
      //eslint-disable-next-line
  },[])

  return (
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
      <Route path="/user/:id">
        <UserProfile />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialStata);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routering />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
