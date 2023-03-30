import "./css/App.css";
import { createContext, useReducer, useEffect, useContext } from "react";
import { reducer, initialStata } from "./reducers/userReducer";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import SubsUserPost from "./components/layouts/SubsUserPost";
import FollowersPosts from "./components/layouts/FollowersPosts";
import Explorer from "./components/layouts/Explorer";

export const UserContext = createContext();

const Routering = () => {
  const navigate = useNavigate()
  //eslint-disable-next-line
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type: "USER", payload: user}) //bu state ga userni saqlab qo'yadi
      }else{
        navigate("/signin");
      }
      //eslint-disable-next-line
  },[])

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/allpost" element={<Explorer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Create />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/followingpost" element={<SubsUserPost />} />
      <Route path="/followerspost" element={<FollowersPosts />} />
    </Routes>
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
